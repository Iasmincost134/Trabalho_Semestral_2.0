// const box = document.querySelector(".contentor");
const imagens = document.querySelectorAll(".imagens");
let indiceAtual = 0;
let contador = 0;

function slider(n) {
    indiceAtual += n;
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
    imagens.forEach((imagem) => {
        imagem.classList.remove('ativo');
    });
    imagens[indiceAtual].classList.add('ativo');
}

setInterval(() => {
    slider(1);
}, 2500);

// setInterval(slider, 2500);

//carrossel de imagens de curiosidades
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging")
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return; // se o isDragging é falso retorna aqui
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging")
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

function abrirAlerta() {
    Swal.fire({
        title: "Enviado com sucesso!",
        text: "Valorizamos sua opinião para continuarmos sempre trabalhando para melhorar.",
        icon: "success",
        customClass: {
            popup: 'custom-swal-font',
        },
    });
}

const TopButton = document.getElementById('top')
TopButton.onclick = () =>
    document.documentElement.scroll({
        top: 0,
        behavior: "smooth"
    });
window.onscroll = () => {
    TopButton.hidden = !(document.documentElement.scrollTop > 200)
}

class CookiesNotice {
    constructor() {
        this.key = "@cookies";
        this.init();
    }
    layout() {
        return `
        <div id="cookies-notice">
            <div>
                <span>
                    Ao clicar em “Aceitar todos os cookies” você concorda com o armazenamento de cookies em seu dispositivo 
                    proporcionando uma experiência aprimorada, otimizando o desempenho do site, analisando sua interação conosco 
                    e personalizando o conteúdo para atender às suas preferências.
                    </span>
            </div>

            <div class="actions">
            <button class="reject" onclick="cookiesNotice.remove();">Rejeitar</button>
            <button class="accept" onclick="cookiesNotice.accept();">Aceitar Cookies</button>
            </div>
        </div>
        `;
    }

    save() {
        localStorage.setItem(this.key, true);
    }

    get() {
        const get = localStorage.getItem(this.key) || false;
        return get;
    }

    create() {
        document.body.insertAdjacentHTML("beforeend", this.layout())
    }
    remove() {
        const select = document.querySelector("#cookies-notice");
        select.parentNode.removeChild(select);

    }
    accept() {
        this.save();
        this.remove();
    }
    async init() {
        const status = await this.get();
        if (status) {
            return;
        }
        this.create();
    }
}
const cookiesNotice = new CookiesNotice;

//Pesquisar
function search() {
    let input = document.getElementById('searchbar').value;

    let container = document.querySelector('.container');

    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  }
//hamburguer
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navlist = document.querySelector(".nav-list");
// const teste = document.querySelector(".search");

hamburger.addEventListener("click", function () {
    if (navlist.style.display === 'none') {
        navlist.style.display = 'flex'
        nav.classList.add('active')

    } else {
        navlist.style.display = 'none'
        nav.classList.remove('active')
    }
})


//carrossel
let contar = 1;

setInterval(function () {
    document.getElementById('slide' + contar).checked = true;
    contar++;

    if (counter > 4) {
        contar = 1;
    }
}, 2000);
