function add(numbers) {
    let result = 0; delimiter = ",";
    if (numbers) {
      const numbersToAdd = numbers.split(delimiter);
      if(numbersToAdd.length > 0) {
        result = numbersToAdd.reduce((total, number) => {
          return total + Number(number);
        }, 0);
      }
    }
    return result;
}

module.exports = add;