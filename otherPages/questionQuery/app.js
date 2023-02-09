


/////////////////////////Rohit////////////////////////////

const quizData=[
    {
        question: "1. What is your age ",
        a: "below 18",
        b: "18 - 35",
        c: "35 - 50",
        d: "above 50"
    },
    {
        question: "2. How was your day ",
        a: "Worst",
        b: "Not Bad",
        c: "Good",
        d: "Excellent",
    },
    {
        question: "3. Did you lose someone?",
        a: "No",
        b: "Yes",
    },
    
    
    {
        question: "4. How is your Appetite lately ",
        a: "Not Good",
        b: "Normal",
        c: "Good",
        d: "Best",
    },
    {
        question: "5. How would you rate your diet?",
        a: "Worst",
        b: "Not Bad",
        c: "Very Good",
        d: "Excellent",
    },

    {
        question: "6. How much hours of sleep ",
        a: "8 hours",
        b: "5-7Hours",
        c: "4-5 Hours",
        d: "More than 8 hours",
    },
    {
        question: "7. Are you addicted to anything?",
        a: "Less",
        b: "More",
        c: "Medium",
        d: "Not at all",
    },

    {
        question: "8. How's your work-life balance?",
        a: "Bad",
        b: "Okay",
        c: "Good",
        d: "Excellent",
    }
]

const quiz=document.getElementById('quiz')
const answerE1s = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz=0


loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answerE1s.forEach(answerE1 => answerE1.checked =false)
}

function getSelected(){
    let answer
    answerE1s.forEach(answerE1 =>{
        if(answerE1.checked){
            answer = answerE1.id
        }
    })
    return answer
}

const userData=[];
const userd=userData[2];
const opt1="a"
const opt2="b"
const opt3="c"
const opt4="d"
submitBtn.addEventListener('click',() => {
    const answer = getSelected()
    userData.push(answer)
    console.log(answer);
    currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else
        //here we will put if statement in different types of combination and give them consultancy
        if(userData[1] == opt1){
            //userData and hardik arrays are equal
            quiz.innerHTML = `<h2>After evaluating your self-assessment, it has been observed that you may be experiencing symptoms of Depression.</h2>`
            var button = document.createElement("button");
            button.innerHTML = "Get Community Support";
            button.setAttribute("onclick", "window.location.href = 'https://depsupport.netlify.app/'");
            quiz.appendChild(button);
          } 
        else if(userData[2] == opt4)
        {
            //userData and hardik arrays are equal
            quiz.innerHTML = `<h2>After evaluating the your self-assessment, it has been Observed that you may be experiencing symptoms of Grief and Loss</h2>`
            var button = document.createElement("button");
            button.innerHTML = "Get Community Support";
            button.setAttribute("onclick", "window.location.href = 'https://grisupport.netlify.app/'");
            quiz.appendChild(button);
          } 
        else if(userData[5] == opt3)
        {
            //userData and hardik arrays are equal
            quiz.innerHTML = `<h2>After evaluating the your self-assessment, it has been Observed that you may be experiencing symptoms of PTSD</h2>`
            var button = document.createElement("button");
            button.innerHTML = "Get Community Support";
            button.setAttribute("onclick", "window.location.href = 'https://ptsdsupport.netlify.app/'");
            quiz.appendChild(button);
          } 
        else if(userData[6] == opt2)
        {
            //userData and hardik arrays are equal
            quiz.innerHTML = `<h2>After evaluating the your self-assessment, it has been Observed that you may be experiencing symptoms of Addiction</h2>`
            var button = document.createElement("button");
            button.innerHTML = "Get Community Support";
            button.setAttribute("onclick", "window.location.href = 'https://addictionsupport.netlify.app/'");
            quiz.appendChild(button);
          } 
        else if(userData[7] == opt2)
        {
            //userData and hardik arrays are equal
            quiz.innerHTML = `<h2>After evaluating the your self-assessment, it has been Observed that you may be experiencing symptoms of Anxiety</h2>`
            var button = document.createElement("button");
            button.innerHTML = "Get Community Support";
            button.setAttribute("onclick", "window.location.href = 'https://anxietysupport.netlify.app/'");
            quiz.appendChild(button);
          } 
          else {
            //userData and hardik arrays are not equal
            quiz.innerHTML=`<h2>An error occurred. Please do the self-assessment again after some time.</h2>`
        }
        // {
            
        // }
        // else{
            
        // }
        
})
 

// ||userData.toString() ===  q.toString() ||userData.toString() === s.toString() ||userData.toString() === t.toString() ||userData.toString() === u.toString() ||userData.toString() === v.toString() ||userData.toString() === w.toString() ||userData.toString() === x.toString() ||userData.toString() === y.toString() ||
//        userData.toString() === z.toString()