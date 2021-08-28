// import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';


export const saludar = ( nombre = 'sin nombre' ) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ nombre } !!!`;
    const status = document.createElement('h3');
    status.innerText = ' Listo'

    document.body.append( h1 );

    
    // Img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );
    document.body.append( status )
}