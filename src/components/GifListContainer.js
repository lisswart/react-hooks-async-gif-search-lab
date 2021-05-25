import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState("dolphins");

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=UoN7oO02fP3ijVVz40zlaT44lyTZ5AdG&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(({ data }) => {
                const gifs = data.map((gif) => ({ url: gif.images.original.url }));
                setGifs(gifs);
                console.log(gifs);
            });
    }, [query]);

    return (
        <div style={{ display: "flex" }}>
            <GifList gifs={gifs} />
            <GifSearch onSubmitQuery={setQuery} />
        </div>
    );
}

export default GifListContainer;