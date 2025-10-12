const banner = document.getElementById("mainBanner");

const imagesData = {
  1: ["images/pergolado1.jpg", "images/pergolado2.jpg"],
  2: ["images/cobertura1.jpg", "images/cobertura2.jpg"],
  3: ["images/corrimao1.jpg", "images/corrimao2.jpg"],
  4: ["images/portao1.jpg", "images/portao2.jpg"]
};

let indexBanner = 0;

function trocarImagemBanner() {
    banner.style.backgroundImage = `url('${imagensBanner[indexBanner]}')`;
    indexBanner = (indexBanner + 1) % imagensBanner.length;
}

trocarImagemBanner(); // Exibe a primeira imagem
setInterval(trocarImagemBanner, 3000); // Troca a cada 3 segundos

