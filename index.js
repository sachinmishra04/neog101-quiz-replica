const readlineSync= require("readline-sync");

const questions=[
  {
    question:"Meri umar kya hai?\n",
    answer:26
  },
   {
    question:"Maine schooling kaha se ki?\n",
    answer:"vishal vidya mandir"
  },
   {
    question:"Mera CGPA kitna tha Engineering mein?\n",
    answer:7.3
  }
  
]

let response=[];
let userScore=0;

function askMultipleQuestions(){
  response=questions.map(question=>readlineSync.question(question.question));
  console.log(response);
  validateAnswers(response)
}

function validateAnswers(response){
  for(let i=0; i<response.length; i++){
    if(response[i].toLowerCase()===questions[i].answer.toString()){
      console.log(`${response[i]}, Ye sahi hai`);
      userScore++;
    }else{
      console.log(`${response[i]}, Bhale chahe dushman zamana hamara`)
    }
  }
  console.log(`Apka score hai ${userScore}`)
}

askMultipleQuestions()

