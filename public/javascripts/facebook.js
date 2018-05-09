$(function() {
  
  window.fbAsyncInit = function() {
  FB.init({
    appId      : '2129139427315940',
    cookie     : true,
    xfbml      : true,
    version    : 'v3.0'
  });
  
  FB.AppEvents.logPageView(); 
  
  };

});

function login(){

    FB.login(function(response) {
        if (response.authResponse) {
          if(response.status == "connected")
            extraerDatos();     
          alert("Se ha iniciado sesión con Facebook.");     
        }else{
          console.log('User cancelled login or did not fully authorize.');
        }
    } , {scope: 'email'});  

}

function logout(){
    FB.logout();
    document.getElementById("login").innerHTML = "Iniciar Sesión Facebook";
    alert("Se ha cerrado la sesión de Facebook.");
}
/*
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

function statusChangeCallback(response){
  if (response.status == 'connected'){
    extraerDatos();
    console.log(response.authResponse);
  }    
}*/

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.0&appId=2129139427315940&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var usrNombre, usrApellidos, usrCorreo, usrID, usrSexo;

function extraerDatos(){
  var userFirstName, userLastName, userEmail;
    
  FB.api(
    '/me',
    'GET',
      {"fields":"email,first_name,last_name"},
      function(response) {
          copiarDatos(response);
          modificarBoton(response);
    }
  );
}

function modificarBoton(response) {
  document.getElementById('login').innerHTML = response.first_name;
}

function copiarDatos(response){
    var userFirstName = response.first_name;
    var userLastName = response.last_name;
    var userEmail = response.email;
    var esEditor;
    if (userEmail == "juuan.olmedo@hotmail.com")
      esEditor = true;
    else
      esEditor = false;
    var datosUsuario = {
        nombre:userFirstName, 
        apellido:userLastName, 
        email:userEmail,
        editor: esEditor
    };
    chequearUsuario(datosUsuario);
}

function chequearUsuario(datosUsuario){
    console.log("Entre a chequear usuario");
    console.log("Datos: "+datosUsuario.nombre+ "-"+ datosUsuario.apellido+ "-"+datosUsuario.nombre+"-"+datosUsuario.email);
    
    $.post('./api/datosUsuario',
	datosUsuario,
	function (data, status){
	});
}