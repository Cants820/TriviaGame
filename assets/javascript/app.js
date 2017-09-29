// #Trivia Game 
 
// #Once Play button is clicked user has 30 secs to answer all the questions.
// #Each Question is displayed in a screen (Question Objective) 
// #Press Done to finish or when the timer stops (goes to a new screen that tallys correct, wrong, unanswered)


// Weird Trivia
//1. The ____ originated in Crotia.
// ballpoint pen, necktie,chain saw, box office | answer: necktie

//2. Deipnophobia is the fear of ________.
// cell phone battery depletion, car door dents, police sirens, dinner conversations | answer dinner conversations

//3. Between 1900 and 1920, ____ was an Olympic event.
// sack race, three-legged race, egg on spoon, tug of war | answer tug of war

//4.On the 2011 Czech Republic census, 15,070 people listed their religion as '___'.
//Jedi, Lady Gaga, Harry Potter, Holy Roman Empire | answer Jedi



// #variables 
// #right, wrong, question object, unanswered, answer
// an object that stores questions answers





// Game Starts with a Button that you need to click to start the game
// using the document.ready to load all the functions 
$(document).ready(function() {
// global variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
var choices;
var timeRemaining = 30;
var intervalId;


var questionAnswer = {
            allQuestions: {
               question1:[["Which NBA team won the most titles in the 90s ?"],["New York","Portland Trailblazers","Los Angeles Lakers","Chicago Bulls"], ["Chicago Bulls"]],
               question2:[["The ____ originated in Crotia."],["ballpoint pen","necktie","chain saw", "box office"], ["necktie"]],
               question3:[["Between 1900 and 1920, ____ was an Olympic event."], ["sack race", "three-legged race", "egg on spoon", "tug of war"] ,["tug of war"]],
               question4:[["On the 2011 Czech Republic census, 15,070 people listed their religion as '___'."],["Jedi", "Lady Gaga", "Harry Potter", "Holy Roman Empire"],["Jedi"]]
            }
} 

function generateQuestions(questionAnswer) {
  //object.keys is a method that shows all keys
  var questionKeys = Object.keys(questionAnswer);
  //questionKey is equal to 4 since there are four keys in questionAnswer obj.
  for (var i = 0; i < questionKeys.length; i++){
    //questions pulls out all the first index inside obj.
    var question = questionAnswer[questionKeys[i]][0];
    //console.log("question list " + question);
    var solutionChoices = questionAnswer[questionKeys[i]][1];
    var correctAnswer = questionAnswer[questionKeys[i][2]];
    //console.log(solutionChoices);

    // var htmlQuestion = $('<p>');
    // htmlQuestion.attr("id", question);
    // // htmlQuestion.text(question);
    // htmlQuestion.append(question);
    var html = "<div id= question" + i + "/>"; 
    html += "<p>" + question + "</p>";
   


    console.log(question);
     //console.log(html);
    //console.log("questions " + html);
    
    //console.log("questions" + questions);
  
    
    // create a div with id of questionskey[i]
    // for (var i = solutionChoices.length - 1; i >= 0; i--) {
    // //create your radio butons with each value/possible as
    // //console.log("solutionChoices " + solutionChoices);
    // }
    for (var j = 0; j < solutionChoices.length ; j++) {
      //html += "<div id= choices"+j +"/>"
      
      //'id=' + solutionChoices[j];
      
      html += "<input type=radio" + " value='"+ solutionChoices[j]  + "' data-choices='"  + solutionChoices[j]  + "'name='group"; 
      html += i + "'/>"
      html += solutionChoices[j];

      
      

    //console.log("multiple choices" + solutionChoices);
    //when radio button is clicked 
    $("#questions").on("click", function() {
    //capturing right button clicks
    // var userAnswer = $(this).attr("value",i);
      
//listens to radio button checked then compare
      var answer = $('input:checked').val();
      console.log(answer);
// increment are total off. It is comparing though. I think that every click is tallied more than once which is interesting.
        if(answer === correctAnswer) {
          correct =+ 1;
          console.log("correct " + correct);
        } else {
          wrong =+ 1;
          console.log("wrong " + wrong);
        }

    });



    }


 
      
  //sends string to renderQuestion 
  renderQuestion(html);

  }
    
}   //nested for loop on var questions, array of 5
    //for each one create <input type="radio" value="question[i]"
    
function renderQuestion(html) {
  //grab a hold of the questions div and append the new htmlQuestion
  //$("#questions").append(htmlQuestion);
   $("#questions").append(html);
   
}



//when start game is clicked
$("#start-game").on("click",function(){

//once start game has been pressed timer decrements
$("#start-game").hide();

generateQuestions(questionAnswer.allQuestions);
run();


});


// #Once Play button is clicked user has 30 secs to answer all the questions.
function run() {
  
  var intervalId = setInterval(decrementTimer,1000);
  decrementTimer();
  //console.log(timeRemaining);
}


function decrementTimer(){
  
  timeRemaining--;
  renderTimeRemaining()

//display the number by targeting the selector time-remaining

}

function renderTimeRemaining(){
  $("#time-remaining").html("<h2>" + timeRemaining + "</h2>");
//once number reaches zero displays a page that shows the score
    if (timeRemaining===0) {
      //intervalId is indefined.
    clearInterval(intervalId);
    console.log(intervalId);
    $("#questions").hide(); 
    $("#results").html("<h1>Results</h1><br>" + "Correct: " + correct + "<br> Wrong: " + wrong).show();
    
    }
}
// end document .ready
});





