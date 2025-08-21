// Problem-4: Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//   (examples)
//   input: [1,2,8,9,12,46,76,82,15,20,30]
//   Output: 
//     // {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}

function dictionary (arr1, arr2){
  const mp=new Map();
    for(let i=0;i<arr1.length;i++){
        let count=0;
        for(let j=0;j<arr2.length;j++){
            if(arr2[j]%arr1[i]==0) count++;
        }
        mp.set(arr1[i],count);
    }
  console.log(mp);
}
n=Number(prompt("Enter number for multiply array"))
arr1=[];

for(let i=0;i<n;i++){
    value=Number(prompt("Enter value"));
    arr1.push(value);
}

n1=Number(prompt("Enter number for multiple array "))
arr2=[];
for(let i=0;i<n1;i++){
    value=Number(prompt("Enter value"));
    arr2.push(value);
}

dictionary(arr1,arr2)