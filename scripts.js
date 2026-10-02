
    let num1, num2, operator, correctAnswer;
    let score = 0;

    const operators = ["+","-","*"];

    let ans = "";

	function generateQuestions(){

        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);

        console.log("number1: " + num1);
        console.log("number2: " + num2);

        let i = Math.floor(Math.random() * 3);
        let operator = operators[i];
        switch (i){
            case 0: ans = num1 + num2; break;
            case 1: ans = num1 - num2; break;
            case 2: ans = num1 * num2;
        }

        console.log("operators array index: " + i);
        console.log("operator: " + operator);
        console.log("answer: " + ans);     

        let x = document.getElementById("question");
        x.innerHTML = num1 + " " + operator + " " + num2;
    }

    function checkAnswer(){
        
    }

    function playAgain(){

    }
