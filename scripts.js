
    let num1, num2, operator, correctAnswer;
    let score = 0;

    const operators = ["+","-","*"];

	function generateQuestions(){

        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);

        console.log("number1: " + num1);
        console.log("number2: " + num2);

        let i = Math.floor(Math.random() * 3);
        let operator = operators[i];
        switch (i){
            case 0: correctAnswer = num1 + num2; break;
            case 1: correctAnswer = num1 - num2; break;
            case 2: correctAnswer = num1 * num2;
        }

        console.log("operators array index: " + i);
        console.log("operator: " + operator);
        console.log("answer: " + correctAnswer);     

        let x = document.getElementById("question");
        x.innerHTML = num1 + " " + operator + " " + num2;
    }

    function checkAnswer(){

        let input = document.getElementById("answer");
        let userAnswer = Number(input.value);
        console.log("input answer: " + userAnswer); 

        if (userAnswer === correctAnswer) {
            let x = document.getElementById("message");
            x.innerHTML = "Correct!";
            x.className = "correct_message";
            score++;
            console.log("score: " + score); 

            let y = document.getElementById("score");
            y.innerHTML = score;

        } else {
            let x = document.getElementById("message");
            x.innerHTML = "Wrong! The answer was " + correctAnswer;
            x.className = "wrong_message";
        }
        generateQuestions();

    }

    function playAgain(){

    }
