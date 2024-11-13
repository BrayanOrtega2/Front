$('#formLogin').on('submit', function (event) {
    event.preventDefault();

    const formData = {
        userName: $('input[name="userName"]').val(), 
        keyword: $('input[name="keyword"]').val(), 
        email: $('input[name="email"]').val(), 
    }

    $.post('http://localhost:4000/auth/Login',
        formData,
        function (data) {
            // Limpiar formulario de registro

            if (data.result.user.length > 0) {
                document.cookie = "isLoggedIn=true; path=/; max-age=3600";
                document.cookie = " userName="+data.result.user[0].userName+"; path=/; max-age=3600"
                // SweetAlert2
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 5000,
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

                window.location.href='http://localhost:5500/users.html';
            } else {
                // SweetAlert2
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: "usuario y contraseña incorrectos"
                });
            }

            



        }
    )

});