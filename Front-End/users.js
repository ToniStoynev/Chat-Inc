function login(){
    let username = $("#login-username").val();
    let password = $("#login-password").val();

    $("#login-username").val('');
    $("#login-password").val('');

    let requestBody = {username, password};

    $("#caption").text("Welcome to Chat-Inc!");
    $("#guest-navbar").hide();
    $("#login-form").hide();
    $("#logged-in-data").show();

    // $.post({
    //     url: appUrl + "users/login",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     data: JSON.stringify(requestBody),
    //     success: function(data){
          
    //     },
    //     error: function(err){
    //         console.error(err);
    //     }
    // });
}

function register(){

    let username = $("#register-username").val();
    let password = $("#register-password").val();

    $("#register-username").val('');
    $("register-password").val('');

    let data = {username, password};

    console.log(data);

       // $.post({
    //     url: appUrl + "users/login",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     data: JSON.stringify(data),
    //     success: function(){
            //toogleLogin();
    //     },
    //     error: function(err){
    //         console.log(err);
    //     }
    // });
}

function logout(){
    $("#caption").text("Choose your username to begin chatting!");
    evictToken();
    $("#logged-in-data").hide();
    $("#login-form").show();
}

function saveToken(token) { 
    localStorage.setItem('auth_token', token);
 }

 function evictToken(){
     localStorage.removeItem('auth_token');
 }


 function isLoggedIn(){
     return localStorage.getItem('auth_token') != null;
 }

 function getUser(token){
     //let token = localStorage.getItem('auth_token');

     let claims = token.split('.')[1];

     let decodecClaims = atob(claims);

     let parsedClaims = JSON.parse(decodecClaims);

     console.log(parsedClaims);

     //return parsedClaims.name;
 }

function toogleLogin(){
    $("#register-form").hide();
    $("#login-form").show();
}

function toogleRegister(){
    $("#login-form").hide();
    $("#register-form").show();
}

$("#logged-in-data").hide();
toogleLogin();