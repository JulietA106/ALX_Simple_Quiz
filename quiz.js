function checkAnswer() {
    const correctAnswer = "4";

    // get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
