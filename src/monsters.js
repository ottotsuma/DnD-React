import React from 'react';
import {Link} from 'react-router-dom';

const Posts = ({posts, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return ( <ul className="monster-ul">
        {posts.map(post => (
            <div className="monster-list">
            <li className="monster-list-name" key={posts.id}>
                <Link to={post.slug}>{post.name}</Link>
            </li>
            <li className="monster-list-alignment" key={posts.id}>
                {post.alignment}
            </li>
            <li className="monster-list-type" key={posts.id}>
                {post.type} 
            </li>
            </div>
        ))}
    </ul>
    );
}

export default Posts; 