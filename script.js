
let string=""; //to store the text from input
let buttons=document.querySelectorAll(".btn");
let inputText=document.querySelector(".input");


Array.from(buttons).forEach((button)=>
{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);   
        }
        else if(e.target.innerHTML=="AC"){
            string="";
        }
        else if(e.target.innerHTML=="DE")
        {
            string=string.slice(0,string.length-1);
        }
        else{
            string+=e.target.innerHTML;
        }
        inputText.value=string;
    });
});