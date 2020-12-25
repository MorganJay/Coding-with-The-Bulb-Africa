// import displayMatrix from './matrixHelper.js';

const matrix1 = [
  [0, 1, 5],
  [3, 4, 5],
  [6, 7, 8],
];

const matrix2 = [
  [9, 10, 11],
  [12, 13, 14],
  [15, 16, 17],
];

function validateMatrices(matrix1, matrix2){
  if (matrix1 == undefined || matrix2 == undefined)
    return "Enter valid number of arguments to compute the product";
  
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const element = array[j];
    }
  }
};

const matrixMultiply = (matrix1) => (matrix2) => {
  if (matrix1[0].length != matrix2.length)
    alert("The number of columns in the first matrix must be equal to the number of rows in the second matrix to achieve their product");
  else {
    let product = new Array(matrix1.length); // matrix m x n times matrix n x k => m x k
    for (let i = 0; i < matrix1.length; i++) {
      product[i] = [];
      for (let j = 0; j < matrix2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < matrix1[0].length; k++) {
          let a = matrix1[i][k];
          let b = matrix2[k][j];
          sum += a * b;
        }
        product[i][j] = sum;
      }
    }
    return product;
  }
};

function displayMatrix(matrix = []) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] <= 99 && matrix[i][j] >= 10)
        document.write(`&ensp;${matrix[i][j]}&emsp;`);
      else if (matrix[i][j] <= 9)
        document.write("&ensp;&nbsp;" + matrix[i][j] + "&emsp;");
      else document.write(matrix[i][j] + "&emsp;");
    }
    document.write("<br>");
  }
}

document.write("<br>");
document.writeln("This is the first matrix<br>");
displayMatrix(matrix1);
document.write("<br>");
document.writeln("This is the second matrix<br>");
displayMatrix(matrix2);
document.write("<br>");
document.writeln("This is their product<br>");
displayMatrix(matrixMultiply(matrix1)(matrix2));
