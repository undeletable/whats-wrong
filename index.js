const SNIPPETS = [
    {
        buttonId: "active-tab",
        fileName: "active-tab.jsx",
        language: "jsx",
        title: "Active tab"
    },
    {
        buttonId: "clearTimeout",
        fileName: "cleartimeout.js",
        language: "javascript",
        title: "Clear timeout"
    },
    {
        buttonId: "componentError",
        fileName: "component-error.jsx",
        language: "jsx",
        title: "Component error"
    },
    {
        buttonId: "constructor",
        fileName: "constructor.js",
        language: "javascript",
        title: "Constructor"
    }
    // TODO add rest files
];

const addCode = (title, buttonId, fileName, language) => {
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("id", buttonId);
    buttonElement.innerText = title;
    document.getElementById("buttons").appendChild(buttonElement);
    buttonElement.addEventListener("click", () => {
        fetch(`./snippets/${fileName}`)
            .then(response => response.text())
            .then(contents => {
                const codeElement = document.getElementById("code");
                codeElement.setAttribute("class", `language-${language}`);
                codeElement.innerText = contents;
                Prism.highlightElement(codeElement);
            });
    });
};

Prism.hooks.add("before-highlight", env => {
    env.code = env.element.innerText;
});

SNIPPETS.forEach(({ buttonId, fileName: fileName, language, title }) => {
    addCode(title, buttonId, fileName, language);
});
