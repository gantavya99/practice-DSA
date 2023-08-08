const arr = [2, 1, 1234, 0, 234, 2,456456456, 2, 21123, 54, 5];
let largest = 0;
let second = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest)
        largest = arr[i];
    
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== largest && arr[i] > second)
        second = arr[i];
    
}
console.log(second);