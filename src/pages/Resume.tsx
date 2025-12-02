import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";

const Resume = () => {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Resume"
          subtitle="View and download my professional resume"
        />

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Button variant="neon" size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download size={18} />
              Download Resume
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} />
              Open in New Tab
            </a>
          </Button>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card overflow-hidden"
        >
          <div className="aspect-[8.5/11] bg-muted/50 flex flex-col items-center justify-center">
            {/* PDF embed - replace with actual PDF */}
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <FileText size={64} className="text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Resume Preview
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Your browser doesn't support embedded PDFs. Please download the resume
                  to view it.
                </p>
                <Button variant="neon" asChild>
                  <a href="/resume.pdf" download>
                    <Download size={16} />
                    Download PDF
                  </a>
                </Button>
              </div>
            </object>
          </div>
        </motion.div>

        {/* Instructions note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          {/* REPLACE: Add your resume.pdf to the public folder */}
          Note: Replace public/resume.pdf with your actual resume file.
        </motion.p>
      </div>
    </PageWrapper>
  );
};

export default Resume;
