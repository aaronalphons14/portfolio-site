import { motion } from "framer-motion";
import { MapPin, Calendar, Coffee, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";
import profileImage from "@/assets/profile-placeholder.jpg";

const facts = [
  { icon: Code, label: "Lines of Code", value: "10k+" },
  { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
  { icon: Calendar, label: "Years Experience", value: "1+" },
  { icon: MapPin, label: "Projects Completed", value: "10+" },
];

const About = () => {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Get to know the person behind the code"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="aspect-square rounded-2xl border border-border overflow-hidden">
              <img 
                src={profileImage} 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 glass-card p-6"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Hello! I'm <span className="gradient-text">Aaron</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              I'm a passionate Full Stack Developer and AI/ML enthusiast building innovative digital solutions. My journey in tech started with a curiosity about 
              how things work, and it has evolved into a career dedicated to creating impactful software.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source 
              projects, or sharing knowledge through technical blogs and community meetups.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {facts.map(({ icon: Icon, label, value }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="glass-card p-6 text-center hover-lift"
            >
              <Icon className="mx-auto mb-3 text-primary" size={28} />
              <p className="text-2xl font-bold gradient-text">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Button variant="neon" size="lg" asChild>
            <Link to="/resume">View My Resume</Link>
          </Button>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default About;
