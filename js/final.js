document.querySelector("#classBttn").addEventListener("click", function() {
    var x = document.getElementById("charStats");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        document.getElementById("classBttn").innerHTML = "Hide Base Stats";
    } else {
        x.style.display = "none";
        document.getElementById("classBttn").innerHTML = "Show Base Stats";
    }
});

document.querySelector("#classProfs").addEventListener("click", function() {
    var x = document.getElementById("charProfs");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        document.getElementById("classProfs").innerHTML = "Hide Base Proficiencies";
    } else {
        x.style.display = "none";
        document.getElementById("classProfs").innerHTML = "Show Base Proficiencies";
    }
});

document.querySelector("#classInfo").addEventListener("click", function() {
    var x = document.getElementById("charInfo");
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
        document.getElementById("classInfo").innerHTML = "Hide Character Information";
    } else {
        x.style.display = "none";
        document.getElementById("classInfo").innerHTML = "Show Character Information";
    }
});