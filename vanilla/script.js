let string = "";
let buttons = document.querySelectorAll(`.button`);
let decimalValid = true;
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
      if ( // prevent repetition operator and decimal
        (isOperator(lastChar) && isOperator(e.target.innerHTML)) ||
        (isDecimal(lastChar) && isDecimal(e.target.innerHTML))
      ) { return; }

      if(decimalValid == false){  //cannot have two decimal for one num
        if(isDecimal(e.target.innerHTML))
          { return; }
      }

      if(isDecimal(e.target.innerHTML))
      { decimalValid = false; }
      if(isOperator(e.target.innerHTML))
      { decimalValid = true; }

      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }

  })
})