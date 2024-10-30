import React, { useState } from 'react'
import banner from '../..//images/banner1.jpg'
import { FaRegBookmark, FaBookmark, FaShareAlt } from "react-icons/fa";

const BlogCard = () => {
    const [isBookmarked, setIsBookmarked] = useState(false)
    return (
        <div className="blog-component-card">
            <div className="card">
                <div className="card-image">
                    <img
                        src={banner}
                        alt="Land Z Blog"
                    />
                </div>
                <div className="card-content">
                    <h3>Unlocking the Secrets of Land Zoning: What Every Buyer Should Know</h3>
                    <p>
                        Discover the essential insights into land zoning to make informed decisions
                        and navigate the land buying process with confidence.
                    </p>
                </div>
                <div className="card-footer">
                    <div className="card-author-data">
                        <span className="author">Author Name</span>
                        <span className="read-time">2 min read</span>
                    </div>
                    <div className="card-actions">
                        <button
                            className="bookmark-btn"
                            onClick={(e) => isBookmarked ? setIsBookmarked(false) : setIsBookmarked(true)}
                        >{isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
                        </button>
                        <button className="share-btn"><FaShareAlt /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard