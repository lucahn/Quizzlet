$(document).ready(function(){

var score = 0;
var num = 0;

$("#start").click(startGame);
$("#restart").click(restartGame);

var questions = [
    {
        prompt: "Do you want TO be my boyfriend?",
        optA:"yes",
        optB:"no",
        optC:"no",
        optD:"no",
        answer: "a"
    },

    {
        prompt: "Do you WANT to be my boyfriend?",
        optA:"niet",
        optB:"hai",
        optC:"niet",
        optD:"niet",
        answer: "b"
    },

    {
        prompt: "Do YOU want to be my boyfriend?",
        optA:"nope",
        optB:"nope",
        optC:"yup",
        optD:"nope",
        answer: "c"
    },

    {
        prompt: "Do you want to BE my boyfriend?",
        optA:"NO",
        optB:"NO",
        optC:"NO",
        optD:"YES",
        answer: "d"
    },
]

var ans = questions[num].answer;

function displayQuest() {
    $("#start").html("");
    $("#restart").html("");
    $("#quest").html("<p>" + questions[num].prompt + "<p>");
    $("#opt1").html("<button>" + questions[num].optA + "</button>");
    $("#opt2").html("<button>" + questions[num].optB + "</button>");
    $("#opt3").html("<button>" + questions[num].optC + "</button>");
    $("#opt4").html("<button>" + questions[num].optD + "</button>");
    $("#messages").html("");
    setTimeout(nextQuest, 3000);
    var response = $("<button>").on("click", ".answButton", function(){
        alert("click");
    });
    if (response = ans) {
        score++;
    }
}

function nextQuest() {
    num++;
    $("#quest").html("");
    $("#opt1").html("");
    $("#opt2").html("");
    $("#opt3").html("");
    $("#opt4").html("");
    $("#messages").html("hellooooooo");
    setTimeout(displayQuest, 1000);
    if (num === questions.length){
        stopQuiz();
    }
}

function startGame() {
    if($("#start").click(startGame)) {
        setTimeout(displayQuest, 1000);
    }
}

function restartGame() {
    score = 0;
    num = 0;
    startGame();
}

function stopQuiz() {
    
    clearInterval(displayQuest);
    clearInterval(nextQuest);

    $("#messages").text("you score: " + score + "/" + questions.length);
    $("#restart").html("<h2><button>Restart</button></h2>");
}

});