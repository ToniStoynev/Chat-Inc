const appUrl = 'https://localhost:44379/api/';
let currentUsername = null;

function chooseUsername(){
    let username =  $("#username").val();

    if(username === ''){
        alert("You cannot choose an empty username !");
        return;
    }

    currentUsername = username;
    $("#username-choice").text(currentUsername);
    $("#reset-data").show();
    $("#choose-data").hide();
}

function resetUsername(){
 $("#username").val('');
 $("#choose-data").show();
 $("#reset-data").hide();

}

$("#reset-data").hide();
loadMessages();

setInterval(loadMessages, 1000);

function loadMessages(){
    $.get({
         url: appUrl + 'messages/all',
         success: function success(data){
             renderMessages(data);
         },
         error: function error (error) {
             console.error(error);
         }
    });
}

function renderMessages(data){
     $('#messages').empty();
     for(let message of data){
         $('#messages')
         .append(`<div class="message d-flex justify-content-start"><strong>${message.user}</strong>: ${message.content}</div>`);
     }
}

function sendMessage(){
     let username = currentUsername;
     let message = $("#message").val();

     if(username == null){
         alert("You cannot send a message before choosing an username");
         return;
     }

     if(message.length === 0){
         alert("You cannot send an empty message");
         return;
     }

     $.post({
         url: appUrl + "messages/create",
         headers: {
             "Content-Type": "application/json"
         },
         data: JSON.stringify({user: username, content: message}),
         success: function(){
             $("#message").val('');
             loadMessages();
         }
     });
}