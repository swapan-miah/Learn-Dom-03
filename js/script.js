document.getElementById('loginBtn').addEventListener('click', function(){

    let inputEmail = document.getElementById('inputEmail');
    let inputPassword = document.getElementById('inputPassword');

    let inputEmailValue = inputEmail.value;
    let inputPasswordValue = inputPassword.value;

    if(inputEmailValue == 'info@admin.com' && inputPasswordValue == 'admin'){

        window.location.href ='../html/dashboard.html';
    }else{

        alert("You Are Not Real Account Holder");
    }

});
