const data = {
    name: "John",
    email: "john@mail.com"
};

localStorage.setItem("contact", data);

const savedData = localStorage.getItem("contact");
