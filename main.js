// timer:

document.getElementById("pra")
function printTimer(){
    var date=new Date ()
    pra.innerHTML=`${date.getHours()}: ${date.getMinutes()} : ${date.getSeconds()} `
}
window.setInterval(() => {
    printTimer()
}, 1000);

















// console.log("yafit");
// console.log("ISRAEL");
// console.log(4);
// console.log(4);
// console.log(4);
// console.log(4);
// ============================================================
// var nam1=1
// var num2=2
// var num3=3 
// var num4=4
// var sum=1+3+2+4
// var avg=sum/4
// console.log(sum);
// console.log(avg);
// ============================================================
// var width=5
// var height=6
// var shetah=6*5
// console.log(shetah)

// ============================================================
// כתבו פונקציה אשר מגדירה שני  משתנים num1 , num2  עם ערכים.  הפונקציה מחליפה בין הערכים. בדוק באמצעות הדפסה לפני ואחרי. לדוגמא אם הערך של num1  לפני 
// ההחלפה הוא 1 והערך של num2 לפני ההחלפה הוא 2 אז אחרי ההחלפה הערך של num1 יהיה 2 והערך ל num2 יהיה 1
// function printNumbers(num1, num2) {

//         if (num1 > num2) {
//             console.log(num2);
//         }
//     }

//    ( printNumbers(3, 5));
// ============================================================
// var number1 = Number(prompt("enter a number"))
// var number2 = Number(prompt("enter a number"))
// function num(number1, number2) {
//     console.log(number1, number2);
// }
// var x = num(number1, number2)
// ============================================================
// function numbers(){
//     var num1="c"
//     var a= num1
//     console.log(a);
// }
// var x=numbers()
// ============================================================
// function bool(num1, num2) {
//     if (num1 > num2) {
//         console.log(num2);
//     }
// }
// var y= bool(5, 2)
// var y= bool(8, 2)
// var y= bool(5, 4)
// var y= bool(10, 7)

// ============================================================
// var number1 = Number(prompt("enter a number"))
// var number2 = Number(prompt("enter a number"))
// var number3 = Number(prompt("enter a number"))
// function getNumbers(){
//     console.log(number1*number2*number3);
// }
//  getNumbers()
// ============================================================
// var number1 = Number(prompt("enter a number"))
// var number2 = Number(prompt("enter a   number"))
//  function ahoz (){
//      console.log(number1/number2);
//  }
//  ahoz ()
// ============================================================
// var number1 = Number(prompt("enter a number"))
// function machpela(){
//     console.log(number1*3);
// }
// machpela()
// ============================================================
// function numbers() {
//     for (let i = 0; i <= 100; i++) {
//         console.log(i);
//     }
// }
// numbers()
// ============================ ================================
// num=0;
// function printZogi() {
//     while (0>50) {
//         if(num % 10 == 0){
//             console.log(num);
//         }
//     }
// }
// printZogi()
// ============================ ================================
// var number1 = Number(prompt("enter a number"))
// number = 0;
// while (number1 < 50){
//     number++
//     number++
// }
// var number1 = Number(prompt("enter a number"))

// ============================ ================================
// number = 0;
// var number1 = Number(prompt("enter a number"))
// number = 0;
// while (number1 < 50){
//     number++
//     number++
//     number++
// }
// ============================ ================================

// var user=[
//  Number(prompt("enter a number")),
//  Number(prompt("enter a number")),
//  Number(prompt("enter a number")),
//  Number(prompt("enter a number")),
//  Number(prompt("enter a number")),
// ]

// var sum=0 ;
// var avg=0;
// function getNumbers(){
//     for (let i = 0; i < user.length; i++) {
//          sum=sum+user[i]
//          avg=sum/user.length
//          console.log(sum);
//         document.write(avg);
//     }
// }
// getNumbers()

// ============================ ================================
// var userInput = Number(prompt("enter a number"))
// function printnum(userInput){
//     while (userInput>0) {
//         var modulu = userInput % 10                             נותן את שארית בלבד =====================הסבר      
//         var userInput = (userInput / 10) - (modulu / 10)
//         console.log(modulu);
//     }
// }
// printnum(userInput)

