
//var rowEl = document.querySelector("#nxtScore")
var tBodyEl = document.querySelector("#hsBdy");
var highScore = JSON.parse(localStorage.getItem("highScore"));
var clearScores = document.querySelector("#clearScores");
console.log(highScore);
function addScore(){
    if (highScore.length===0) {
        //||JSON.parse(localStorage.getItem("highScore"))== null) {
        return;
    }
    for(var i=0; i<highScore.length; i++){

        var rowEl = document.createElement("tr");
        var rankEl = document.createElement("td")
        var nameEl = document.createElement("td")
        var scoreEl = document.createElement("td")
        
        
        rankEl.innerHTML= i+1;
        nameEl.innerHTML=highScore[i].playerName;
        scoreEl.innerHTML=highScore[i].playerScore;

        console.log (scoreEl.innerHTML);

        tBodyEl.appendChild(rowEl);
        rowEl.appendChild(rankEl);
        rowEl.appendChild(nameEl);
        rowEl.appendChild(scoreEl);

        nameEl.setAttribute("ID","nameCol");

    }
}
function clearScore(){
    localStorage.clear();
    var hScore = {
        playerName: "no one",
        playerScore:0
    };
    var highScore= [hScore];
    localStorage.setItem("highScore", JSON.stringify(highScore));

    
}
clearScores.addEventListener("click", function(){
    clearScore();
    console.log("cleared")
    window.location.reload();
});

addScore();