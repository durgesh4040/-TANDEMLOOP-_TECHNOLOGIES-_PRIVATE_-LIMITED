// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
 
function calculator(a,b,operator){
switch(operator){
    case "Addition":
    return a+b;
    break;
    case "Subtraction":
        return a-b;
    case "Multiplication":
        return a*b;
        case "Division":
            return a/b;
             default:
                return  "wrong operator";

}
}
a=Number(prompt("Enter first value"));
b=Number(prompt("Enter second value"));
operator=prompt("Enter Addition ,Subtraction,Multiplication,Division");
console.log(calculator(a,b,operator));
