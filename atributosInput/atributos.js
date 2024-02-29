document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('input-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe
        
        const textInputValue = document.getElementById('text-input').value;
        const emailInputValue = document.getElementById('email-input').value;
        const passwordInputValue = document.getElementById('password-input').value;
        const dateInputValue = document.getElementById('date-input').value;
        const colorInputValue = document.getElementById('color-input').value;

        alert(
            `Valor del Input de Texto: ${textInputValue}\n` +
            `Valor del Email Input: ${emailInputValue}\n` +
            `Valor de la Contraseña: ${passwordInputValue}\n` +
            `Valor de la Fecha: ${dateInputValue}\n` +
            `Valor del Color: ${colorInputValue}`
        );
    });
});
