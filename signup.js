document.getElementById('signupForm').addEventListener('submit',function(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    localStorage.setItem(username, JSON.stringify({password, tasks:[]}));
    localStorage.setItem("loggedInUser",username);

    window.location.href="todo.html";

    if(localStorage.getItem(username)) {
        alert("Username already exists! Try Logging In");
        return;
    }
});