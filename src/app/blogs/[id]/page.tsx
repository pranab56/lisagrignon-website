"use client";

import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';

// Define the shape of a related post for clarity
interface RelatedPost {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export default function BlogDetailPage() {
  const relatedPosts: RelatedPost[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&q=80",
      title: "Making Waves for a Great Cause: Galway Bay Swim 2025",
      excerpt: "On Saturday July 19th, a group of courageous swimmers took on one of Ireland's toughest open water challenges...",
      readTime: "10 mins read"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&q=80",
      title: "Making Waves for a Great Cause: Galway Bay Swim 2025",
      excerpt: "On Saturday July 19th, a group of courageous swimmers took on one of Ireland's toughest open water challenges...",
      readTime: "10 mins read"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&q=80",
      title: "Making Waves for a Great Cause: Galway Bay Swim 2025",
      excerpt: "On Saturday July 19th, a group of courageous swimmers took on one of Ireland's toughest open water challenges...",
      readTime: "10 mins read"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=400&q=80",
      title: "Making Waves for a Great Cause: Galway Bay Swim 2025",
      excerpt: "On Saturday July 19th, a group of courageous swimmers took on one of Ireland's toughest open water challenges...",
      readTime: "10 mins read"
    }
  ];

  return (
    <div className="">
      {/* Header Navigation - Uses max-w-4xl mx-auto for mobile and desktop consistency */}
      <header className="bg-[#00715D] py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="link"
            className="text-white hover:bg-transparent p-0 inline-flex items-center gap-1" // Added items-center and gap-1 for alignment
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div className="mt-2">
            <p className="text-teal-200 text-sm">Ring of Kerry Charity Cycle 2025</p>
          </div>
        </div>
      </header>

      {/* Main Content - max-w-4xl mx-auto handles centering and max width */}
      <main className="max-w-4xl mx-auto px-4 py-8">

        {/* Hero Image */}
        <div className="mb-8 relative w-full h-64 md:h-96 lg:h-[400px]"> {/* Adjusted height for responsiveness */}
          <Image
            src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1200&q=80"
            alt="Cyclists at charity event"
            fill
            className="rounded-lg object-cover"
            priority
            // Improved sizes attribute for responsive image loading
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Article Header & Content */}
        {/* `prose prose-lg max-w-none` ensures text content is well-formatted and uses full available width of the container */}
        <article className="prose prose-lg max-w-none">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              A Triumph of Community, Determination, and Stewardship
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>July 6, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>8 mins read</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The Ring of Kerry Charity Cycle 2025 was more than just an event—it was a celebration of resilience, community spirit, and the power of collective action. Held on a beautiful summer day, this year&apos;s cycle brought together thousands of participants, volunteers, and supporters, all united by a common goal: to make a difference.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              A Day of Determination
            </h2>

            <p>
              As dawn broke over the stunning Kerry landscape, cyclists from all walks of life gathered at the starting line. Some were seasoned athletes, others first-time participants, but all shared the same determination to complete the challenging 179km route around one of Ireland&apos;s most scenic regions.
            </p>

            <p>
              The atmosphere was electric. Supporters lined the streets, cheering on the riders as they embarked on their journey. Along the route, volunteers stood ready with refreshments, encouragement, and mechanical support, ensuring that every participant felt valued and supported.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Community at Its Best
            </h2>

            <p>
              What truly set this year&apos;s event apart was the overwhelming sense of community. Local businesses opened their doors to participants, offering food, water, and rest stops. Residents came out in force, turning the Ring of Kerry into a ribbon of encouragement and goodwill.
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Over 10,000 cyclists participated in the event</li>
              <li>More than 500 volunteers dedicated their time</li>
              <li>Local businesses provided support along the route</li>
              <li>Communities came together to cheer on participants</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Making a Real Impact
            </h2>

            <p>
              The funds raised from this year&apos;s cycle will go directly to supporting vital services across Kerry and beyond. From healthcare initiatives to community development projects, the impact of this event will be felt for years to come.
            </p>

            <p>
              This year&apos;s Ring of Kerry Charity Cycle raised over €1.2 million, surpassing all previous records. This incredible achievement is a testament to the generosity of participants, sponsors, and supporters.
            </p>

            {/* Additional Images (Using flex-col by default and larger on md:screens) */}
            <div className="space-y-6 my-8 grid grid-cols-1 md:grid-cols-2 md:gap-6">
              {/* Image 1 */}
              <div className="relative w-full h-[300px] md:h-full md:aspect-video">
                <Image
                  src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&q=80"
                  alt="Group photo of cyclists"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Image 2 (Full width on mobile, 1/2 on tablet/desktop) */}
              <div className="relative w-full h-[300px] md:h-full md:aspect-video">
                <Image
                  src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1200&q=80"
                  alt="Cyclists interacting"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Image 3 (Making this one span two columns on tablet/desktop for variety) */}
              <div className="relative w-full h-[300px] md:h-[400px] md:col-span-2">
                <Image
                  src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1200&q=80"
                  alt="Large group of participants"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Looking Ahead
            </h2>

            <p>
              As we reflect on the success of the Ring of Kerry Charity Cycle 2025, we&apos;re already looking forward to next year. Plans are underway to make the event even bigger and better, with new routes, enhanced support, and more opportunities for community involvement.
            </p>

            <p>
              Whether you&apos;re a seasoned cyclist or just starting out, we invite you to join us next year. Together, we can continue to make a difference, one pedal stroke at a time.
            </p>

            <div className="bg-teal-50 border-l-4 border-teal-700 p-6 my-8">
              <p className="text-gray-700 italic">
                &ldquo;The Ring of Kerry Charity Cycle is more than just a fundraiser—it&apos;s a celebration of what we can achieve when we work together as a community.&rdquo; - Event Organizer
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* Related Posts Section */}
      <section className="bg-gray-50 py-16 px-4 mt-16">
        {/* Use max-w-7xl for the related posts to allow them to spread out more on large screens */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>

          {/* Responsive Grid for Related Posts: 
            - grid-cols-1: Mobile
            - md:grid-cols-2: Tablet/Small Laptop
            - lg:grid-cols-3: Laptop/Desktop
            - xl:grid-cols-4: Large Desktop 
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-3">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <a
                    href="#"
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