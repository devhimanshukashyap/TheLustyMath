function generateQuestion() {
    const num1 = Math.floor(Math.random() * 100) * 3;
    const num2 = Math.floor(Math.random() * 100) * 3;
    const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
    console.log( `${num1} ${operator} ${num2}`)
  }


  generateQuestion()