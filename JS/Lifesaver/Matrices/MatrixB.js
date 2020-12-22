let a = [
    [2, 4, 4], 
    [2, 3, 7], 
    [4, 6, 5], 
    [2, 3, 7]
];
let b = [
    [4, 6, 5], 
    [5, 2, 8], 
    [9, 8, 8]
];


function validateMatrix(matrixA, matrixB){
   if ( matrixA == undefined || matrixB == undefined ){
       return "assign values to the parameters";
   }

   
   let firstMatrixLength = matrixA.length;
   let secondMatrixLength = matrixB.length;

   

   for ( let c = 0; c < firstMatrixLength; c++){
       for (let h = 0; h < matrixA[c].length; h++){
           let typeOfValue = typeof matrixA[c][h];
           if(typeOfValue == 'string' || typeOfValue == 'undefined') {
               return `you can't use non-integer "${matrixA[c][h]}" in Matrix (First Matrix)`
           }
       };

       if (matrixA[c].length != matrixB.length) {
           return `Number of columns in the first Matrix "${matrixA[c].length}" should match the number of rows in the second Matrix "${matrixB.length}"`;
       }
       
   }; 

   for ( let a = 0; a < secondMatrixLength; a++){
       for (let y = 0; y < matrixB[a].length; y++){
           let typeOfValue = typeof matrixA[a][y];
           if(typeOfValue == 'string' || typeOfValue == 'undefined') {
               return `you can't use non-integer" ${matrixA[a][y]}" in Matrix (Second Matrix)`
           }
       };

       if (matrixB[a].length != matrixA[a].length) {
           return `Number of columns in the Second Matrix "${matrixB[a].length}" should match the total number of values in the First Matrix Row "${matrixA[a].length}"`
       }
   };

}


function productOfMatrices(matrixA, matrixB){
    
    let validateResponse = validateMatrix(matrixA, matrixB);

    if(validateResponse != undefined){
        console.log(validateResponse)
    } else {
        let productOfAllMatrices = new Array();

        for (let i = 0; i < matrixA.length; i++){
            productOfAllMatrices[i] = new Array()
            for (let x = 0; x < matrixB[0].length; x++){
                let sumOfRows = 0
                for (let k = 0; k < matrixA[0].length; k++){
                    sumOfRows += parseInt(a[i][k] * b[k][x]);
                    productOfAllMatrices[i][x] = sumOfRows;
                }
            }
                
        }
        return productOfAllMatrices;
    }
    
};


console.log(productOfMatrices(a, b));


