let arr = [2, 3, 3, 5, 5, 5, 7, 8, 8, 10];

const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) { //  If the elements are not equal then copy the unique element by then to "i+1" position
            nums[++i] = nums[j];
        }
    }
    return i + 1;
}
const result = removeDuplicates(arr);


const newArr= arr.slice(0,result);
console.log(arr.slice(0,result));