document.write("<h1>Chapter # 17 to 20</h1>")

// Question # 01
let Array = [[],[]];
// Question # 02
var Arr=[[0,1,2,3],[3,4,0,2,1],[5,6,7,3,1,2]];
console.log(Arr)
// Question # 03
document.write("<h3>Question # 03 </h3>")
for(let i=1; i<=10; i++){
    document.write(i+ " <br />"  )
}
// Question # 04
document.write("<h3>Question # 04 </h3>")
let table = +prompt("Enter table number")
let length = +prompt("Enter table lentgh")

document.write("<b>Multiplication table of </b> " + table + " <br />")
document.write("<b> Length </b> " + length + " <br />" + " <br />")

for(let i=1; i<=length; i++){
    document.write(table + " x " + i + " = " + table*i+ " <br />" ); 
}  
// Question # 05
document.write("<h3>Question # 05 </h3>")
let fruits = ["apple", "banana", "mango","orange","strawberry"]
document.write(fruits  + " <br />" + " <br />")

 for(let i=0; i<fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + " <br />")      
    }

// Question # 06
document.write("<h3>Question # 06 </h3>")

let count = 15;
document.write("Counting: ")
for(let i=1; i<=count; i++){
    document.write(i + "\n" )
}
let number  =[ 1,2,3,4,5,6,7,8,9,10]
let num = number.reverse()
document.write(" <br />" + "Reverse counting: " + num +" <br />" )
console.log(number) 

// for even number
document.write("Even: ")

for(let i=0; i<=20; i++){
    if (i%2===0){
        document.write(i + "," + "\n"  )
    }
}
// for odd number
document.write(" <br />"+ "Odd: ")

for(let i=0; i<=20; i++){
    if (i%2!==0){
        document.write( i + "," + "\n" )
    }
}

let series= ["2k","4k","6k", "8k","10k","12k","14k","16k","18k","20k"]
let ser= series.toString()
document.write(" <br />"+ "Series: " + ser + " <br />"+" <br />")

// Question # 07

let bakery = ["cake", "cookie", "pineapple", "chips", "patties", "apple pie"];
// let userInput = prompt("Welcome to my Bakery. What do you want to order, sir/ma'am?");
let found = false;
for (let i = 0; i < bakery.length; i++) {
    if (userInput.toLowerCase() === bakery[i].toLowerCase()) {
        alert(userInput + " is available at index " + i + " in our bakery");
        found = true;
        break;  // Once found, exit the loop
    }
}
if (!found) {
    alert(  " We are sorry." + userInput +" is  not available in our bakery" );
}

// Question # 08

document.write("<h3>Question # 08 </h3>")

var numb = [24,56,18,48,83]
document.write("Number: " + numb.toString() + " <br />")

// Assume the first element is the largest
let largest = numb[0];

// Iterate through the array to find the largest number
for (let i = 1; i < numb.length; i++) {
    if (numb[i] > largest) {
        largest = numb[i];
    }
}
document.write("The largest number is: " + largest)
console.log("The largest number is: " + largest);

// Question # 09

document.write("<h3>Question # 09 </h3>")

var numb = [24,56,18,48,83]
document.write("Number: " + numb.toString() + " <br />")

for(let i=0; i<numb.length; i++){
    if (numb[i]<numb[0]){
        document.write("The smallest number is: " + numb[i])
    }
}
// Question # 10

document.write("<h3>Question # 10</h3>")

let range = 20
document.write("Multiples of 5: " )
for(let i=1;i<=range; i++){

    document.write(5*i +","+ "\n")
}