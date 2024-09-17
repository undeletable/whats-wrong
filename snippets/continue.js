const CONTACTS = [
    { name: "John", email: "john@mail.com", isReadOnly: true },
    { name: "Alice", email: "alice@mail.com", isReadOnly: false },
    { name: "Ron", email: "ron@mail.com", isReadOnly: false },
    { name: "Lisa", email: "lisa@mail.com", isReadOnly: true }
];

CONTACTS.forEach(item => {
    if (item.isReadOnly) {
        continue;
    }
    item.name = item.name.toUpperCase();
});
