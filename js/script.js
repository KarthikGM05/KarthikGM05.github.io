// Open and close sidebar on small screens
function openCloseNav(btn) {
    if (btn.classList.contains("open")) {
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("menu-button-cont").style.marginLeft = "0";
        btn.classList.remove("fa-times");
        btn.classList.add("fa-bars");
    } else {
        document.getElementById("sidenav").style.width = "300px";
        document.getElementById("menu-button-cont").style.marginLeft = "300px";
        btn.classList.remove("fa-bars");
        btn.classList.add("fa-times");
    }
    btn.classList.toggle("open");
}

// Close navbar before scrolling to content on small screens
document.querySelectorAll(".navClick").forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        if (
            getComputedStyle(document.getElementById("menu-button-cont"))
                .display !== "none"
        ) {
            openCloseNav(document.getElementById("clicker"));
        }
        window.location = item.href;
    });
});

// Change colours of accordion cards
let btnList = [1, 2, 3];
for (var i = 1; i <= 3; i++) {
    document.getElementById("edu-" + i).addEventListener("click", (event) => {
        if (event.srcElement.classList.contains("collapsed")) {
            document.getElementById(
                "card-" + event.srcElement.id.split("-")[1]
            ).style.backgroundColor = "#2c98f0";
            var curBtn = Array.from([
                parseInt(event.srcElement.id.split("-")[1]),
            ]);
            var otherBtnList = btnList.filter(
                (value) => !curBtn.includes(value)
            );
            otherBtnList.forEach((item) => {
                document.getElementById("card-" + item).style.backgroundColor =
                    "#ffffff";
            });
        } else {
            document.getElementById(
                "card-" + event.srcElement.id.split("-")[1]
            ).style.backgroundColor = "#ffffff";
        }
    });
}

window.onload = () => {
    if (window.location.href !== window.location.href.split("#")[0]) {
        window.location.href = window.location.href.split("#")[0];
    }
};
