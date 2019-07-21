var questionArray = [
    {
        question: "What is the most common breakfast food in Australia?",
        options: [
            "Kasha",
            "Vegemite on toast",
            "Mohinga",
            "Cold cereal",
        ],
        answer: "Vegemite on toast",
    },
    {
        question: "Which of these is NOT a national breakfast dish around the world?",
        options: [
            "Fish broth with lemongrass, garlic, ginger, and fried fish cakes.",
            "Coconut rice, anchovies, hot sauce, peanuts, and boiled eggs.",
            "Tripe with eggs",
            "Kimchi ramen. ",
        ],
        answer: "Kimchi ramen.",
    },
    {
        question: "Which of these is NOT a national picnic dish around the world?",
        options: [
            "Mussels, octopus, and unleavened bread.",
            "Fried sausage-wrapped boiled egg.",
            "Pickled herring with schnapps.",
            "Potato casserole with cheese, cream, butter, and cornflakes.",
        ],
        answer: "Potato casserole with cheese, cream, butter, and cornflakes.",
    },
    {
        question: "Which of the following is a real wedding cake tradition around the world?",
        options: [
            "A cake topped with egg noodles in Thailand.",
            "A gold-leaf decorated cake topped with a living tree in Bermuda.",
            "A tower of cream-filled puff pastry in the form of a gigantic pyramid in France.",
            "All of the above.",
        ],
        answer: "All of the above.",
    },
    {
        question: "What is a popular Christmas food tradition in Japan?",
        options: [
            "Kentucky Fried chicken",
            "Sushi",
            "Rice cake soup",
            "Spam",
        ],
        answer: "Kentucky Fried chicken",
    },
    {
        question: "What is a popular Christmas food tradition in the Philippines?",
        options: [
            "Halwa poori",
            "Christmas pudding",
            "Roast Pig",
            "Silog",
        ],
        answer: "Roast Pig",
    },
];

var correctAnswer;
var incorrectAnswer;
var counter = 10;
var timer;

$('#startBtn').on('click', function(){
	$(this).hide();
    loadQuestions();
    startCountdown()
    correctAnswer=0;
    incorrectAnswer=0;
    unanswered=0;
});

function startCountdown(){
    counter--;
    $('#timeLeft').html('<h3>Time Remaining: ' + counter + '</h3>');
    if (counter === 0) {
        timesUp();
        clearInterval(timer);
      };
}

function loadQuestions() {
    timer = setInterval(startCountdown, 1000);

    for (j=0; j<questionArray.length; j++) {
        let currentItem=questionArray[j];
        let questionIndex=("<h3>" +currentItem.question +"</h3>");

        $("#questionArray").append(questionIndex);

        for (i=0; i<4; i++) {
            $("#answerList").append("<button class='answer-button' id='button' data-name='" + currentItem.options[i]
         + "'>" + currentItem.options[i] + "</button>");

            $('.answer-button').on('click', function(event) {
                if($(event.target).attr("data-name") === currentItem.answer){
                correctAnswer=0;
                correctAnswer++;
                console.log(currentItem.answer);
                console.log("answer is correct!")
                console.log(correctAnswer);
                }
                else{
                incorrectAnswer=0;
                incorrectAnswer++;
                console.log(currentItem.answer);
                console.log("answer is incorrect!")
                console.log("incorrect answers: " + incorrectAnswer);
                }    
            });
        }
    }
}


    $("#submitBtn").on('click', function() {
        timesUp();
    });

function timesUp() {
    var totalAnswered = correctAnswer+incorrectAnswer;
    var unanswered = 6-totalAnswered;
    $('#correctAnswers').html("<br><br><h3>Correct Answers: " + correctAnswer+ "</h3>");
    $('#incorrectAnswers').html("<h3>Incorrect Answers: " + incorrectAnswer+ "</h3>");
    $('#unanswered').html("<h3>Unanswered: " + unanswered+ "</h3>" + "<br></br>");
};