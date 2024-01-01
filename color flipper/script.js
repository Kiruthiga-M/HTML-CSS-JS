let heading=document.getElementById('heading');
let colour=document.getElementById("color");
let colortext=document.getElementById("wrap");
let click=document.getElementById('btn');
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
click.addEventListener('click',function(){
    let hexcode='#'
    for(let i=0;i<=5;i++){
        hexcode+=randomHexValue()
    }
    colortext.style.backgroundColor=hexcode;
    colour.innerHTML = hexcode
    heading.style.color=hexcode
}
)
function randomHexValue(){
     let randomIndex=Math.floor(Math.random()*16)
     return hex[randomIndex]
}
