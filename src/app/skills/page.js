import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const isVisible = {
  visible: { opacity: 1, scale: 2 },
  hidden: { opacity: 0, scale: 0 },
};

export default function Skills() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-start h-screen mt-8"
    >
      <div className="flex items-center justify-between">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={control}
          variants={isVisible}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col items-start justify-start w-full p-8 m-8"
        >
          <p>Container</p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={control}
          variants={isVisible}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-col items-start justify-start w-full p-8 m-8"
        >
          <p>Container</p>
        </motion.div>
      </div>
    </section>
  );
}
