// function comp(array1, array2){
//   //your code here

//   if (array1 === null || array2 === null){
//   	return false;
//   } else {
//     array1.sort((a, b) => a - b);
//     array2.sort((a, b) => a - b);

//   for(let i = 0; i < array1.length;){
//     if (array1[i] % Math.sqrt(array2[i]) !== 0){
//     	return false;
//       } else {
//         i++;
//       }
//     };

//     return true;

//   };

// };

function comp(array1, array2) {
	if(array1 === null || array2 == null) return false;
	array1.sort((a, b) => a - b); array2.sort((a,b) => a - b);
	return array1.map(v => v * v).every((v, i) => v === array2[i]);
}

console.log(comp([18, 40, 36], [324, 1600, 1296]));
console.log(comp([1, 2, 3], [1, 4, 9]));
