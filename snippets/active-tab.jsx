const TABS = [
    { id: "tab1", title: "First tab", body: "Contents of the first tab" },
    { id: "tab2", title: "Second tab", body: "Contents of the second tab" },
    { id: "tab3", title: "Third tab", body: "Contents of the third tab" }
];

const TabsView = () => {
    const [activeTab, setActiveTab] = useState();

    return (
        <>
            <aside>
                <ul>
                    {TABS.map(tab => (
                        <li>
                            <button onClick={() => setActiveTab(tab)}>
                                {tab.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
            <main>
                <h3>{activeTab.title}</h3>
                <p>{activeTab.body}</p>
            </main>
        </>
    );
};
