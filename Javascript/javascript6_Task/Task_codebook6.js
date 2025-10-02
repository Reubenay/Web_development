document.getElementById("saveBtn").onclick = function () {
    let note = document.getElementById("noteArea").value;
    let time = new Date().toLocaleString();
    localStorage.setItem("note", note);
    localStorage.setItem("savedAt", time);
};

document.getElementById("loadBtn").onclick = function () {
    let savedNote = localStorage.getItem("note");
    let savedTime = localStorage.getItem("savedAt");
    document.getElementById("noteArea").value = savedNote;
    document.getElementById("savedTime").innerHTML = "Last saved at: " + savedTime;
};

// Task 2
let count = localStorage.getItem("visitCount");
let first = localStorage.getItem("firstVisit");

if (count) {
    count = parseInt(count) + 1;
    localStorage.setItem("visitCount", count);
} else {
    count = 1;
    localStorage.setItem("visitCount", count);
    let now = new Date().toLocaleString();
    localStorage.setItem("firstVisit", now);
    first = now;
}

document.getElementById("visitMessage").innerHTML = "You have visited " + count + " times";
document.getElementById("firstVisit").innerHTML = "First visit: " + first;

document.getElementById("resetBtn").onclick = function () {
    localStorage.removeItem("visitCount");
    localStorage.removeItem("firstVisit");
    location.reload();
};

// Task 3

let saved = localStorage.getItem("theme");

if (saved === "light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

if (saved === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

if (saved === "blue") {
    document.body.style.backgroundColor = "#0f69bdff";
    document.body.style.color = "#b9d0e4ff";
}

document.getElementById("lightBtn").onclick = function () {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    localStorage.setItem("theme", "light");
};

document.getElementById("darkBtn").onclick = function () {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    localStorage.setItem("theme", "dark");
};

document.getElementById("blueBtn").onclick = function () {
    document.body.style.backgroundColor = "#cce6ff";
    document.body.style.color = "#003366";
    localStorage.setItem("theme", "blue");
};
