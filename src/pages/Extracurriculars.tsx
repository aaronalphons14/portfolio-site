import { motion } from "framer-motion";
import { Calendar, Star, Image as ImageIcon } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";
import extracurricularsData from "@/data/extracurriculars.json";

const Extracurriculars = () => {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Extracurricular Activities"
          subtitle="Leadership, coordination, and hands-on contributions beyond the classroom"
        />

        <div className="space-y-8">
          {extracurricularsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.15 }}
              className="glass-card overflow-hidden hover-lift"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                {item.image ? (
                  <div className="md:w-72 flex-shrink-0">
                    <div className="relative h-56 md:h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60 hidden md:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:hidden" />
                    </div>
                  </div>
                ) : (
                  <div className="md:w-72 flex-shrink-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-border/30">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-3 text-4xl shadow-glow">
                        {item.icon}
                      </div>
                      <span className="tech-badge">{item.role}</span>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-xs text-muted-foreground">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {item.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.15 + i * 0.08 }}
                        className="flex items-start gap-2"
                      >
                        <Star
                          size={12}
                          className="text-primary mt-1 flex-shrink-0"
                          fill="currentColor"
                        />
                        <span className="text-xs text-muted-foreground">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Extracurriculars;
