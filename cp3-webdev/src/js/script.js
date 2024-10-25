let imagens =[
    "src/assets/carnes.PNG",
    "src/assets/carneTabua.webp",
    "src/assets/cortesTabua.webp"
];
let i=0;
let time =3000;

function slideShow(){
    document.getElementById("image").src=imagens[i];
    i++;
    if(i == imagens.length) {i=0;}
    setTimeout("slideShow()",time)  
    }
    slideShow();


function trocar(cor){
    document.body.style.background = cor;
}

alert("Seja bem-vindo")