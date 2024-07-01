'use strict'
// <    >  =>

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('.search');
    const mensajeError = document.querySelector('.mensaje-error');

    if(input.value.trim() === '') {
        mensajeError.style.display = 'block';
        input.style.borderColor = '#e75656';
    } else {
        mensajeError.style.display = 'none';
        formulario.submit();   
    }
});