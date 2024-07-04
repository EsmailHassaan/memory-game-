let button = document.querySelector('.button');
let startgame = document.querySelector('.start');
let block = Array.from(document.querySelectorAll('.blocks .block'));
let random = Math.floor(Math.random()*block.length);
let wrong =  0 ;
let wrongs = document.querySelector('.wrong');
let yourname = document.querySelector('.namee');

yourname.innerHTML =`hello :`;

button.onclick = ()=>{
    let myname = prompt('whats is your name');
    if(myname === '' || myname === null){
        yourname.innerHTML = 'unknown';
    }else{
        yourname.innerHTML =`hello : ${myname}`;
    }
    startgame.remove();
}

wrongs.innerHTML = `you have ( ${wrong} ) wrongs steps`;

for (let i = 0; i < block.length; i++) {
    let random = Math.floor(Math.random()*block.length);
    block[i].style.cssText=`order:${random}`;   
}

block.forEach(el =>{
    el.addEventListener('click', ()=>{    
        el.classList.add('fllip');
        
       
        let rotate = block.filter(el => el.classList.contains('fllip'));
        if(rotate.length === 2){
            document.querySelector('.blocks').style.cssText=`pointer-events:none`
            setTimeout(()=>{
                document.querySelector('.blocks').style.cssText=`pointer-events:visible`

            },800)
            let first = rotate[0];
            let secound = rotate[1];
            if(first.dataset.number === secound.dataset.number){
                first.classList.remove('fllip');
                secound.classList.remove('fllip');
                first.classList.add('fllip2');
                secound.classList.add('fllip2');
            }else{
                wrong++
                wrongs.innerHTML = `you have ( ${wrong} ) wrongs steps`;
                setTimeout(()=>{
                    first.classList.remove('fllip');
                    secound.classList.remove('fllip');
                },1000)
            }
        }
    })
    
})
