function display1()
{
// let n= document.getElementById('name').value 
let a=document.getElementById('x').value 
let b=document.getElementById('y').value 
let c=parseInt(a)+parseInt(b)
document.getElementById('para').style.border="3px green solid"
document.getElementById('para').innerHTML="Addition" + c
// alert("hi" +n)
// console.log("hiii")
}

function display2()
{
let a=document.getElementById('x').value 
let b=document.getElementById('y').value 
let c=parseInt(a)-parseInt(b)
document.getElementById('para').style.border="3px green solid"
document.getElementById('para').innerHTML="Subtraction" + c
}

function display3()
{
let a=document.getElementById('x').value 
let b=document.getElementById('y').value 
let c=parseInt(a)*parseInt(b)
document.getElementById('para').style.border="3px green solid"
document.getElementById('para').innerHTML="Multiplication" + c
}

function display4()
{
let a=document.getElementById('x').value 
let b=document.getElementById('y').value 
let c=parseInt(a)/parseInt(b)
document.getElementById('para').style.border="3px green solid"
document.getElementById('para').innerHTML="Division" + c
}



