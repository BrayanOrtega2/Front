$('#formRegister').on('submit', function(event){
    event.preventDefault();

    const formData={
        name: $('input[name="name"]').val(), 
        userName: $('input[name="userName"]').val(), 
        keyword: $('input[name="keyword"]').val(), 
        rol: $('select[name="rol"]').val(), 
        email: $('input[name="email"]').val(), 
        state: $('input[name="state"]').val(), 
        phoneNumber: $('input[name="phoneNumber"]').val() 
    }

    $.post('http://localhost:4000/auth/createUser', formData, function(data){

        // Limpiar formulario de registro
        $('#formRegister')[0].reset();

        // Tiempo de espera para redireccionar
        setTimeout(function () {
            window.location.href='http://localhost:5500/login.html';
        },3000)

        //  SweetAlrt2

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: data.result.message
          });
    })
});