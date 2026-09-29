function changebg(){
    let r = Math.trunc(Math.random()*255);
    let g = Math.trunc(Math.random()*255);
    let b = Math.trunc(Math.random()*255);

    let body_bg = document.querySelector('body');
    body_bg.style.cssText = `background-color: rgb(${r}, ${g}, ${b})`;

    let h4_bg = document.querySelector('h4');
    h4_bg.innerHTML = `RGB: ${r}, ${g}, ${b}`;

//r.innerHTML = 
//g.innerHTML =
//b.innerHTML =

}

let mode = document.querySelector('#mode');
let body = document.querySelector('body');
let premode ='light';

mode.addEventListener('click', () => {
    if(premode === 'light'){
        premode ='dark';
        body.classList.add('dark');
        body.classList.remove('light');
    }
    else{
        premode = 'light';
        body.classList.add('light');
        body.classList.remove('dark');

    }
});













