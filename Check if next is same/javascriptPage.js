var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let array1 = [];
  for(let i = 0; i < iterable.length; i++){
  	if(iterable[i] !== iterable[i+1]){
  		array1.push(iterable[i]);
  	}
  }

  return array1;
};

uniqueInOrder('AaAABBBCCDAABBB');
uniqueInOrder([1,2,2,3,3]);
