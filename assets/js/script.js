var listEl = document.querySelector("#quizSelection");
var li1 = document.querySelector("#choice1");
var li2 = document.querySelector("#choice2");
var li3 = document.querySelector("#choice3");
var li4 = document.querySelector("#choice4");
var h1El= document.querySelector("#quizQuestion");
var h2El= document.querySelector("#result");
var quizArea = document.querySelector(".quizArea");
var timeLeftDisplay= document.querySelector("#timeLeftDisplay");
var currentScore = document.querySelector("#currentScore");
var timeLeft = 50;
var questionsLeft=0
var score = 0;
    
var isCorrect = false;
var canClick=true;
var questions = [
    {question: "What tag is used to define an interactive field where users can enter data?",
    a_text: "<p>",
    b_text: "<div>",
    c_text: "<head>",
    d_text: "<input>",
    answer: "4"},

    {question: "What tag is used to define the bottom section (footer) of an HTML document?",
    a_text: "<button>",
    b_text: "<h1> to <h6>",
    c_text: "<footer>",
    d_text: "<td>",
    answer: "3"},

    {question: "What does CSS stand for?",
    a_text: "Colorful Style Sheets",
    b_text: "Cascading Style Sheets",
    c_text: "Creative Style Sheets",
    d_text: "Computer Style Sheets",
    answer: "2"},

    {question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    a_text: "In the <body>section" ,
    b_text: "At the end of the document",
    c_text: "In the <head> section",
    d_text: "After the closing </HTML> tag",
    answer: "3"},

    {question: "Inside which HTML element do we include the JavaScript link?",
    a_text: "<js>",
    b_text: "<scripting>",
    c_text: "<script>",
    d_text: "javascript>",
    answer: "3"}
];
var quizQuestions =[];
var currentQuestion = {};

function quiz(){
        
    score =0;
    localStorage.setItem("score",score);
    quizQuestions =[...questions]
    console.log ("quizquestions");
    console.log(quizQuestions)
    
    getChoice();

}


function getChoice(){    
   
    if (quizQuestions.length === 0 ) {
        //go to the end page
        return window.location.assign("./player.html");
        
      }

    //while(currentQuestion.length>0){
    currentQuestion = quizQuestions[0]
    console.log (currentQuestion);
    
    h1El.textContent = currentQuestion.question;
    li1.textContent = "1. " + currentQuestion.a_text;
    li2.textContent = "2. " + currentQuestion.b_text;
    li3.textContent = "3. " + currentQuestion.c_text;
    li4.textContent = "4. " + currentQuestion.d_text;

    console.log("quiz displayed");  

    h1El.setAttribute("style", "font-size:24px; text-align:left;");
    li1.setAttribute("data-number", "1" );
    li2.setAttribute("data-number", "2" );
    li3.setAttribute("data-number", "3" );
    li4.setAttribute("data-number", "4" );

    li1.setAttribute("data-answer", currentQuestion.answer );
    li2.setAttribute("data-answer", currentQuestion.answer );
    li3.setAttribute("data-answer", currentQuestion.answer );
    li4.setAttribute("data-answer", currentQuestion.answer );
    
    quizQuestions.splice(0,1);
    console.log ("testing splice");
    console.log(quizQuestions);
    
    var canClick =true;
    listEl.addEventListener('click',function(event){
    console.log("clickd on OL");
    var element = event.target;
    var choice = element.getAttribute("data-number");
    var answer = element.getAttribute ("data-answer")

    
    if (!canClick) return;
    canClick=false;

    console.log (choice +"selected choice");
    console.log (answer + "corrected choice")
        if (choice == answer) {
            localStorage.getItem("score",score);
            score = score + 20;
            localStorage.setItem("score",score);
            h2El.textContent ="Correct";
            h2El.setAttribute ("style", "color:green;")
            localStorage.setItem("score",score);
            console.log ("Correct"); 
            console.log ("Correct");  
            currentScore.textContent= "The current score is: " + score;
        }
        else {
            h2El.textContent ="Inorrect";
            h2El.setAttribute ("style", "color:red;")
            console.log ("Iorrect");
            timeLeft=timeLeft-10;
            timeLeftDisplay.textContent = "Time Left: " + timeLeft;
        }
    console.log (score);
        
    });
    
    setTimeout(() => {
        //selectedChoice.parentElement.classList.remove(classToApply);
        getChoice();
      }, 2000);
   
   // }   
}




quiz();
