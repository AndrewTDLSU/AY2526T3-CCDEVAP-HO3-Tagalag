
    let num1, num2, operator, correctAnswer;
    let score = 0;

    const operators = ["+","-","*"];

	function generateQuestions(){

        // randomly generate number from 1-10
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);

        // console log for debugging
        console.log("number1: " + num1);
        console.log("number2: " + num2);

        // choose random operator by choosing random index
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

        // display the question using HTML DOM get by ID
        let x = document.getElementById("question");
        x.innerHTML = num1 + " " + operator + " " + num2;
    }

    function checkAnswer(){

        // get the input answer and turn it to a number
        let input = document.getElementById("answer");
        let userAnswer = Number(input.value);
        console.log("input answer: " + userAnswer); 

        if (userAnswer === correctAnswer) {
            // display "correct" message
            let x = document.getElementById("message");
            x.innerHTML = "Correct!";
            x.className = "correct_message";
            score++; // increment score
            console.log("score: " + score);         

            // display score
            let y = document.getElementById("score");
            y.innerHTML = score;

        } else {
            // display "wrong" message
            let x = document.getElementById("message");
            x.innerHTML = "Wrong! The answer was " + correctAnswer;
            x.className = "wrong_message";
        }
        
        input.value = " "; // clear the input box
        
        if (score >= 5){
            // hide the question and input box
            let x = document.getElementById("div-questions");
            x.style.display = "none";

            // display the "congrats" message
            let y = document.getElementById("div-success");
            y.className = "div-success";
        } else {
            generateQuestions(); // generate more questions when score is not 5 yet
        }
    }

    function playAgain(){

        // reset score
        score = 0; 
        let x = document.getElementById("score");
        x.innerHTML = score;

        // hide "congrats" message with hidden css class
        let y = document.getElementById("div-success");
        y.className = "hidden";       

        // clear the input box
        let z = document.getElementById("answer");
        z.value = " ";

        // clear the messages
        let v = document.getElementById("message");
        v.innerHTML = " ";
        v.className = " ";

        // show the question and input box again
        let w = document.getElementById("div-questions");
        w.style.display = "block";

        generateQuestions(); // generate questions again
    }
