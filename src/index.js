import './styles.css';
import $  from '../node_modules/jquery/dist/jquery'
import "bootstrap/js/dist/carousel";
let caroselUnoData = require('./data/CPLV-entrada-Carousel01.json')
let caroselDosData = require('./data/CPLV-entrada-Carousel02.json')
let carouselP1Urls = [];
let carouselP2Urls = [];
let cont = 0;
// let todosLosVideos = [];



const crearUrlsCar01 = ( data ) =>{
    for (var i = 0; i < data.videos.length; i++) {
        const { url } = data.videos[i];
        carouselP1Urls.push(url);     
    }
    
}
const crearUrlsCar02 = ( data ) =>{
  for (var i = 0; i < data.videos.length; i++) {
      const { url } = data.videos[i];
      carouselP2Urls.push(url);   
  }
}

crearUrlsCar01(caroselUnoData)
crearUrlsCar02(caroselDosData)

// Funciones Globales
function Siguiente() {
    $("#carouselExampleInterval1").carousel("next");
    $("#carouselExampleInterval2").carousel("next");
  }
// Crea el carousel 1
const imprimirListaUrlsCar01 = () => {
    for (var i = 0; i < carouselP1Urls.length; i++) {
      $("#slot01").append(
        '<div class="carousel-item" data-interval="500000">' +
          '<video src="' +
          carouselP1Urls[i] +
          '"  muted autoplay loop class="d-block w-100">' +
          '</video>'+
          '</div>'
      );
    }
  };
  imprimirListaUrlsCar01();
  $("#slot01 div:first-child").addClass("active");

// Crea el carousel 2
const imprimirListaUrlsCar02 = () => {
  for (var i = 0; i < carouselP2Urls.length; i++) {
    $("#slot02").append(
      '<div class="carousel-item" data-interval="500000">' +
        '<video src="' +
        carouselP2Urls[i] +
        '"  muted autoplay loop class="d-block w-100">' +
        '</video>'+
        '</div>'
    );
  }
};
imprimirListaUrlsCar02();
$("#slot02 div:first-child").addClass("active");


// contador
setInterval(function(){
  cont++;
  if (cont % 12 == 0) {

    Siguiente();
    let todosLosVideos = [];
    todosLosVideos = document.querySelectorAll("video");
    // console.log(todosLosVideos)
    todosLosVideos.forEach(e => e.currentTime=0);
  }

},1000);

