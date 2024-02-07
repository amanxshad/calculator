let string = "";
let buttons = document.querySelectorAll(`.button`);
Array.from(buttons).forEach((button) => {
  button.addEventListener(`click`, (e) => {

    // to prevent operator repetition
    const isOperator = (char) => {
      return ['+', '-', 'x', '/'].includes(char);
    };

    // to prevent decimal repetition
    const isDecimal = (char) => {
      return char === '.';
    };

    // = button action
    if (e.target.innerHTML == '=') {
      string = "" + eval(string.replace(/x/g, '*'));
      document.querySelector('input').value = string;
    }

    // clear button action
    else if (e.target.innerHTML == 'Clear') {
      string = "";
      document.querySelector('input').value = string;
    }

    // calculator operations
    else {
      console.log(e.target)

      const lastChar = string.slice(-1);
      if (
        (isOperator(lastChar) && isOperator(e.target.innerHTML)) ||
        (isDecimal(lastChar) && isDecimal(e.target.innerHTML))
      ) { return; }

      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }

  })
})