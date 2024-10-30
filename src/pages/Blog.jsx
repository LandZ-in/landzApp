import React from 'react'
import { GoSearch } from "react-icons/go";
import { CgOptions } from "react-icons/cg";
import BlogCard from '../components/Blog/BlogCard';
import SubscribeNewsletter from '../components/Blog/SubscribeNewsletter';

const Blog = () => {
    return (
        <section className='blog-section'>
            <div className="top-heading-bar">
                <h1>Insights & Inspirations</h1>
                <p>Explore our blog for expert tips, real estate trends, and inspiring stories, guiding you through
                    the art of buying and selling land</p>

                <div className="heading-search-bar">
                    <div className="filter-search-input">
                        <input type="text" placeholder='Search'/>
                        <GoSearch className='search-icon' />
                    </div>

                    <button type='filter'><CgOptions /> Filter</button>

                </div>
            </div>


            <section className="card-section">

                <h2>Latest Articles</h2>
                <div className="blog-card">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </section>

            <section className='footer-newsletter-section'>
                <SubscribeNewsletter />
            </section>
        </section>
    )
}

export default Blog