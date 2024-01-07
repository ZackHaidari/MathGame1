// Function to generate a random question based on the selected operation
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    switch (currentOperation) {
        case 'addition':
            return `${num1} + ${num2}`;
        case 'subtraction':
            // Ensure the result is a positive number
            return `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
        case 'multiplication':
            return `${num1} * ${num2}`;
        case 'division':
            // Ensure the result is a whole number
            return `${num1 * num2} / ${num2}`;
        default:
            return '';
    }
}

// Function to update the current operation
function changeOperation() {
    currentOperation = document.getElementById('operation').value;
    // Generate a new question based on the selected operation
    currentQuestion = generateQuestion();
    document.getElementById('question').innerText = `Solve: ${currentQuestion}`;
    document.getElementById('answerInput').value = '';
}

// Function to check the answer
function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answerInput').value);
    const [num1, num2] = currentQuestion.split(' ').filter(part => !isNaN(part)).map(Number);

    if (!isNaN(userAnswer)) {
        let correctAnswer;
        switch (currentOperation) {
            case 'addition':
                correctAnswer = num1 + num2;
                break;
            case 'subtraction':
                correctAnswer = Math.max(num1, num2) - Math.min(num1, num2);
                break;
            case 'multiplication':
                correctAnswer = num1 * num2;
                break;
            case 'division':
                correctAnswer = num1 / num2;
                break;
            default:
                break;
        }

        if (userAnswer === correctAnswer) {
            document.getElementById('result').innerText = 'Correct! Well done!';
        } else {
            document.getElementById('result').innerText = `Sorry, the correct answer is ${correctAnswer}. Try another one!`;
        }

        // Generate a new question based on the selected operation
        currentQuestion = generateQuestion();
        document.getElementById('question').innerText = `Solve: ${currentQuestion}`;
        document.getElementById('answerInput').value = '';
    } else {
        alert('Please enter a valid number.');
    }
}

// Initial operation and question generation
let currentOperation = 'addition';
let currentQuestion = generateQuestion();
document.getElementById('question').innerText = `Solve: ${currentQuestion}`;
