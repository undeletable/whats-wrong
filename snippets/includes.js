const CONTACTS = [
    { name: "John", email: "john@mail.com" },
    { name: "Alice", email: "alice@mail.com" },
    { name: "Ron", email: "ron@mail.com" },
    { name: "Lisa", email: "lisa@mail.com" }
];

const isAlicePresent = CONTACTS.includes({ name: "Alice", email: "alice@mail.com" });
const indexOfRon = CONTACTS.indexOf({ name: "Ron", email: "ron@mail.com" });
