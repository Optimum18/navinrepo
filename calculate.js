
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        let string = "";
        if(e.target.innerHTML == '='){
            console.log(e.target.innerHTML)
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHtml == 'C'){
            console.log(e.target.innerHTML)
            string = ""
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target.innerHTML)
            string = string + e.target.innerHtml;
            document.querySelector('input').value = string; 
            
        }
    })
})