function checkAnswer () {
    const feedbackAnswer = document.getElementById("feedback");
    
    // Retrieve the User's Answer, (from the checked radio)
    const userAnswer = document.querySelector("input[name='quiz']:checked");

    // Check if answer was selected
    if (!userAnswer) {
        feedbackAnswer.innerHTML = "Please select an answer first!";
        return;
    }

    // Retrieve actual value from the selected element
    const actualValue = userAnswer.value;

    // Base Answer
    const correctAnswer = "4";

    // Compare the User's Answer with the Correct Answer:
    if (actualValue === correctAnswer) {
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