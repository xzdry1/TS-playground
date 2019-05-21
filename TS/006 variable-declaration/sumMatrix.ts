function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        console.log('外层：',i);
        for (var i = 0; i < currentRow.length; i++) {
            console.log('内层',i);
            sum += currentRow[i];
        }
    }
    return sum;
}
let arr = [[1, 2, 3], [1, 2, 3]];
let result = sumMatrix(arr);
console.log(result);