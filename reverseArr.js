module.exports = function reverseArr(arr) { 
    var arr2 = []
    for(var i = arr.length-1; i >= 0; i--){
        arr2.push(arr[i]);
       
    }
        console.log(arr2)
}

const arr = [1,2,3];
reverseArr(arr);