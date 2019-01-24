function nbDig(n, d) {
    // your code
  let count = 0;
  let digit = d.toString();
    for (let i = 0; i <= n; i++){
    	let number = (i*i).toString();
    	for (let x = 0; x < number.length; x++){
    		if (number[x] === digit){
    			count +=1;
    		};
    	};
    };

    console.log(count);
    
};

nbDig(10, 1);