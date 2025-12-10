import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface NewsPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: any;
  body: any[];
}

async function getNews() {
  const query = `*[_type == "newsPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    body
  }`;
  return client.fetch(query);
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-oswald font-bold uppercase tracking-tighter text-retro-red mb-12 text-center">
          News / 新闻动态
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((post: NewsPost) => (
            <div key={post._id} className="bg-white border border-retro-black/10 hover:border-retro-red transition-all duration-300 group">
              {post.mainImage && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={urlForImage(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-sm font-mono text-retro-black/60 mb-2">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <h2 className="text-2xl font-oswald font-bold uppercase mb-4 group-hover:text-retro-red transition-colors">
                  {post.title}
                </h2>
                {/* You can add a 'Read More' link here if you create a detailed view */}
              </div>
            </div>
          ))}
        </div>
        
        {news.length === 0 && (
          <p className="text-center text-xl font-mono text-retro-black/60">
            暂无新闻。请稍后回来查看！<br/>
            (No news yet. Check back later!)
          </p>
        )}
      </div>
    </div>
  );
}
