function validate(e) {
  e.preventDefault();

  const email = document.getElementById("email").Value;
  const pass = document.getElementById("password").Value;
  const age = document.getElementById("age").Value;
  const msgBox = document.getElementById("massage");

  let message = "";

  if (email === "") {
    message = "Enter an email.";
    msgBox.style.color = "red";
  } else if (pass === "") {
    message = "Enter a password.";
    msgBox.style.color = "red";
  }
   else if ( age === "") {
    message = "Enter an age.";
    msgBox.style.color = "red";
  } else  (pass === "") {
    message = "login successfully.";
    msgBox.style.color = "green";
  }
  msgBox.innerText = message;
}
