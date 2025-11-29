function checkAnswer () {
    const feedbackAnswer = document.getElementById("feedback");
    
    // Retrieve the User's Answer, (from the checked radio)
    const rawValue = document.querySelector("input[name='quiz']:checked");

    // Check if answer was selected
    if (!rawValue) {
        feedbackAnswer.innerHTML = "Please select an answer first!";
        return;
    }

    // Base Answer
    const correctAnswer = "4";
    const userAnswer = rawValue.value;

    // Compare the User's Answer with the Correct Answer:
    if (userAnswer === correctAnswer) {
        feedbackAnswer.innerHTML = "Correct! Well done.";
    } else {
        feedbackAnswer.innerHTML = "That's incorrect. Try again!";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const sbumitBtn = document.getElementById("submit-answer");
    // Add Event Listener to the Submit Button:
    sbumitBtn.addEventListener("click", checkAnswer);
});