/*
//CodingChallenge1
let markMass=78
let markHeight=1.69
let  johnMass=92
let johnHeight=1.95
let markMass=95
let markHeight=1.88
let  johnMass=85
let johnHeight=1.76

let markBMI= markMass/(markHeight **2)
let johnBMI= johnMass/(johnHeight **2)
console.log(markBMI,johnBMI)
const markHigherBMI=(markBMI>johnBMI)
console.log(markHigherBMI)
 //CodingChallenge2
 if(markBMI>johnBMI){
   console.log(`Mark's BMI(${markBMI}) is higher than Johns!(${johnBMI})`)}
  else{
     console.log(`John's BMI(${johnBMI}) is higher than Mark!(${markBMI})`)}
     
//CodingChallenge3
dolphinsMatch1=97
dolphinsMatch2=112
dolphinsMatch3=101
koalasMatch1=109
koalasMatch2=95
koalasMatch3=106

dolphinsAverage=(dolphinsMatch1+dolphinsMatch2
+dolphinsMatch3)/3
koalasAverage=(koalasMatch1+koalasMatch2+koalasMatch3)/3
console.log("Dolphins average = "+dolphinsAverage)
console.log("Koalas Average = "+koalasAverage)
if (dolphinsAverage>koalasAverage && dolphinsAverage>100){
  console.log(`Dolphins are the winner!`)
}else if (dolphinsAverage===koalasAverage && dolphinsAverage>=100 && koalasAverage>=100){
  console.log(`The match is a draw!`)
}
else  if (koalasAverage>dolphinsAverage && koalasAverage>100){
  console.log(`Koalas are the winner!`)
}else{
  console.log(`There is no winner :(.`)
}
*/
//CodingChallenge4
//TernaryOperator
let bill = 40
let tip = 50 < bill && bill < 300 ? (.15 * bill) : (.20 * bill)
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}`)