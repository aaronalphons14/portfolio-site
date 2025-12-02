import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h1 className="section-title">{title}</h1>
      {subtitle && <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionTitle;
