function add(numbers) {
    let result = 0; delimiter = ",", negativeNumbers = [];
    if (numbers) {
      const startIndex = numbers.indexOf("[");
      const lastIndex = numbers.indexOf("]");
      if (startIndex > -1 && lastIndex > -1) {
        delimiter = numbers.substring(startIndex + 1, lastIndex);
        numbers = numbers.substr(lastIndex + 1);
      } else {
        if (numbers[0] === "/" && numbers[1] === "/") {
          delimiter = numbers[2];
          numbers = numbers.substr(3);
        }
      }
      numbers = numbers.trim().replace(/\n/g, delimiter);
      const numbersToAdd = numbers.split(delimiter);
      if(numbersToAdd.length > 0) {
        result = numbersToAdd.reduce((total, number) => {
          if (number.indexOf("-") > -1) {
            negativeNumbers.push(number);
          }
          if (number > 1000) {
            number = 0;
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