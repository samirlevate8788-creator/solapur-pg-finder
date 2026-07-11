function contact() {
    alert("Call this PG owner for booking!");
}

function subscribe() {
    let email = document.getElementById("email").value;
    if (email === "") {
        alert("Please enter your email!");
    } else {
        alert("Subscribed successfully with: " + email);
        document.getElementById("email").value = "";
    }
}

document.getElementById("search").addEventListener("keyup", function() {
    let filter = this.value.toUpperCase();
    let cards = document.getElementsByClassName("pg-card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h2")[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
});
