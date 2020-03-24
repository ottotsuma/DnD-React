import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumebrs =[];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumebrs.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumebrs.map(number => (
                    <li key={number} className="pageItem">
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination