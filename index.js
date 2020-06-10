let matrixLength = 8;

function createArray(rows) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }
    return arr
};


//build the grid, populate with 0's and 1's

function createColumns(columns) {
    for (var i = 0; i < columns.length; i++) {
        columns[i] = Array(8)
        // columns[i].push(Math.round(Math.random()))
        // console.log(columns[i].length);
        for(var j = 0; j < columns[i].length; j++) {
            columns[i][j] = Math.round(Math.random());
        }
        
        
    }
}
var matrix = createArray(matrixLength);
createColumns(matrix)
console.log(matrix);
