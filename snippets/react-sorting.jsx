import React from "react";

const CitiesView = () => {
    const cities = ["Kyiv", "Lviv", "Odesa", "Kharkiv", "Dnipro", "Lutsk", "Poltava"];

    const sortAsc = () => {
        cities.sort();
    }

    const sortDesc = () => {
        cities.sort((itemA, itemB) => itemB.localeCompare(itemA));
    };

    return (
        <>
            <div>
                <span>Sort:</span>
                <button onClick={sortAsc}>asc</button>
                <button onClick={sortDesc}>desc</button>
            </div>
            <ul>
                {cities.map(city => <li key={city}>{city}</li>)}
            </ul>
        </>
    );
};
