import React from "react";

function GifList({ gifs }) {
    console.log({gifs});
    return (
        <ul>
            {gifs.map((gif) => (
                <li key={gif.url}>
                    <img src={gif.url} alt="gif" />
                </li>
            ))}
        </ul>
    );
}

export default GifList;