let arr = [1, 2, 3, 4, 5, 5, 6, 6, 7];
const removeDups = (arr) => {
    let n = arr.length;
    if (n == 0 || n == 1)
        return n;
    let j = 0;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] != arr[i + 1])
            arr[j++] = arr[i];
    }

    arr[j++] = arr[n - 1];
    return j;
}
const result = removeDups(arr);
console.log(result);
console.log(arr.slice(0, result + 1));

