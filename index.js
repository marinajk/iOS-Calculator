var operate=document.getElementsByClassName("operators");
var numbers1=document.getElementsByClassName("numbers");

var t=document.getElementById("text");

var txt='0';
var secondoperand;
var evals=[];


var perform=(clickObj)=>
{
    var op=clickObj.target.innerText;
    
   
    switch(op)
    {
        case '+':
       
        secondoperand=txt;
            txt=txt;
        
            t.innerText=txt;
            evals.push(secondoperand);
            evals.push('+');
            txt='0';
            break;
        case '-':
            secondoperand=txt;
            txt=txt;         
            t.innerText=txt;
            evals.push(secondoperand);
            evals.push('-');
            txt='0';
            break;
        case '*':
            
            secondoperand=txt;
            txt=txt;
       
            t.innerText=txt;
            evals.push(secondoperand);
            evals.push('*');
            txt='0';
            break;
        case '/':
            secondoperand=txt;
            txt=txt;
        
            t.innerText=txt;
            evals.push(secondoperand);
            evals.push('/');
            txt='0';
            break;
        case '%': 
            txt=txt/100;
            txt=txt;
            t.innerText=txt;
            break;
        case '+/-':
            if(txt<0)
            txt=Math.abs(txt);
            else
            txt=eval(-1*txt);

            t.innerText=txt;
            break;
        case '=':
            evals.push(txt);
            var evaluation=eval(evals.join(' '));
            txt=evaluation + '';
            t.innerText=txt;
            evals=[];
            break;
        
        default:
        break;
    }
}

var updatetextbox= (clickObj)=>
{
    
   
    var btnText=clickObj.target.innerText;                 
    if(txt=='0')
    txt=" "; 
    if(!t.innerText.indexOf(-1)=='0'&& t.innerText.indexOf(0)=='0')
    {
    if(btnText!=0)
        txt += btnText;
    else 
        txt='0';
    }
    else
    txt += btnText;

    t.innerText= txt; 
}
    for (let i =0;i<operate.length;i++)
{
    operate[i].addEventListener("click",perform,false);
}
for (let i=0;i<numbers1.length;i++)
{
   numbers1[i].addEventListener('click', updatetextbox,false);
}
function clear1()
{
    txt=0;
    t.innerHTML=txt;
    secondoperand=undefined;
    evals=[];
}

var deci=document.getElementById("decimal");
deci.onclick=() =>
{
    if(txt=='0')
    {
        txt='0.';
    }
    else if(!txt.includes('.'))
        txt+='.';
        Math.round(txt);
    t.innerText= txt;

}

