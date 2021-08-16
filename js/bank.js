
 document.getElementById('login-submit').addEventListener('click',function(){
     //get user email
     const emailField = document.getElementById('user-email');
     const userEmail = emailField.value;
     console.log(userEmail);
     //get user password 
     const passwordField =document.getElementById('user-Password')
     const userPassword = passwordField.value;

    // check email and password
    
    if(userEmail == 'jaber@gmail.com' && userPassword == 'ahammed'){
        window.location.href='banking.html'
    }
 })