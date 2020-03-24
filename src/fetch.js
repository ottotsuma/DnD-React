import React, {useState, useEffect} from 'react';
import './App.css';
// import {link} from 'react-router-dom';
import axios from 'axios';
import Posts from './monsters.js';
import Pagination from "./Pagination.js";

function Monster () {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState([1]);
    const [postsPerPage] =useState(50);

    useEffect (() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(' https://api.open5e.com/monsters/?limit=1086'); 
            // change api limit 1086
            console.log(res);
            setItems(res.data.results);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // const fetchMonsters = async () => {
    //     const data = await fetch('https://api.open5e.com/monsters/?format=json');
    //     const items = await data.json();
    //     console.log(items);
    //     setItems(items.results);
    // } 
    return (
    <div>
        <h1>Monsters</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate}/>
    </div>
    );
};

  {/* {items.map(results => (
            <div>
                <h1 key={results.slug}>
                        {results.name}
                </h1> */}
                

{/* <link to={`/${results.slug}`}></link> */}

export default Monster;

// https://api.open5e.com/monsters/?format=json