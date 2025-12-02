import { motion } from "framer-motion";
import { Building2, MapPin, Calendar } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";
import internshipsData from "@/data/internships.json";

const Experience = () => {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and internships"
        />

        <div className="space-y-8">
          {internshipsData.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border flex items-center justify-center">
                    <Building2 size={32} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {internship.role}
                      </h3>
                      <p className="text-primary font-medium">{internship.company}</p>
                    </div>
                    <span className="tech-badge">{internship.duration}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{internship.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{internship.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {skill}
                      </span>
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

export default Experience;
