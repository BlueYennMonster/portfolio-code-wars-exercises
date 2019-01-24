// function accum(s) {
//   // your code
//   // split string into substrings
//   // convert char to uppercase and add certain number of lowercase letters based on index position
//   // add dash
//   let x = s.split("");

//   for(let i = 0; i < x.length; i++){
//   	let letter = x[i];
//   	x[i] = letter.toUpperCase();  	
//   	for(let e = 0; e < i; e++){
//       x[i] += letter.toLowerCase();
//   	};
//   };

//   console.log(x.join("-"));


// };

// accum("abcd");


function accum(s){
	console.log(s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-'));
}

accum('abc');