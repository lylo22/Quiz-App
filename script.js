const quizData = [
    {
        question: 'If soccer is called football in England, what is American football called in England??',
        a: 'American football',
        b: 'Combball',
        c: 'Handball',
        d: 'Touchdown',
        correct: 'a'
    }, {
        question: 'What is the largest country in the world??',
        a: 'China',
        b: 'Canada',
        c: 'Russia',
        d: 'United States',
        correct: 'a'
    }, {
        question: 'What is the oldest Disney film?',
        a: 'Snow White and the Seven Dwarfs',
        b: 'Pinocchio',
        c: 'Dumbo',
        d: 'Fantasia',
        correct: 'a',
    }, {
        question : 'What does JSON stand for?',
        a: 'Jason Object Notation',
        b: 'Cascading style Sheet',
        c: 'IDE',
        d: 'Application Programming Language',
        correct: 'a',
    }, {
        question: "What year was Nelson Mandela freed?",
        a: "1990",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
            
            <button onclick="location.reload()">Reload</button>`
        }
    }



});