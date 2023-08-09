let array  = [1,2,3,4,5];
let leftRotate = (arr) => {
    let firstElement = arr[0];
    for(let i=0;i<arr.length-1;i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=firstElement;
    return arr;
}
//answer = [2,3,4,5,1]
console.log(leftRotate(array));