var lgin = document.getElementById("lgin");
lgin.onclick = () => {
    var infos = prompt("Whats Your Password?\n*PASSWORD ONLY!*");
    if (infos == "Learn!") {
        this.location = "clients.html";
    } else {
        alert("Incorect Password!");
    };
};
