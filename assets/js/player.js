var nameText = document.getElementById("nameText");
var btn1= document.getElementById("btn1");

var textI
var score = localStorage.getItem("score",score);
console.log(score);
var hScore = {
    playerName: "no one",
    playerScore:0
};
var highScore= [hScore];

if (JSON.parse(localStorage.getItem("highScore"))===null){
    localStorage.setItem("highScore", JSON.stringify(highScore));   
}

highScore = JSON.parse(localStorage.getItem("highScore"));
    console.log (highScore);
    
function storeScores(){

        btn1.addEventListener ("click", function(event){
        textI = nameText.value;
        console.log (textI);
        console.log (score);
        hScore.playerName=textI;
        hScore.playerScore=score;
        console.log (hScore); 
        console.log (highScore); 
        highScore = JSON.parse(localStorage.getItem("highScore"));
        console.log (highScore);
        highScore.unshift(hScore);
        localStorage.setItem("highScore", JSON.stringify(highScore));
        highScore = JSON.parse(localStorage.getItem("highScore"));
        console.log (highScore);
        highScore.sort((a, b) => b.playerScore - a.playerScore);
        console.log (highScore); 
        highScore = highScore.slice(0,3);
        console.log (highScore); 
        localStorage.setItem("highScore", JSON.stringify(highScore));
    });

}
storeScores();

