import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import SectionTitle from "@/components/SectionTitle";
import ProjectModal from "@/components/ProjectModal";
import projectsData from "@/data/projects.json";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Projects"
          subtitle="A showcase of my recent work and side projects"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card overflow-hidden cursor-pointer hover-lift group"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {project.category === "AI/ML" && "🤖"}
                  {project.category === "Security" && "🛡️"}
                  {project.category === "AI" && "🧠"}
                  {project.category === "IoT" && "📡"}
                  {project.category === "Web" && "🌐"}
                  {project.category === "Generative AI" && "✨"}
                  {project.category === "Full-Stack" && "⚡"}
                  {!["AI/ML", "Security", "AI", "IoT", "Web", "Generative AI", "Full-Stack"].includes(project.category) && "🚀"}
                </span>
                <div className="absolute top-3 left-3">
                  <span className="tech-badge">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageWrapper>
  );
};

export default Projects;
