const a = [1,2,4,31,25,4876789689768,2,234234,234,-9];
let result = 0;
for(let i = 0;i<a.length;i++){
    if(a[i]>result){
        result = a[i];
    }
}
console.log(result);
//Method2 - Sort the Array and return the last element

a.sort();
console.log(a[a.length-1]);