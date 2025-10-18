"use client";

import { Clock } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface BlogPost {
  id: number;
  image: string;
  readTime: string;
  title: string;
  excerpt: string;
  link: string;
}

export default function BlogSection() {

  const router = useRouter();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80",
      readTime: "10 mins read",
      title: "Making Waves for a Great Cause: Galway Bay Swim 2025",
      excerpt: "On Saturday July 19th, a group of courageous swimmers took on one of Ireland's toughest open water challenges, a13km swim across Galway Bay.all in support of Cancer Care West. The event fundraised 17% more compared to 2024, with the percentage of fundraising pages with donations up 17%.",
      link: "#"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80",
      readTime: "10 mins read",
      title: "Making Waves for a Great Cause: Galway Bay Swim 2025",
      excerpt: "On Saturday July 19th, a group of courageous swimmers took on one of Ireland's toughest open water challenges, a13km swim across Galway Bay.all in support of Cancer Care West. The event fundraised 17% more compared to 2024, with the percentage of fundraising pages with donations up 17%.",
      link: "#"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80",
      readTime: "10 mins read",
      title: "Making Waves for a Great Cause: Galway Bay Swim 2025",
      excerpt: "On Saturday July 19th, a group of courageous swimmers took on one of Ireland's toughest open water challenges, a13km swim across Galway Bay.all in support of Cancer Care West. The event fundraised 17% more compared to 2024, with the percentage of fundraising pages with donations up 17%.",
      link: "#"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80",
      readTime: "10 mins read",
      title: "Making Waves for a Great Cause: Galway Bay Swim 2025",
      excerpt: "On Saturday July 19th, a group of courageous swimmers took on one of Ireland's toughest open water challenges, a13km swim across Galway Bay.all in support of Cancer Care West. The event fundraised 17% more compared to 2024, with the percentage of fundraising pages with donations up 17%.",
      link: "#"
    }
  ];

  const handlePostClick = (post: BlogPost) => {
    console.log('Post clicked:', post);
    // You should ensure this route is correct for your Next.js application
    router.push(`/blogs/${post.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Blogs Badge */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-900 rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-sm font-medium">Blogs</span>
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Stay Updated with the Latest News at RaffleRise
          </h1>

          {/* Description Paragraphs */}
          <div className="max-w-4xl mx-auto space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              RaffleRise, we&apos;re not just about providing cutting-edge tools for charities and fundraisers—we&apos;re about creating meaningful change in communities across Ireland. Our news page is your go-to source for the latest updates on fundraising milestones, innovative features, and inspiring stories from the charities we support.
            </p>
            <p>
              From event highlights and case studies to platform enhancements that make giving easier, we&apos;re committed to helping organisations maximise their impact. Explore how iDonate continues to evolve, empowering charities and individuals to raise more and do more for the causes that matter most.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* RESPONSIVENESS IS ACHIEVED HERE:
            - grid-cols-1: Mobile (default)
            - md:grid-cols-2: Tablet/Small Laptop
            - lg:grid-cols-3: Laptop/Desktop
            - xl:grid-cols-4: Large Desktop
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handlePostClick(post)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    // Improved sizes attribute for better image performance
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Read Time */}
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  {/* Using an anchor tag inside the clickable article is generally fine, but if the whole card handles navigation, you might consider making the "Read More" button a primary focus inside the onClick handler or removing the nested <a>. */}
                  <a
                    href={post.link}
                    onClick={(e) => {
                      // Prevents the article's onClick from triggering if the link is clicked
                      e.stopPropagation();
                      router.push(`/blogs/${post.id}`);
                    }}
                    className="text-orange-500 text-sm font-medium hover:text-orange-600 transition-colors inline-flex items-center"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}