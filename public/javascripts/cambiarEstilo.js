$(function() {
    var estiloCSS = localStorage.getItem("estiloActual");    
    if (estiloCSS === null){
        cambiarEstilo("estiloGeneral.css");
    } else{
        cambiarEstilo(estiloCSS);
    }
});
    
function cambiarEstilo(estilo){
    setReferencia(estilo);
    localStorage.setItem("estiloActual",estilo);
    cambiarTitulo(estilo);

}
    
function setReferencia(estilo){
    var rutaAbsoluta = "stylesheets/"+estilo;
    $("link[id=\"estiloPagina\"]").attr("href",rutaAbsoluta);
}

function cambiarTitulo(estilo){
    if(estilo==="estiloGeneral.css")
        $("img[id=\"titulo\"]").attr("src","../images/Fondos/EstiloGeneral/banner.png");
    else
        $("img[id=\"titulo\"]").attr("src","../images/Fondos/EstiloOscuro/banner.png");
}