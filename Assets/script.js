// Create an array of questions and answers
const questions = [
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ["<script name='nerd.js'>", "<script src='nerd.js'>", "<script href='nerd.js'>", "<script file='nerd.js'>"],
        answer: "<script src='xxx.js'>"
    },
    {
        question: "Which built-in method combines the text of two strings and returns a new string?",
        choices: ["append()", "concat()", "attach()", "merge()"],
        answer: "concat()"
    },
    {
        question: "Arrays in Javascript can be used to store ____.?",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "3"
    },
    {
        question: "What is used primarily to add styling to a web page?",
        choices: ["HTML", "CSS", "Python", "React.js"],
        answer: "CSS"
    },
  
];

// Get references to the start button and question container
const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");

// Add a click event listener to the start button
startButton.addEventListener("click", function() {
    // Hide the start button
    startButton.style.display = "none";

    // Display the first question
    let currentQuestion = 0;
    questionContainer.innerHTML = `
        <h2>${questions[currentQuestion].question}</h2>
        <form>
            <label>
                <input type="radio" name="choice" 
    value="${questions[currentQuestion].choices[0]}" required>
                ${questions[currentQuestion].choices[0]}
            </label>
            <label>
            <input type="radio" name="choice" value="${questions[currentQuestion].choices[1]}">
            ${questions[currentQuestion].choices[1]}
        </label>
        <label>
            <input type="radio" name="choice" value="${questions[currentQuestion].choices[2]}">
            ${questions[currentQuestion].choices[2]}
        </label>
        <label>
            <input type="radio" name="choice" value="${questions[currentQuestion].choices[3]}">
            ${questions[currentQuestion].choices[3]}
        </label>
        <button type="submit">Submit</button>
    </form>
`;
});  

let time = 60; // starting time in seconds
let timerInterval; // to hold the setInterval() return value

startButton.addEventListener("click", function() {
    // Hide the start button
    startButton.style.display = "none";

    // Display the timer
    let timerDisplay = document.createElement("p");
    timerDisplay.id = "timer";
    timerDisplay.innerHTML = `Time remaining: ${time} seconds`;
    quizContainer.appendChild(timerDisplay);

    // Start the timer
    timerInterval = setInterval(function() {
        time--;
        timerDisplay.innerHTML = `Time remaining: ${time} seconds`;
        if (time <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);

  
    // code to display the first question...
    let currentQuestion = 0;
    questionContainer.innerHTML ;
      
     // code to save the score and display the high scores...
    function endQuiz() {
    questionContainer.innerHTML = "Time's up! Your score is...";
   
}

startButton.addEventListener("click", function() {
    // Hide the start button
    startButton.style.display = "none";
}

    // Display the timer
    // Start the timer
    timerInterval = setInterval(function() {
        time--;
        timerDisplay.innerHTML = `Time remaining: ${time} seconds`;
        if (time <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);

        
        
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let initials = initialsInput.value;
    let score = { initials, time };
    // Get the existing scores from local storage
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    // Add the new score
    highScores.push(score);
    // Sort the scores by time
    highScores.sort((a, b) => a.time - b.time);
    // Save the updated scores to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
    // Display the high scores
    let highScoresList = document.createElement("ol");
    highScoresList.id = "high-scores";
    highScores.forEach(function(score) {
        let scoreItem = document.createElement("li");
        scoreItem.innerHTML = `${score.initials} - ${score.time} seconds`;
        highScoresList.appendChild(scoreItem);
    });
    questionContainer.appendChild(highScoresList);
});
         
