
document.getElementById("changeBtn").onclick = function () {
    document.getElementById("colorText").style.color = "green";
    document.body.style.backgroundColor = "lightyellow";
};

function updateCount() {
    let text = document.getElementById("textArea").value;
    let charCount = text.length;

    let wordCount;
    if (text.trim() === "") {
        wordCount = 0;
    } else {
        wordCount = text.trim().split(/\s+/).length;
    }

    let counter = document.getElementById("counter");
    counter.innerHTML = "Characters: " + charCount + " | Words: " + wordCount;

    if (charCount > 200) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}

document.getElementById("loginForm").onsubmit = function(event) {
      event.preventDefault();

      let user = document.getElementById("username").value;
      let pass = document.getElementById("password").value;
      let msg = document.getElementById("message");

      if (user === "" || pass === "") {
        msg.innerHTML = "Please fill in all fields";
      } else if (user === "admin" && pass === "1234") {
        msg.innerHTML = "Admin login successful";
      } else {
        msg.innerHTML = "Welcome, " + user + "!";
      }
    };