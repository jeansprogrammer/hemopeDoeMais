// Pontuações fictícias por cidade
const cityData = {
    /*"BUIQUE": {
        nome: "Buíque",
        score: 60.44,
        img: "../../assets/img/cities_flags/BUIQUE.png"
    },*/
    "ITAIBA": {
        nome: "Itaíba",
        score: 55.21,
        img: "../../assets/img/cities_flags/ITAIBA.png"
    },
    "AGUAS_BELAS": {
        nome: "Águas Belas",
        score: 58.90,
        img: "../../assets/img/cities_flags/AGUAS_BELAS.png"
    },
    /*"TUPANATINGA": {
        nome: "Tupanatinga",
        score: 63.70,
        img: "../../assets/img/cities_flags/TUPANATINGA.png"
    },*/
    /*"PEDRA": {
        nome: "Pedra",
        score: 49.87,
        img: "../../assets/img/cities_flags/PEDRA.png"
    },*/
    "BOM_CONSELHO": {
        nome: "Bom Conselho",
        score: 52.30,
        img: "../../assets/img/cities_flags/BOM_CONSELHO.png"
    },
    "IATI": {
        nome: "Iati",
        score: 41.22,
        img: "../../assets/img/cities_flags/IATI.png"
    },
    "GARANHUNS": {
        nome: "Garanhuns",
        score: 65.76,
        img: "../../assets/img/cities_flags/GARANHUNS.png"
    },
    "CANHOTINHO": {
        nome: "Canhotinho",
        score: 59.45,
        img: "../../assets/img/cities_flags/CANHOTINHO.png"
    },
    "CAETES": {
        nome: "Caetés",
        score: 51.90,
        img: "../../assets/img/cities_flags/CAETES.png"
    },
    "CORRENTES": {
        nome: "Correntes",
        score: 47.88,
        img: "../../assets/img/cities_flags/CORRENTES.png"
    },
    /*"VENTUROSA": {
        nome: "Venturosa",
        score: 54.12,
        img: "../../assets/img/cities_flags/VENTUROSA.png"
    },*/
    "CAPOEIRAS": {
        nome: "Capoeiras",
        score: 82.33,
        img: "../../assets/img/cities_flags/CAPOEIRAS.png"
    },
    "SAO_JOAO": {
        nome: "São João",
        score: 81.30,
        img: "../../assets/img/cities_flags/SAO_JOAO.png"
    },
    "PARANATAMA": {
        nome: "Paranatama",
        score: 54.90,
        img: "../../assets/img/cities_flags/PARANATAMA.png"
    },
    "LAGOA_DO_OURO": {
        nome: "Lagoa do Ouro",
        score: 55.80,
        img: "../../assets/img/cities_flags/LAGOA_DO_OURO.png"
    },
    /*"JUREMA": {
        nome: "Jurema",
        score: 48.33,
        img: "../../assets/img/cities_flags/JUREMA.png"
    },*/
    "LAJEDO": {
        nome: "Lajedo",
        score: 58.12,
        img: "../../assets/img/cities_flags/LAJEDO.png"
    },
    "BREJAO": {
        nome: "Brejão",
        score: 49.22,
        img: "../../assets/img/cities_flags/BREJAO.png"
    },
    "TEREZINHA": {
        nome: "Terezinha",
        score: 76.44,
        img: "../../assets/img/cities_flags/TEREZINHA.png"
    },
    "PALMERINA": {
        nome: "Palmerina",
        score: 53.20,
        img: "../../assets/img/cities_flags/PALMERINA.png"
    },
    "JUPI": {
        nome: "Jupi",
        score: 50.40,
        img: "../../assets/img/cities_flags/JUPI.png"
    },
    "ANGELIM": {
        nome: "Angelim",
        score: 42.99,
        img: "../../assets/img/cities_flags/ANGELIM.png"
    },
    "CALCADO": {
        nome: "Calçado",
        score: 57.10,
        img: "../../assets/img/cities_flags/CALCADO.png"
    },
    "JUCATI": {
        nome: "Jucati",
        score: 77.21,
        img: "../../assets/img/cities_flags/JUCATI.png"
    },
    "SALOA": {
        nome: "Saloá",
        score: 70.21,
        img: "../../assets/img/cities_flags/SALOA.png"
    }

};


const popup = document.getElementById("city-popup");
const popupName = document.getElementById("popup-name");
const popupScore = document.getElementById("popup-score");
const popupFlag = document.getElementById("popup-flag");

const map = document.getElementById("mapa_svg"); // seu <svg id="mapa_svg">

// Percorre cada cidade
Object.keys(cityData).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    // Hover -> mostrar popup
    el.addEventListener("mousemove", (e) => {
        popup.style.left = e.clientX + "px";
        popup.style.top = e.clientY + "px";

        popupName.textContent = cityData[id].nome;
        popupScore.textContent = "Pontuação: " + cityData[id].score;

        // bandeira real
        popupFlag.src = cityData[id].img;


        popup.classList.remove("hidden");
        popup.classList.add("visible");

        el.classList.add("highlight");
    });

    // Saiu -> esconde
    el.addEventListener("mouseleave", () => {
        popup.classList.add("hidden");
        popup.classList.remove("visible");
        el.classList.remove("highlight");
    });

    // Clique -> envia dados para a página principal
    el.addEventListener("click", () => {
        window.parent.postMessage({
            action: "updateCitySidebar",
            city: cityData[id]
        }, "*");
    });

    const svg = document.querySelector("#mapa_svg");
let zoomLevel = 1;

function applyZoom() {
    svg.style.transform = `scale(${zoomLevel})`;
    svg.style.transformOrigin = "center center";
}

document.getElementById("zoom-in").addEventListener("click", () => {
    zoomLevel += 0.1;
    applyZoom();
});

document.getElementById("zoom-out").addEventListener("click", () => {
    zoomLevel = Math.max(0.3, zoomLevel - 0.1);
    applyZoom();
});

document.getElementById("zoom-reset").addEventListener("click", () => {
    zoomLevel = 1;
    applyZoom();
});

});