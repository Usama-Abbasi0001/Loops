//for loop
document.write("This is For Loops <br>");
for(let i=1; i<=8; i++){
    document.write(i);
}

//while loop
document.write("<br> <br>")
document.write("This is while Loops <br>");
let u=2;
while(u<=10){
    document.write(u);
    u++;
}

//do-while loops
document.write("<br><br>")
document.write("Tis is Do-While Loops <br> ");
let z=1;
do {
    document.write(z );
    z++;
}while(z<=10);
document.write("<br><br>")

//forEach Loop
document.write("ForEach Loop <br> ");
var a = ["Sain Juman", "huzaifa K.z","A.Rehman K.k","Azam Shah"];
a.forEach(function(value , index){
    document.write(index + " : " + value + "<br>");
});

//For In loop
document.write("<br><br>")
document.write("For-In Loop <br>");
var obj = {
    First_Name : "Usama",
    Last_Name : "Abbasi",
    Age : "21",
    Email : "Usama@Gmail.com",
};
for(var key in obj){
    document.write(key + " : " + obj[key] + "<br>")
}

//we can use for  in with string to loop throughall the charahters
document.write("<br><br>")
document.write("we can use for  in with string to loop throughall the charahters check the console")
 characters = "usama Hussain";
for ( let char in characters){
    console.log(characters[char]);
}

//For of loop
document.write("<br><br>")
document.write("For-of Loop <br>");
var obj = ["Hanad","fahad","umar","shayan"];
for(let key of obj){
    document.write(key +  "<br>")
}

//functions 
document.write("<br><br>")
document.write("Simple Fubctions <br>");
function work(){
    document.write(": functions Lines")
}
work();

//functions  with Parameters
document.write("<br><br>")
document.write("Fubctions With Parameters <br>");
function place(fname,lname){
    document.write( fname + " " + lname )
} 
place("Sajjad","Iqbal");
document.write("<br>")
place("Hannan","Arain");
document.write("<br>")
place("Rizwan","RAjput");



