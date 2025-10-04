// Define the function
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    let userAnswer = "";
    if (selectedOption) {
        userAnswer = selectedOption.value;
    }

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Compare userAnswer with correctAnswer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Retrieve the submit button
const submitButton = document.getElementById("submit-answer");

// Add event listener to the button
submitButton.addEventListener("click", checkAnswer);

