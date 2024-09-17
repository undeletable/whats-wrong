const promise = new Promise(() => {
    return {
        name: "John",
        email: "john@mail.com"
    };
});

promise.then(value => {
    console.log(value);
});
