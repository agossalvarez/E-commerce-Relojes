const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');
const propiedadColor = producto.querySelector('#propiedad-color');
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad');
const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad');
const inpunCantidad = producto.querySelector('#cantidad');

thumbs.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
        const imagenSrc = e.target.src;
        const lastIndex = imagenSrc.lastIndexOf('/');
        const nombreImagen = imagenSrc.substring(lastIndex + 1);

        productoImagen.src = `./img/tennis/${nombreImagen}`;
    }
})

propiedadColor.addEventListener('click', (e) => {
    if(e.target.tagName === 'INPUT'){
        productoImagen.src = `./img/tennis/${e.target.value}.jpeg`;
    }
})

btnIncrementarCantidad.addEventListener('click', (e) => {
    inpunCantidad.value = parseInt(inpunCantidad.value) + 1;
})

btnDisminuirCantidad.addEventListener('click', (e) => {
    if (parseInt(inpunCantidad.value) > 1) {
        inpunCantidad.value = parseInt(inpunCantidad.value) - 1;   
    }
})