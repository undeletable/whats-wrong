/* data.json contents:

{
    name: "John",
    email: "john@mail.com"
}

*/

fetch("/data.json").then(response => {
    console.log(response.name);
});
