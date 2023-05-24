function()
{
    // var formJuegos = document.getElementsByName('formJuegos')[0],
    //     // elementos = formJuegos.elements,
    //     // boton = document.getElementById('btn');

    var validarNombre = function(e)
    {
        if (formJuegos.nombre.value == 0)
        {
            alert("Falta completar tu nombre");
            e.preventDefault();
        }
    };

    var validarEmail = function(e)
    {
        if (formJuegos.email.value == 0)
        {
            alert("Falta completar tu email");
            e.preventDefault();
        }
    };
    
    var validarComentario = function(e){
        if (formJuegos.comentario.value == 0){
            alert("Acepta los términos y condiciones");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarEmail(e);
        validarComentario(e);
    };
    formJuegos.addEventListener("submit", validar);
}

function(formJuegos)