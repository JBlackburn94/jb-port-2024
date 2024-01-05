import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex items-center justify-between h-screen p-40"
    >
      <motion.div className="p-10 rounded-lg bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50">
        Skills 1
      </motion.div>
      <motion.div className="p-10 rounded-lg bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50">
        Skills 2
      </motion.div>
    </section>
  );
}
