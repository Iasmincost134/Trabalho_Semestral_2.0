// MODO NOTURNO
const trocarTema = document.getElementById('trocar-tema');
const body = document.body;
const textClaro = document.querySelectorAll('.textClaro');
const contdestaque = document.getElementById('destaque-esc');
const agrupEsc = document.getElementById('agrup-esc')
const lineEsc = document.getElementById('line-esc')
const blocoEsc = document.querySelectorAll('#bloc-esc')
const textCinza = document.querySelectorAll('#pCinza')
const secEsc = document.querySelectorAll('.section-esc')
const lupaEsc = document.getElementById('input-esc')
const lupa = document.getElementById('lupa')
const logo = document.querySelector('.logo-esc')
const twitter = document.getElementById('twt-esc')
const face = document.getElementById('face-esc')
const insta = document.getElementById('insta-esc')

let modoEscuro = false;

trocarTema.addEventListener("click", () => {
    modoEscuro = !modoEscuro;

    if (modoEscuro) {
        body.classList.add("modo-escuro");
        textClaro.forEach(textB => {
            textB.style.color = 'white';
        });
        blocoEsc.forEach(bloco => {
            bloco.style.backgroundColor = '#262626'
            bloco.style.borderColor = 'white'
        })
        textCinza.forEach(pcinza => {
            pcinza.style.color = '#E2DDDD'
        })
        insta.src = "img/instagram2.png"
        face.src = "img/facebook2.png"
        twitter.src = "img/twitter2.png"
        logo.style.margin = '18px 0 25px 0'
        logo.src = "img/logo2.png";
        lupa.style.stroke = 'white'
        lupaEsc.style.backgroundColor = 'transparent'
        lupaEsc.style.color = 'white'
        secEsc.style.backgroundColor = '#2C3D28'
        lineEsc.style.backgroundColor = 'white'
        agrupEsc.style.backgroundColor = '#262626'
        agrupEsc.style.borderColor = 'white'
        contdestaque.style.background = 'linear-gradient(109deg, #262626 8.84%, rgba(38, 38, 38, 0.58) 66.08%);';
    
    } else {
        body.classList.remove("modo-escuro");
        textClaro.forEach(textB => {
            textB.style.color = '';
        });
        blocoEsc.forEach(bloco => {
            bloco.style.backgroundColor = '';
            bloco.style.borderColor = '';
        });
        textCinza.forEach(pcinza => {
            pcinza.style.color = '';
        });
        insta.src = "img/instagram.png"
        face.src = "img/facebook.png"
        twitter.src = "img/twitter.png"
        logo.style.margin = '0 0 0 0'
        logo.src = "img/logo1.svg";
        lupaEsc.style.backgroundColor = '';
        lupaEsc.style.color = '';
        secEsc.style.backgroundColor = '';
        lineEsc.style.backgroundColor = '';
        agrupEsc.style.backgroundColor = '';
        agrupEsc.style.borderColor = '';
        contdestaque.style.background = '';
        botaoIcone.style.color = '#FFF';
    }
});


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu').src = "img/bars-solid.svg";
    }
}
