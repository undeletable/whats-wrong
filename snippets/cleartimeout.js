setTimeout(() => {
    console.log("Delayed");
}, 1000);

fetch("/data").then(() => {
    clearTimeout();
});
