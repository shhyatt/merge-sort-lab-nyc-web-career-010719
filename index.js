function findMinAndRemoveSorted(array) {
 return array.shift()
}

function merge(arrayOne, array2) {
  let sorted = [];
  let currentMin;
  while(arrayOne.length != 0 && arrayTwo.length != 0){
    if(array1[0] < array2[0]){
      sorted.push(findMinAndRemoveSorted(array1))
    }else{
      sorted.push(finsMinAndRemoveSorted(array2))
    }
      
    }
    return sorted.concat(array1).concat(array2)
    
  }
  
  
  
