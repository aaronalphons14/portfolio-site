import { motion } from "framer-motion";
import { Award, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";
import certificatesData from "@/data/certificates.json";

const Certificates = () => {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Certificates"
          subtitle="Professional certifications and credentials"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="glass-card overflow-hidden hover-lift"
            >
              {/* Certificate image placeholder */}
              <div className="relative h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Award size={48} className="text-primary/50" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="tech-badge mb-3 inline-block">{cert.date}</span>
                <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">Issued by {cert.issuer}</p>

                <div className="flex gap-2">
                  <Button variant="neon" size="sm" className="flex-1" asChild>
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} />
                      View
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download size={14} />
                    Download
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Certificates;
