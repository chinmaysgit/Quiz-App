const quiz = [{
    "question": "1) Inside which HTML element do we put the JavaScript ?",
    "a": "1. &lt;script&gt;",
    "b": "2. &lt;javascript&gt;",
    "c": "3. &lt;scripting&gt;",
    "d": "4. &lt;js&gt;",
    "answer": "1"
},
{
    "question": "2) Where is the correct place to insert a JavaScript?",
    "a": "1. The &lt;head&gt; section",
    "b": "2. The &lt;body&gt; section",
    "c": "3. Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
    "d": "4. None of the above",
    "answer": "3"
},
{
    "question": "3) What is the correct syntax for referring to an external script called 'xxx.js'?",
    "a": "1. &ltscript href=&quot;xxx.js&quot;>",
    "b": "2. &lt;script name=&quot;xxx.js&quot;&gt;",
    "c": "3. &lt;script src=&quot;xxx.js&quot;&gt;",
    "d": "4. None of the above",
    "answer": "3"
},
{
    "question": "4) How do you write &quot;Hello World&quot; in an alert box?",
    "a": "1. alertBox(&quot;Hello World&quot;);",
    "b": "2. msg(&quot;Hello World&quot;);",
    "c": "3. alert(&quot;Hello World&quot;);",
    "d": "4. msgBox(&quot;Hello World&quot;);",
    "answer": "3"
},
{
    "question": "5) How do you create a function in JavaScript ?",
    "a": "1. function myFunction()",
    "b": "2. function:myFunction()",
    "c": "3. function = myFunction()",
    "d": "4. None of the above",
    "answer": "1"
},
{
    "question": "6) How do you call a function named &quot;myFunction&quot; ?",
    "a": "1. call function myFunction()",
    "b": "2. call myFunction()",
    "c": "3. myFunction()",
    "d": "4. None of the above",
    "answer": "3"
},
{
    "question": "7) How to write an IF statement in JavaScript ?",
    "a": "1. if i = 5 then",
    "b": "2. if i == 5 then",
    "c": "3. if (i == 5)",
    "d": "4. if (i = 5)",
    "answer": "3"
},
{
    "question": "8) Which of the following is a disadvantage of using JavaScript ?",
    "a": "1. Client-side JavaScript does not allow the reading or writing of files.",
    "b": "2. JavaScript can not be used for Networking applications because there is no such support available.",
    "c": "3. JavaScript doesn't have any multithreading or multiprocess capabilities.",
    "d": "4. All of the above.",
    "answer": "4"
}];
let index = 0;
let total = quiz.length;
let right = 0, wrong = 0;
const next = document.querySelector("#nxt");
const box = document.querySelector(".box");
const submit = document.querySelector("#submit");
const question = document.getElementById("question");
const options = document.querySelectorAll(".options");
const optionContainer = document.querySelectorAll(".option-container");
const img  = document.querySelector("img");
next.addEventListener("click", () => {
    index++;
    btns();
    changeQues();
    reset();

});
submit.addEventListener("click", () => {
    resetQuiz();
})
const changeQues = () => {
    question.innerHTML = quiz[index].question;
    options[0].innerHTML = quiz[index].a;
    options[1].innerHTML = quiz[index].b;
    options[2].innerHTML = quiz[index].c;
    options[3].innerHTML = quiz[index].d;
}
const btns = () => {
    if (index > 0 && index < quiz.length - 1) {
        next.style.visibility = "visible";
        submit.style.visibility = "hidden";
    }else {
        next.style.visibility = "hidden";
        submit.style.visibility = "visible";
    }
}

optionContainer.forEach((e) => {
    e.addEventListener("click", (optn) => {
        if (optn.target.id == quiz[index].answer) {
            e.style.backgroundColor = "rgb(188, 250, 182)";
            e.style.color = "green";
            right++
        } else {
            e.style.backgroundColor = "rgb(252, 192, 192)";
            e.style.color = "red";
            wrong++;
        }
    })
})
const reset = () => {
    optionContainer.forEach((e) => {
        e.style.backgroundColor = "whitesmoke";
        e.style.color = "black";
    })
}
const resetQuiz = () => {
    if(right > quiz.length){
        right = right - quiz.length;
    }
    img.style.width = "58%";
    box.innerHTML = `<h3>Thank you for playing the quiz!😊</h3>
    <h2>You have scored : ${right} / ${total}</h2>`
    submit.style.visibility = "hidden";
}
document.addEventListener("click", (e)=>{
    console.log(e.target);
})
