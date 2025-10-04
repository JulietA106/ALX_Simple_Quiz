function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "";
    if (selectedOption) {
        userAnswer = selectedOption.value;
    }

    // Retrieve feedback element
    const feedback = document.getElementById("feedback");

    // Compare and provide feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Retrieve the submit button and add event listener
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
