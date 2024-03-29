import register from "./register.js"
import view from "../view.js"
import newAuthController from "../../Controllers/authController.js"
import chat from "../chat/chat.js";

const loginScreen = `
<div class="container">
  <div class="row">
    <div class="col-sm">
    
    </div>
    <div class="col-sm">
        <form id="js-formLogin">
            <h1>Login</h1>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" id="js-btnMoveToRegister" class="btn btn-secondary">Register</button>
        </form>
    </div>
    <div class="col-sm">
      
    </div>
  </div>
</div>
`

function onload() {
    const btnMoveToRegister =  document.getElementById('js-btnMoveToRegister');
    const formLogin = document.getElementById('js-formLogin');
    btnMoveToRegister.addEventListener('click', function() {
        view.setScreen(register);
    })   
    formLogin.addEventListener('submit',async function(event) {
        event.preventDefault();
        const loginPayload = {
            email: formLogin.email.value,
            password: formLogin.password.value
            }        
        const authController = newAuthController();
        const res = await authController.login(loginPayload)
        if (res.type === 'success') {
            view.setScreen(chat)
        }
    });
}

const login = {
    content: loginScreen,
    onload: onload
}

export default login;