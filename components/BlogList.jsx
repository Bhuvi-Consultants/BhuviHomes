"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {

    const fetchBlogs = async () => {
      try {
        const data = await axios.get("/api/v1/blogs/public");
        console.log(data.data)
        setBlogs(data.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }}
      fetchBlogs();
  }, []);
  console.log(blogs)
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs?.map((blog, index) => (
            <article
              key={index}
              className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              <Link
                to={`/blog/${blog?.slug}`}
                className="block overflow-hidden"
                aria-label={`Read more about ${blog?.title}`}
              >
                <img
                  src={blog?.featureImage?.secure_url}
                  alt={blog?.title}
                  loading="lazy"
                  className="w-full h-60 object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <div className="p-6">
                <span className="inline-block mb-3 text-xs font-semibold text-leaf bg-leaf/10 px-3 py-1 rounded-full">
                  {blog?.category}
                </span>

                <h2 className="text-lg font-semibold leading-snug mb-3">
                  <Link
                    to={`/blog/${blog?.slug}`}
                    className="hover:text-leaf transition"
                    aria-label={`Read more about ${blog?.title}`}
                  >
                    {blog?.title}
                  </Link>
                </h2>

                <p className="text-sm text-gray-700 mb-5 line-clamp-3">
                  {blog?.shortDescription}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(blog?.createdAt).toDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {blog?.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
