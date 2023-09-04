const questions = [
    {
        question: "which is the largest animal in the world?",
        answers:[
            {text:"shark" , correct: false},
            {text:"blue whale" , correct: true},
            {text:"elephant" , correct: false},
            {text:"giraffe" , correct: false}
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answers:[
            {text:"Australia" , correct: true},
            {text:"Asia" , correct: false},
            {text:"Africa" , correct: false},
            {text:"Antarctica" , correct: false}
        ]
    },
    {
        question: "what is the DOM  fullform?",
        answers:[
            {text:"Document object orientation" , correct: false},
            {text:"document orinted model" , correct: false},
            {text:"Document object model" , correct: true},
            {text:"none of this" , correct: false}
        ]
    },
    {
        question: "which is not a non-primitive datatypes ?",
        answers:[
            {text:"function" , correct: false},
            {text:"Object" , correct: false},
            {text:"String" , correct: true},
            {text:"Array" , correct: false}
        ]
    },

    {
        question: "which is not a non-primitive datatypes ?",
        answers:[
            {text:"function" , correct: false},
            {text:"Object" , correct: false},
            {text:"String" , correct: true},
            {text:"Array" , correct: false}
        ]
    },

];

var questionelement = document.getElementById("question");
var answerbutton = document.getElementById("answerbutton");
var nextbtn = document.getElementById("nextbtn");

let currentquestionindex = 0;
let score = 0;

// questoins should be starts from 0 index starts function


function startquiz() {
    currentquestionindex = 0;
    score = 0;
    showquestion();
}
function showquestion(){
    resetquestion();
    let currentquestion = questions[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionelement.innerHTML = questionno + ". " + currentquestion.question;

    currentquestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);

        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectanswer);

    })
}
function resetquestion() {
    nextbtn.style.display="none";
    while (answerbutton.firstChild) 
    {
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectanswer(e){
    var selectedbutton = e.target;
    var iscorrect = selectedbutton.dataset.correct === "true";
    if (iscorrect) {
        selectedbutton.classList.add("correct");
        score++;
    }
    else
    {
        selectedbutton.classList.add("incorrect")
    }

    Array.from(answerbutton.children).forEach(buttons => {
        if(buttons.dataset.correct === "true");
        {
            selectedbutton.classList.add("correct");
            
        }
        buttons.disabled = "true";
    });
    nextbtn.style.display = "block";
}
function showscore() {
    resetquestion();

    questionelement.innerHTML =`you scored ${score} out of ${questions.length}!`
    nextbtn.innerHTML="Play Again";
    nextbtn.style.display="block";

}
function handlenextbtn() {
    currentquestionindex++;
    if(currentquestionindex < questions.length)
    {
        showquestion();

    }
    else
    {
        showscore();
    }
}
nextbtn.addEventListener("click",()=>
{
    if (currentquestionindex < questions.length) {
        handlenextbtn();
    }else{
        startquiz();
    }
})

startquiz();

