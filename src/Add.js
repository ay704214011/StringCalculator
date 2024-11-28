function add(numbers) {
    let result = 0; delimiter = ",", negativeNumbers = [];
    if (numbers) {
      if (numbers[0] === "/" && numbers[1] === "/") {
        delimiter = numbers[2];
        numbers = numbers.substr(3);
      }
      numbers = numbers.trim().replace(/\n/g, delimiter);
      const numbersToAdd = numbers.split(delimiter);
      if(numbersToAdd.length > 0) {
        result = numbersToAdd.reduce((total, number) => {
          if (number.indexOf("-") > -1) {
            negativeNumbers.push(number);
          }
          return total + Number(number);
        }, 0);
      }
    }

    if (negativeNumbers.length > 0) {
      throw "negative numbers not allowed:"+ negativeNumbers.toString();
    }
    return result;
}

module.exports = add;