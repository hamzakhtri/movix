import React, { useState } from 'react'
import "./style.scss";
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {

    const [query, setQuery] = useState("");
    const [background, setBackground] = useState("");
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

    return (
        <div className='heroBanner'>
            <div className="wrapper">
                <div className="heroBannerContent">
                    <h1>Welcome</h1>
                    <span>
                        Millions of movies, TV shows and people to discover. Explore now.
                    </span>
                </div>
                <div className='searchInput'>
                    <input
                        type="text"
                        placeholder='Search movies and TV shows....'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}

                    />
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner