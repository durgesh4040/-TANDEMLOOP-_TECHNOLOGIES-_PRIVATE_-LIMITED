// Problem-3: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

function series(number){
    let odd=1;
    let result="";
    for(let i=1;i<=number;i++){
        result+=odd;
        if (i < number) result += ",";
        odd+=2;
    }
    console.log(result.trim())
}
number=Number(prompt("Enter Number"))
series(number);