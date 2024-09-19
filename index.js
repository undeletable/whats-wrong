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
        buttonId: "component-error",
        fileName: "component-error.jsx",
        language: "jsx",
        title: "Component error"
    },
    {
        buttonId: "constructor",
        fileName: "constructor.js",
        language: "javascript",
        title: "Constructor"
    },
    {
        buttonId: "continue",
        fileName: "continue.js",
        language: "javascript",
        title: "continue"
    },
    {
        buttonId: "event-listener",
        fileName: "event-listener.js",
        language: "javascript",
        title: "Event listener"
    },
    {
        buttonId: "fetch",
        fileName: "fetch.js",
        language: "javascript",
        title: "fetch"
    },
    {
        buttonId: "finally",
        fileName: "finally.js",
        language: "javascript",
        title: "finally"
    },
    {
        buttonId: "for-of",
        fileName: "for-of.js",
        language: "javascript",
        title: "for...of"
    },
    {
        buttonId: "includes",
        fileName: "includes.js",
        language: "javascript",
        title: "includes"
    },
    {
        buttonId: "json-parse",
        fileName: "json-parse.js",
        language: "javascript",
        title: "JSON.parse"
    },
    {
        buttonId: "localstorage",
        fileName: "localstorage.js",
        language: "javascript",
        title: "localStorage"
    },
    {
        buttonId: "nan",
        fileName: "nan.js",
        language: "javascript",
        title: "NaN"
    },
    {
        buttonId: "numbers-sorting",
        fileName: "numbers-sorting.js",
        language: "javascript",
        title: "Numbers sorting"
    },
    {
        buttonId: "promise",
        fileName: "promise.js",
        language: "javascript",
        title: "Promise"
    },
    {
        buttonId: "react-sorting",
        fileName: "react-sorting.jsx",
        language: "jsx",
        title: "React sorting"
    },
    {
        buttonId: "ref",
        fileName: "ref.jsx",
        language: "jsx",
        title: "Ref"
    }
];

const SNIPPETS_PATH = "./snippets";

const addCode = (title, buttonId, fileName, language) => {
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("id", buttonId);
    buttonElement.innerText = title;
    document.getElementById("buttons").appendChild(buttonElement);
    buttonElement.addEventListener("click", () => {
        fetch(`${SNIPPETS_PATH}/${fileName}`)
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
