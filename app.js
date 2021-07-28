var quizData = {
    question1: {
        question: "Who is the first Pakistani to hit century in T20I cricket?",
        answer: ["Imran Nazir", "Kamran Akmal", "Ahmad Shahzad", "Shahid Afridi"],
        correctAnswer: "Ahmad Shahzad"
    },
    question2: {
        question: "In which year Pakistan played first test match?Who is the first Pakistani to hit century in T20I cricket?",
        answer: ["1951", "1952", "1953", "1954"],
        correctAnswer: "1952"
    },
    question3: {
        question: "ICC stands for",
        answer: [" International cricket conference", "International cricket council", "International cricket club", "International cricket coalition"],
        correctAnswer: "International cricket council"
    },
    question4: {
        question: "ODI stands for",
        answer: ["One Day International", "Overseas Development Institute", " Oracle Data Integrator", "Office for Disability Issues"],
        correctAnswer: "One Day International"
    },
    question5: {
        question: "Which is the fastest bowler to 100 ODI wickets?",
        answer: ["Hassan Ali", "Rashid Khan", "Mujib-ur-rehman", "Moeen Ali"],
        correctAnswer: "Moeen Ali"
    },
    question6: {
        question: "What is the height of cricket wickets?",
        answer: ["27 inches (68.6 cm)", "26 inches (66 cm)", "29 inches (73.7 cm)", "28 inches (71.12 cm)"],
        correctAnswer: "28 inches (71.12 cm)"
    },
    question7: {
        question: "Who is the winner of Asia Emerging Cricket Cup 2018?",
        answer: ["Pakistan", "India", "Srilanka", "Bangladesh"],
        correctAnswer: "Srilanka"
    },
    question8: {
        question: "2019 Cricket world cup will be held in",
        answer: ["South Africa", "India", "England", "Srilanka"],
        correctAnswer: "England"
    },
    question9: {
        question: "International Cricket Council (ICC) headquarters is located in",
        answer: ["Dubai", "USA", "China", "Australia"],
        correctAnswer: "Dubai"
    },
    question10: {
        question: "ICC was founded in the year",
        answer: ["1905", "1909", "1910", "1914"],
        correctAnswer: "1909"
    }
}
var questionNo = 1;
var result = 0;
function printData() {

    var heading = document.getElementById('heading')
    var question = document.getElementById('question')
    var ansLabels = document.getElementsByClassName('label')
    var ansRadio = document.getElementsByClassName('radioBtn')

    heading.innerHTML = "Question No " + questionNo;
    question.innerHTML = quizData["question" + questionNo].question;

    for (var i = 0; i < ansLabels.length; i++) {
        ansLabels[i].innerHTML = quizData["question" + questionNo].answer[i]
        ansRadio[i].value = quizData["question" + questionNo].answer[i]
    }
}

function nextQuestion() {
    checkAnswer();
    // console.log(quizData["question" + questionNo].correctAnswer, 'correct answer')
    if (questionNo == '10') {
        alert(result + "result")
        localStorage.setItem("result", result)
        window.location.href = 'result.html'
        printResult();

    }
    else {
        questionNo++;
        printData();
        document.getElementById('btn').disabled = true;

    }
    // console.log(questionNo, 'question no')
}

function checkAnswer() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer.value === quizData["question" + questionNo].correctAnswer) {
        result++;
    }
    // console.log(selectedAnswer.value, "Select ans")
    selectedAnswer.checked = false;
}

function buttonOnOff() {
    btn.disabled = false;
}

//Result Page JS

function printResult() {
    var resultPara = document.getElementById('result')

    document.getElementById("pName").innerHTML = localStorage.getItem("name")
    console.log(result, "result")
    resultPara.innerHTML = 'You Got' + localStorage.getItem('result') * 10 + ' Out of 100'  ;
}

function startQuiz(){
    var username = document.getElementById("Uname").value;
    localStorage.setItem("name", username)
    if(!username){
        alert("Enter UserName")
    }else{
        window.location.href = 'quiz.html'

    }

    
}






