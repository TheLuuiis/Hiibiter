'use strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');
    const namee = document.getElementById('name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

// Creamos un evento submit para validar
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Error inputs 
        const errorInputs = () => {
            namee.style.border = '1px solid red';
            lastName.style.border = '1px solid red';
            email.style.border = '1px solid red';
            password.style.border = '1px solid red';
        };

        function isValidName(namee) {
            const nameRegex =  /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
            return nameRegex.test(namee);
        };

        function isValidlastName(lastName) {
            const lastNameRegex =  /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
            return lastNameRegex.test(lastName);
        };

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        function isValidPassword(password) {
            const passwordRegex = /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
            return passwordRegex.test(password);
        };

        let isValid = true;

        // Validamos el campo del name
        if (!namee.value.trim() === '') {
            nameError.textContent = 'Enter a name';
            errorInputs();
            isValid = false;
        } else if(!isValidName(namee.value.trim())) {
            nameError.textContent = 'Invalid name';
            errorInputs();
        } else {
            nameError.textContent = '';
        }

        // Validamos el campo del lastName
        if (!lastName.value.trim() === '') {
            lastNameError.textContent = 'Enter a last name';
            errorInputs();
            isValid = false;
        } else if(!isValidlastName(lastName.value.trim())) {
            lastNameError.textContent = 'Invalid last name';
            errorInputs();
        } else {
            lastNameError.textContent = '';
        };

        // Validamos el campo del email
        if(!email.value.trim() === '') {
            emailError.textContent = 'Enter and email';
            errorInputs();
            isValid = false;
        } else if(!isValidEmail(email.value.trim())) {
            emailError.textContent = 'Invalid email';
            errorInputs()
        } else {
            emailError.textContent = '';
        };

        // Validamos el campo del password
        if(!password.value.trim() === '') {
            passwordError.textContent = 'Enter password';
            errorInputs();
            isValid = false;
        } else if(!isValidPassword(password.value.trim())) {
            passwordError.textContent = 'Invalid password';
            errorInputs();
        } else {
            passwordError.textContent = '';
        };

    });

    const resetErrors = () => {
        namee.style.border = ''; 
        lastName.style.border = ''; 
        email.style.border = ''; 
        password.style.border = ''; 
        nameError.textContent = '';
        lastNameError.textContent = ''; 
        emailError.textContent = '';
        passwordError.textContent = ''; 
    };

    namee.addEventListener('change', resetErrors);
    lastName.addEventListener('change', resetErrors);
    email.addEventListener('change', resetErrors);
    password.addEventListener('change', resetErrors);

});