import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";

const NotFound = () => {
  return (
    <PageWrapper className="flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="neon" asChild>
              <Link to="/">
                <Home size={18} />
                Go Home
              </Link>
            </Button>
            <Button variant="glass" onClick={() => window.history.back()}>
              <ArrowLeft size={18} />
              Go Back
            </Button>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
