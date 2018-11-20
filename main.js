

function createMultiplicationTable(num1, num2){
	if(!checkifNuminRange(num1, num2)) return null;
	if(!checkifStartNumSmaller(num1, num2)) return null;
	var str = "";
	for (var i = num1 ; i <= num2 ; i++){
		for (var j = num1 ; j <= i ; j++){
			str = str + appendTableStr(j,i,num2);
		}
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
function appendTableStr(num1, num2, max){
	var line = num1.toString()+"*"+num2.toString()+"="+num1*num2;
	if (num1!=num2)
		return alignTable(line, (max*max).toString().length+max.toString().length+max.toString().length+2);
	return num1.toString()+"*"+num2.toString()+"="+num1*num2;
}
function alignTable(line, maxlength){
	var appendlength = maxlength - line.length;
	line = line + " ";
	for (var i = 0 ;i < appendlength;i++){
		line = line + " ";
	}
	return line;
	
}
console.log(createMultiplicationTable(95,100));


module.exports = createMultiplicationTable;