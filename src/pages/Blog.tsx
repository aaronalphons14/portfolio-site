import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Heart, ThumbsUp, ThumbsDown } from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";
import blogData from "@/data/blog.json";

const Blog = () => {
  const [reactions, setReactions] = useState<Record<number, { heart: number; like: number; dislike: number }>>({});

  // Load reactions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("blog-reactions");
    if (saved) {
      setReactions(JSON.parse(saved));
    } else {
      // Initialize with default values
      const initial: Record<number, { heart: number; like: number; dislike: number }> = {};
      blogData.forEach((post) => {
        initial[post.id] = { heart: 0, like: 0, dislike: 0 };
      });
      setReactions(initial);
    }
  }, []);

  // Save reactions to localStorage
  const saveReactions = (newReactions: typeof reactions) => {
    localStorage.setItem("blog-reactions", JSON.stringify(newReactions));
    setReactions(newReactions);
  };

  const handleReaction = (postId: number, type: "heart" | "like" | "dislike") => {
    const newReactions = {
      ...reactions,
      [postId]: {
        ...reactions[postId],
        [type]: (reactions[postId]?.[type] || 0) + 1,
      },
    };
    saveReactions(newReactions);
  };

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Blog"
          subtitle="Thoughts, tutorials, and insights on technology"
        />

        <div className="space-y-6">
          {blogData.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="glass-card overflow-hidden hover-lift"
            >
              <div className="md:flex">
                {/* Image placeholder */}
                <div className="md:w-48 h-40 md:h-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">📝</span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="tech-badge">{post.category}</span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    {/* Reactions */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleReaction(post.id, "heart")}
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-red-400 transition-colors"
                      >
                        <Heart size={16} />
                        <span>{reactions[post.id]?.heart || 0}</span>
                      </button>
                      <button
                        onClick={() => handleReaction(post.id, "like")}
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ThumbsUp size={16} />
                        <span>{reactions[post.id]?.like || 0}</span>
                      </button>
                      <button
                        onClick={() => handleReaction(post.id, "dislike")}
                        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-orange-400 transition-colors"
                      >
                        <ThumbsDown size={16} />
                        <span>{reactions[post.id]?.dislike || 0}</span>
                      </button>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-sm text-primary hover:underline"
                    >
                      Read more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Blog;
