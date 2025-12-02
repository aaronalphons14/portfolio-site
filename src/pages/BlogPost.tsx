import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Heart, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import blogData from "@/data/blog.json";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === Number(id));
  const [reactions, setReactions] = useState({ heart: 0, like: 0, dislike: 0 });

  useEffect(() => {
    const saved = localStorage.getItem("blog-reactions");
    if (saved && post) {
      const allReactions = JSON.parse(saved);
      setReactions(allReactions[post.id] || { heart: 0, like: 0, dislike: 0 });
    }
  }, [post]);

  const handleReaction = (type: "heart" | "like" | "dislike") => {
    if (!post) return;
    const saved = localStorage.getItem("blog-reactions");
    const allReactions = saved ? JSON.parse(saved) : {};
    const newReactions = {
      ...allReactions,
      [post.id]: {
        ...allReactions[post.id],
        [type]: (allReactions[post.id]?.[type] || 0) + 1,
      },
    };
    localStorage.setItem("blog-reactions", JSON.stringify(newReactions));
    setReactions(newReactions[post.id]);
  };

  if (!post) {
    return (
      <PageWrapper>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Button variant="neon" asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild>
            <Link to="/blog">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tech-badge">{post.category}</span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
        </motion.header>

        {/* Featured image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-8"
        >
          <span className="text-6xl">📝</span>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert max-w-none mb-8"
        >
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index} className="text-muted-foreground mb-4">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Reactions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 flex items-center justify-center gap-6"
        >
          <span className="text-muted-foreground">Was this helpful?</span>
          <button
            onClick={() => handleReaction("heart")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-red-400/20 text-muted-foreground hover:text-red-400 transition-all"
          >
            <Heart size={18} />
            <span>{reactions.heart}</span>
          </button>
          <button
            onClick={() => handleReaction("like")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
          >
            <ThumbsUp size={18} />
            <span>{reactions.like}</span>
          </button>
          <button
            onClick={() => handleReaction("dislike")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-orange-400/20 text-muted-foreground hover:text-orange-400 transition-all"
          >
            <ThumbsDown size={18} />
            <span>{reactions.dislike}</span>
          </button>
        </motion.div>
      </article>
    </PageWrapper>
  );
};

export default BlogPost;
