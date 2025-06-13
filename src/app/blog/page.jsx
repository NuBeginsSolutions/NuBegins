import React from 'react';
import BlogPosts from '../../../components/BlogPosts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/Tabs';
export const metadata = {
  title: "Blogs | Nu Begins - Insights on Web Development, SEO & Digital Marketing",
  description:
    "Discover expert insights and actionable tips on web development, SEO, graphic design, and digital marketing. Stay updated with the latest trends and strategies to grow your business online.",
  keywords: [
    "web development blogs",
    "seo strategies",
    "digital marketing insights",
    "graphic design tips",
    "business growth ideas",
    "online branding",
    "website optimization",
    "startup tips",
    "ecommerce strategies",
    "content marketing blogs",
  ],
  openGraph: {
    title: "Blogs | Nu Begins",
    description:
      "Explore our collection of blogs on web development, SEO, and digital marketing. Get tips and strategies for growing your business online.",
    url: "https://nubegins.in/blog",
    images: [
      {
        url: "https://nubegins.in/default-blog-image.png", // Add your default blog page image
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nubegins.in/blog",
  },
};
const Page = () => {
  return (
    <div className='blogs'>
      
      <main>
        {/* Blog Header */}
        <section className="blog-header">
          <div className="header-content">
            <h4 className="section-subtitle">KNOWLEDGE HUB</h4>
            <h1 className="gradient-text header-title">Tech Blog</h1>
            <p className="header-description">
              Stay updated with the latest trends, tutorials, and insights in technology, 
              web development, design, and digital marketing.
            </p>
          </div>
        </section>
        
        {/* Blog Categories */}
        <section className="blog-categories">
          <Tabs defaultValue="all" className="tabs-container">
              <TabsList className="tabs-list">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="webdev">Web</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Digital Marketing</TabsTrigger>
              </TabsList>
            
            <TabsContent value="all" className="tabs-content">
              <BlogPosts category="all" />
            </TabsContent>
            
            <TabsContent value="webdev" className="tabs-content">
              <BlogPosts category="webdev" />
            </TabsContent>
            
            <TabsContent value="design" className="tabs-content">
              <BlogPosts category="design" />
            </TabsContent>
            
            <TabsContent value="marketing" className="tabs-content">
              <BlogPosts category="marketing" />
            </TabsContent>
          </Tabs>
        </section>
              
      </main>
      
    </div>
  );
};

export default Page;