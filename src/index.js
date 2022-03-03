
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) {
    return [];
  };

  let arr = [];

  for(let i = 0; i < matrix.length; i++){
    if(i % 2 === 0){
      arr.push(...matrix[i]);
     } else {
      for(let j = matrix[i].length - 1; j >= 0; j--)
        arr.push(matrix[i][j]);
    }
  }
  return arr;
}
