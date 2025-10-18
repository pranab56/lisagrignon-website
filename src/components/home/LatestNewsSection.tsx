import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import Image from 'next/image';

export default function LatestNewsSection() {
  const newsArticles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&h=600&fit=crop',
      readTime: '10 mins read',
      title: 'Making Waves for a Great Cause: Galway Bay Swim 2025',
      excerpt: 'On Saturday July 10th, a group of courageous swimmers took on one of Ireland\'s toughest open water challenges, a 13km swim across Galway Bay! In support of Cancer Care West. The event fundraised 17% more compared to 2024, with the percentage of fundraising page with donations up 47%.',
      link: '#'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      readTime: '07 mins read',
      title: 'Ring of Kerry Charity Cycle 2025',
      excerpt: 'We are thrilled to celebrate another phenomenal year of the Ring of Kerry Charity Cycle, which took place on Saturday July 5th, 2025. As the official fundraising partner, iDonate.ie is incredibly proud to have supported thousands of amazing cyclists, charities, and supporters in what has become one of Ireland\'s most beloved charity events.',
      link: '#'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop',
      readTime: '13 mins read',
      title: '€6 Million Raised in May 2025. A Record-Breaking Month!',
      excerpt: 'We\'re thrilled to announce that over €6 million was raised through our platform in May 2025, a new monthly fundraising record that reflects the generosity, passion, and commitment of communities across Ireland. total showcases the growing impact of digital fundraising for good causes.',
      link: '#'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop',
      readTime: '08 mins read',
      title: 'iDonate Surpasses €2.2 Million Raised Through the 2025 Vhi Man Mini Marathon.',
      excerpt: 'We\'re thrilled to announce that over €2.2 million has already been raised through iDonate, Official Fundraising Partner for the2025 Vhi Women\'s Mini Marathon! But the story doesn\'t end at the finish line, donations are still ope to show your support.',
      link: '#'
    }
  ];

  return (
    <div className=" py-16 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <div className="flex justify-center">
            <Badge className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 text-base font-medium rounded-lg">
              Blog
              <BookOpen className="ml-2 w-4 h-4" />
            </Badge>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Latest News
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  width={800}
                  height={600}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6 space-y-3">
                {/* Read Time */}
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <button className="text-yellow-500 hover:text-yellow-600 font-semibold text-sm inline-flex items-center group/link">
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold h-12 px-8 text-base rounded-lg transition-all"
          >
            See All
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}