import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";
import educationData from "@/data/education.json";

const Education = () => {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic journey and qualifications"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background animate-glow" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <GraduationCap size={24} />
                    </div>
                    <div className="flex-1">
                      <span className="tech-badge mb-2 inline-block">{edu.year}</span>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-primary font-medium mb-1">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground mb-2">{edu.field}</p>
                      <p className="text-muted-foreground text-sm mb-3">{edu.description}</p>

                      {/* Grade */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-bold gradient-text">{edu.grade}</span>
                      </div>

                      {/* Achievements */}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Award size={14} className="text-primary" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Education;
