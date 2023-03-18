var startBtn = document.querySelector("#startBtn");
var quizArea = document.querySelector(".quizArea");
var timeLeftDisplay= document.querySelector("#timeLeftDisplay")
var timeLeft = 0;
var questionsLeft=0
var score = 0;
var isCorrect = false;
var canClick=true;
var quizQuestions = [
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

var h1El = document.createElement ("h1");
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var divEl=document.createElement("div");
var h2El= document.createElement ("h2");


function getChoice(i){
    
    quizQuestion = quizQuestions[i];
               
    h1El.textContent=quizQuestions.question;
    li1.textContent= "1. " + quizQuestion.a_text;
    li2.textContent= "2. " + quizQuestion.b_text;
    li3.textContent= "3. " + quizQuestion.c_text;
    li4.textContent= "4. " + quizQuestion.d_text;

    quizArea.appendChild(h1El);
    quizArea.appendChild(divEl);
    divEl.appendChild(listEl);
    console.log("div created");
    listEl.appendChild(li1);
    console.log("list items created");
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    console.log("quiz displayed");  

    h1El.setAttribute("style", "font-size:24px; text-align:left;");
    li1.setAttribute("data-number", "1" );
    li2.setAttribute("data-number", "2" );
    li3.setAttribute("data-number", "3" );
    li4.setAttribute("data-number", "4" );

    li1.setAttribute("data-answer", quizQuestion.answer );
    li2.setAttribute("data-answer", quizQuestion.answer );
    li3.setAttribute("data-answer", quizQuestion.answer );
    li4.setAttribute("data-answer", quizQuestion.answer );
    
    canClick =true;
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
            score = score + 20;
            h2El.textContent ="Correct";
            h2El.setAttribute ("style", "color:green;")
            console.log ("Correct");
            divEl.appendChild(h2El);
        }
        else {
            h2El.textContent ="Inorrect";
            h2El.setAttribute ("style", "color:red;")
            console.log ("Iorrect");
            divEl.appendChild(h2El);
        }
    console.log (score);
    });
//getChoice(i);
}





function quiz(){
     //to clear the quiz area for the questions
    
    startBtn.addEventListener("click", function(){
        console.log("start quiz button clicked");
        quizArea.innerHTML="";
        
       for (var i=0; i<quizQuestions.length; i++){
       getChoice(i);
       }
        
       
        //console.log(i + "increased i");
       // if (i == quizQuestions.length){
           // return;
     //   }
       // else{
           // setTimeout( function(){
           //     console.log("delaying");
           //     getChoice();
          //  },1000);


           
      //  }
        //console.log (choice + "in quiz");
        

    });
    

    timeLeftDisplay.append(" "+timeLeft);
    console.log(timeLeftDisplay.innerHTML);   
 
}

quiz();
