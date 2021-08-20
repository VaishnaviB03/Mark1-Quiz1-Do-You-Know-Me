var readlinesync = require("readline-sync")
const chalk = require("chalk")
var ques = readlinesync.question(chalk.blueBright("What Is Your Name?"))
var score = 0; 

console.log(chalk.bgCyan("\n Welcome " + ques + " to - Do You Know Vaishnavi! \n"))

var ques = chalk.hex("#FEE2E2")

var highScore = [{
	name: "Vaishnavi",
	score : "5"
},
{
	name : "Gyan",
	score : "4"
}]


function quiz(question,answer){
	var yourAnswer = readlinesync.question(question)
	if(yourAnswer === answer){
		console.log(chalk.green.underline("\n Your Answer is Correct! "))
		score = score + 1
	}

	else{
		console.log(chalk.red.underline("\n Your Answer Is Wrong! "))
		score = score - 1;
	}
	console.log("Your score is " + score +"\n")
}


var questions = [{
	question : ques.bold("What is my favourite color?\n"),
	answer : "black"
},
{
	question : ques.bold("Which pet do i have?\n"),
	answer : "rabbit"
},
{
	question : ques.bold("What is my pet's name? \n"),
	answer : "lucy"
},
{
	question : ques.bold("What is my brother's name?\n"),
	answer : "gyan"
}]

for(var i=0 ; i<questions.length ; i++){
	var currentQuestion = questions[i]
	quiz(currentQuestion.question,currentQuestion.answer)
	
}
console.log("You scored " + score)
console.log("Highest Score is " + highScore[0].score)

