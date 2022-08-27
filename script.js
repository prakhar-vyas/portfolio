const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

//For Email
let validemail = document.getElementById("email");
let regex = /([_\.a-zA-Z0-9]+)@([_\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
let message = document.getElementById("message");
let name1 = document.getElementById("name1");

message.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendEmail();
    clean();
  }
});

function sendEmail() {
  if (regex.test(validemail.value)) {
    Email.send({
      Host: "smtp.yourisp.com",
      Username: "username",
      Password: "password",
      To: "them@website.com",
      From: "you@isp.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then((message) => alert("Message sent succesfully"));
  } else {
    alert("Please enter valid email.");
  }
}

function clean() {
  message.value = "";
  name1.value = "";
  validemail.value="";
}
