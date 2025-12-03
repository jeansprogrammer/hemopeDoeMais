console.log("Sistema carregado.");

// busca
document.getElementById("search-btn").addEventListener("click", () => {
    let termo = document.getElementById("search-input").value;
    alert("Busca por: " + termo);
});