// ============================ ================================







// =======================================================דף2===================================================

// =============================================

// btn.onclick=function(){
//     console.log("i was clicked");
// }
// btn.style.border=" 3px  blue solid"
// p.onclick=function(){
//     console.log("i was clicked");
// }
// p.style.border=" 3px  blue solid"
// =============================================
// div1.onclick=function(){
// div1.style.color="red"
// div1.style.width="100px"
// div1.style.hight="100px"
// div1.style.border="7px solid pink"
// div1.innerText="was changed"
// }
// =============================================

// btnin.onclick=function(){
// console.log(input1.value);
// }
// ============================================

// red.style.width="100px"
// red.style.height="100px"
// red.style.backgroundcolor="pink"
// red.style.border="solid 20px blue "

// red.onclick=function(){
//     red.style.display="none"
// }

// ============================================
// btnp.onclick=function(){
//     pra.innerText="hello" 
// }
// pra.style.border="4px solid red"

// ============================================
// buttonimg.onclick=function(){
//     img.style.border="6px solid" 
// }
// ============================================

// =======================================================דף3==================================================

// function printNumbers(number1, number2,number3){
//     var kefel =number1*number2*number3
//     console.log(kefel);
// }
// printNumbers(1, 2,3)
// ============================================


                        // שלי  
// var arrayNumbers = [6, 5, 7, 1, 8, 4, 3]
// let sorted = []
// for (let i = 0; i < arrayNumbers.length; i++) {
//     for (let j = 1; j < arrayNumbers.length; j++) {
//         if (arrayNumbers[i] > arrayNumbers[j]) {
//             sorted.push(arrayNumbers[i])
//         }
//     }
// }
// console.log(sorted);

                          // של טמרט
// var arrayNumbers = [6, 5, 7, 1, 8, 4, 3]
// for (let i = 0; i < arrayNumbers.length; i++) {
//     // loop through the array, moving forwards:
//     // note in loop below we set `j = i` so we move on after finding greatest value:
//     for (let j = i; j < arrayNumbers.length; j++) {
//       if (arrayNumbers[i] < arrayNumbers[j]) {
//         let temp = arrayNumbers[i]; // store original value for swapping
//         arrayNumbers[i] = arrayNumbers[j]; // set original value position to greater value
//         arrayNumbers[j] = temp; // set greater value position to original value
//       }
//     }
//   }
//   console.log(arrayNumbers)
// ===========================================
// var arrayHiTech = ["HiTech6", "HiTech65", "HiTech67", "HiTech61"]
// for (let i = 0; i < arrayHiTech.length; i++) {
// document.write(`<p>${arrayHiTech[i]}</p>`)
// }
// ===========================================

// צרו מערך של 12 אובייקטים, כל אובייקט מכיל שם סרט, שנה ותמונה, הציגו את המערך על המסך בחלוקה של 3*4
// var araayObjects=[
//     mov1={
//         movieName:"vmlvfvx",
//         year:1995,
//         img:`<p><a href="https://he.wikipedia.org/wiki/"><img src="https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455__340.jpg"></a></p>`,
//         id:987987987
//     },
//     mov2={
//         movieName:"hyhyhy",
//         year:1996,
//         img:`<p><a href="https://he.wikipedia.org/wiki/"> <img src="https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455__340.jpg"></a></p>`,
//         id:12345432
//     },
//     mov3={
//         movieName:"nnnnvbny",
//         year:1992,
//         img:`<p>  <a href="https://he.wikipedia.org/wiki/"><img src="https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455__340.jpg"></a></p>`,
//         id:1111111
//     }
// ]
// for(var i=0;i<araayObjects.length;i++){
// document.write(`<p>${araayObjects[i].year}</p><p>${araayObjects[i].movieName}</p><p>${araayObjects[i].img}</p><p>${araayObjects[i].id}</p>`)
// }
// ===========================================
// var email =prompt("enter a email");
// var password= Number(prompt("enter a password"));
// var name =prompt("enter a name");
// if(email==password){
//     alert("exists")
// }
// else{
//     alert("good")
// }
// ===========================================



