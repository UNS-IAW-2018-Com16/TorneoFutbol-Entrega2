$(function() {
    var estiloCSS = localStorage.getItem("estiloActual");    
    if (estiloCSS == null){
        cargarLocalStorage("estiloGeneral.css");
    } else {
        cargarLocalStorage(estiloCSS);
    }
});
    
function cambiarEstilo(estilo){
    if(estilo==="estiloGeneral.css"){ 
        $.get('./api/guardarEstilo', {numeroEstilo: 1}, function(data){
            if(data=='Sin estilo'){
                cargarLocalStorage(estilo);
            } else {
                clearYReload(estilo);
            }
        })
    } else{
        $.get('./api/guardarEstilo', {numeroEstilo: 2}, function(data){
            if(data=='Sin estilo'){
                cargarLocalStorage(estilo);
            } else {
                clearYReload(estilo);
            }
            
        })
    }

}
    
function cargarLocalStorage(estilo){
    setReferencia(estilo);
    localStorage.setItem("estiloActual",estilo);
    cambiarTitulo(estilo);    
}

function clearYReload(estilo){
    localStorage.clear();
    localStorage.setItem("estiloActual",estilo);
    location.reload(true);
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