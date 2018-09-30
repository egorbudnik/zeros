module.exports = function getZerosCount(number) {
  let zero = 0;
	while(number>0){
		number = number / 5;
		number = Math.floor(number);
		zero += number;
	}

    return zero;
}
