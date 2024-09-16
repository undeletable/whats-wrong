const button = document.getElementById("click-me");

button.addEventListener("click", () => {
    console.log("The button is clicked");
});

setTimeout(() => {
    button.removeEventListener("click", () => {
        console.log("The button is clicked");
    });
}, 5000);
