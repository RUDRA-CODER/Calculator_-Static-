let string = "";
let buttons = document.querySelectorAll('.btn');
console.log(buttons);
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
    try {
        if(e.target.innerHTML == '=')
        {
            string = eval(string);
            document.querySelector('input').value= string;
        }
        else if(e.target.innerHTML == 'AC')
        {
            string = " ";
            document.querySelector('input').value= string;
            colorChange()
        }
        else if(e.target.innerHTML == '+/-')
        {
            string = string.slice(0,-1)
            document.querySelector('input').value= string;
        }
        else
        {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
            
        }      
    }   catch (error) {
        document.querySelector('input').style.color = "red";
        string = " Invalid Operator Or Invalid Input.."
        document.querySelector('input').value = string;
    }
    })
})
 function colorChange()
 {
    document.querySelector('input').style.color = "white";
 }