import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}
    correctAnswers=0;
    isSubmited=false;//use to show correct answers when submited
    myQuestions=[
        {
            id:"Question",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map:loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which one of the file is invalid in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]
    //asigna los valores de name(id) y value de los inputs
    changeHandler(event){
        //asigna los valores de name(id) y value de los inputs
        const {name,value}=event.target;
        this.selected={...this.selected,[name]:value};
    }
    // retorna false en caso  todos los radio inputs esten seleccionados
    get isDisabled(){
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }
    //para aplicar estilo dependiendo si se respondio todo correcto o no
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length=== this.correctAnswers? 'slds-text-color_success':'slds-text-color_error'}`;
    }
    //para handlear el form 
    submitHandler(event){
        event.preventDefault();//hace que no refresque el submit
        let correct=this.myQuestions.filter(item=>this.selected[item.id]== item.correctAnswer);
        this.correctAnswers=correct.length;
        this.isSubmited=true;

    }
    //para resetear el form
    resetHandler(){
        this.selected={};
        this.correctAnswers=0;
        this.isSubmited=false;
    }
}