$(document).ready(()=>{
    $("button").click(()=>{
        let email= $("#email").val();
        let passsword= $("#password").val();
        if (validate(email,passsword))
        {
            $("#message").Html("Welcome to Application")
        }
        else{
            $("#message").Html("Invalid user , please try again.")
        }
    })
    
})


// function authenticate(email,password){
//     console.log("authenticatin is caled");
//     let email=document.getElementById("email").ariaValueMax;
//     let password=document.getElementById("password").ariaValueMax;
//     validate(email,password)
// }