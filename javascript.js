// //declararmos una función a la que quiero llamar cuando hagan click sobre el H1//
// //antes usabamos onclic en el html, ahora lo hacemos directamente en java//
// //con la función eventListener(); en el H1//
// function manejarClick(){
//   alert("Me has hecho click.");
// }
//
// //ahora le añado al elementeo H1 una oreja/eventListener, que escucha a ver si se produce un click sobre el h1//
// document.querySelector("h1").addEventListener("click",manejarClick);


//quiero añadir ahora un eventListener a todos los botones para que me avise cuando hagan click a cualquiera de ellos//

var arrayConLosBotones = document.querySelectorAll(".caja");
//averiguo la longitud del array que basicamenete es el numero de botones que guarde//
var numeroDeBotones = arrayConLosBotones.length;
//ahora recorro uno por uno los botones usando un bucle de tipo for y en cada repeticion añado un eventListener al boton que corresponda//
for (var i = 0; i < numeroDeBotones; i++) {
  //aquí añado el eventListener//
  arrayConLosBotones[i].addEventListener("click", function tocarTOM1() {
    //var tom1=new Audio("sonidos/tom-1.mp3");//
    //  tom1.play();//
    //alert(this.innerHTML);//
    //extraemos la letra del boton para saber que sonido reproducir//
    var letraBoton = this.innerHTML;

    //ahora uso la letra en un switch, para reflejar los 7 casos posibles//
    switch (letraBoton) {
      case "w":
        var tom1 = new Audio("sonidos/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sonidos/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sonidos/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sonidos/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("sonidos/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("sonidos/crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("sonidos/kick-bass.mp3");
        kick.play();
        break;
    }
  });
}
