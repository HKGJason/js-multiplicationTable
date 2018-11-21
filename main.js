

function createMultiplicationTable(startNum, endNum){
	if(!checkifNuminRange(startNum, endNum)) return null;
	if(!checkifStartNumSmaller(startNum, endNum)) return null;
	var str = "";
	for (var i = startNum ; i <= endNum ; i++){
		for (var j = startNum ; j <= i ; j++){
			str = str + appendTableStr(j,i,endNum);
		}
		if (i!=endNum)
			str = str + "\n";
	}
	return str;
}
function checkifNuminRange(startNum, endNum){
	if (startNum > 1000 || startNum < 1 || endNum > 1000 || endNum < 1){
		return false;
	}
	return true;
}
function checkifStartNumSmaller(startNum, endNum){
	if (startNum > endNum){
		return false;
	}
	return true;
}
function appendTableStr(startNum, endNum, max){
	var line = startNum.toString()+"*"+endNum.toString()+"="+startNum*endNum;
	if (startNum!=endNum)
		return alignTable(line, (max*max).toString().length+max.toString().length+max.toString().length+2);
	return startNum.toString()+"*"+endNum.toString()+"="+startNum*endNum;
}
function alignTable(line, maxlength){
	var appendlength = maxlength - line.length;
	line = line + " ";
	for (var i = 0 ;i < appendlength;i++){
		line = line + " ";
	}
	return line;
	
}


module.exports = createMultiplicationTable;