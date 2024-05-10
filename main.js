// function playSonido(idElementoAudio) {
//     document.querySelector(idElementoAudio).play();
// }

// const listaDeTechas = document.querySelectorAll('.tecla');
// let contador = 0;

// while (contador < listaDeTechas.length) { 
//     const tecla = listaDeTechas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#sonido_${instrumento}`;
//     console.log(idAudio);
//     tecla.onclick = function() {
//         playSonido(idAudio);
//     };
//     contador++; 
// }

// function playSonido(idElementoAudio) {
//     document.querySelector(idElementoAudio).play();
// }

// const listaDeTechas = document.querySelectorAll('.tecla');

// for (let contador = 0; contador < listaDeTechas.length; contador++) {
//     const tecla = listaDeTechas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#sonido_${instrumento}`;
//     tecla.onclick = function() {
//         playSonido(idAudio);
//     };

//     tecla.onkeydown = function(){
//         tecla.classList.add('activa')
//     }
//     tecla.onkeyup = function(){
//         tecla.classList.remove('activa');
//     }
// }

function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function (){
        playSonido(idAudio);
    };
    tecla.onkeydown = function(evento){
        
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
        console.log(evento.code === 'Space' || evento.code === 'Enter')
       
        
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }
   

}