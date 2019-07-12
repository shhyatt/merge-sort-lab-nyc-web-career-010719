function findMinAndRemoveSorted(array) {
 return array.shift()
}

function merge(arrayOne, arrayTwo) {
  let sorted = [];
  let currentMin;
  while(arrayOne.length != 0 && arrayTwo.length != 0){
    if(array1[0] < array2[0]){
      sorted.push(findMinAndRemoveSorted(arrayOne))
    }else{
      sorted.push(finsMinAndRemoveSorted(arrayTwo))
    }
      
    }
    return sorted.concat(arrayOne).concat(arrayTwo)
    
  }
  
  
  
