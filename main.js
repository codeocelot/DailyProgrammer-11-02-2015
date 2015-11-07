module.exports = function gameOfThrees(n){
	while(n > 1){
		if(n%3===0){
			console.log(`${n} 0`);
			n = n/3;
		}
		else if((n+1)%3===0){
			n = (n+1)/3;
			console.log(`${n} 1`);
		}
		else {
			n = (n-1)/3;
			console.log(`${n} - 1`);
		}
	}

}
