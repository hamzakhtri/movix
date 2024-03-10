import React, { useEffect, useState } from 'react'
import "./style.scss";
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {

    const [query, setQuery] = useState("");
    const [background, setBackground] = useState("");
    const { backdrop } = useSelector((state) => state.home.url);
    const navigate = useNavigate();

    const { data, loading } = useFetch("/movie/upcoming");

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

    useEffect(() => {

        const bg = backdrop + data?.results[Math.floor(Math.random() * 19)]?.backdrop_path;
        setBackground(backdrop + bg);
        console.log(bg);

    }, [data])

    return (
        <div className='heroBanner'>
            {!loading &&
                <div className="backdrop-img">
                    <Img src={background} />
                </div>}

            <div className="opacity-layer"></div>

            <ContentWrapper>
                <div className="heroBannerContent">
                    <h1 className='title'>Welcome.</h1>
                    <span className='sub-title'>
                        Millions of movies, TV shows and people to discover. Explore now.
                    </span>
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
            </ContentWrapper>
        </div >
    )
}

export default HeroBanner