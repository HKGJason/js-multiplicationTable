

function createMultiplicationTable(num1, num2){
	if(!checkifNuminRange(num1, num2)) return null;
	if(!checkifStartNumSmaller(num1, num2)) return null;
	var str = "";
	var count = 0;
	for (var i = num1 ; i <= num2 ; i++){
		for (var j = num1 ; j <= i ; j++){
			if (count != 0)
				str = str + "  ";
			str = str + appendTableStr(j,i);
			count++;
		}
		count = 0;
		if (i!=num2)
			str = str + "\n";
	}
	return str;
}
function checkifNuminRange(num1, num2){
	if (num1 > 1000 || num1 < 1 || num2 > 1000 || num2 < 1){
		return false;
	}
	return true;
}
function checkifStartNumSmaller(num1, num2){
	if (num1 > num2){
		return false;
	}
	return true;
}
function appendTableStr(num1, num2){
	return num1.toString()+"*"+num2.toString()+"="+num1*num2;
}

module.exports = createMultiplicationTable;