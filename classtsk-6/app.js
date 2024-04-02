// const a = 7;
// const b = 5;
// console.log(a, b);
// if (a > b) {
//     console.log( "a is greater than b.");
// } else if (a < b) {
//     console.log( "a is less than b.");
// } else {
//     console.log( "a is equal to b.");
// }


// const a=5;
// const b=4;
// const c=3;
// if(a+b>c && b+c>a && a+c>b) {
//     console.log("yes");
// } else {
//     console.log("no");
// }


// const a=5;
// const b=4;
// const c=3;
// if(a**2+b**2==c**2 && a**2+c**2==b**2 && c**2+b**2==a**2) {
//     console.log("yes");
//  } else {
//    console.log("no");
// }


//  const balance=0.90;
//  if(balance>=0.40) {
//     console.log("welcome")
//  } else {
//     console.log("Balance is not enough")
//     needed=0.40-balance
//     console.log("Needed:", needed)
//  }
//  const rembalance=balance-0.40;
//  console.log("Remainder is:", rembalance)
//  const operation2=0.40;
//  console.log("Increment of balance:", operation2)
//  const operation3=rembalance+operation2;
//  console.log("Increased balance:", operation3)
//  const operation1= "Entrance";
//  console.log("Operation:", operation1)


// const num=1234;
// const fD=parseInt(num/1000);
// console.log(fD);
// const sD=parseInt(num/100%10);
// console.log(sD);
// const tD=parseInt(num/10%10);
// console.log(tD);
// const lD=num%10;
// console.log(lD);
// const addition=fD+sD+tD+ld;
// const multiplication=fD*sD*tD*ld;
// const subtraction=fD-sD-tD-ld;


// const numbers="20-10";
// const num1=numbers[0]+numbers[1];
// console.log(num1)
// const num2=numbers[3]+numbers[4];
// console.log(num2)
// if (num1>num2) {
//    console.log(num2+"-"+num1);
// } else {
//     console.log(num1+"-"+num2)
// }



const numbers="40-20-30";
const num1=numbers[0]+numbers[1];
console.log(num1);
const num2=numbers[3]+numbers[4];
console.log(num2);
const num3=numbers[6]+numbers[7];
console.log(num3);
if (num1<num2 && num2<num3) {
    console.log(num1+ "-" + num2 + "-" +num3);
} else if (num1<num3 && num3<num2) {
    console.log(num1+ "-" + num3 + "-" +num2);
} else if (num2<num1 && num1<num3) {
    console.log(num2+ "-" + num1 + "-" +num3);
} else if (num2<num3 && num3<num1) {
    console.log(num2+ "-" + num3 + "-" +num1);
}  else if (num3<num1 && num1<num2) {
    console.log(num3+ "-" + num1 + "-" +num2);
}  else if (num3<num2 && num2<num1) {
    console.log(num3+ "-" + num2 + "-" +num1);
}













