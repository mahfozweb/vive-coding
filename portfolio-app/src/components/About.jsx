import { motion } from 'framer-motion';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="bg-background-light dark:bg-background-dark font-display">
            <div className="flex items-center justify-center min-h-[50vh]">
                <motion.section
                    className="w-full max-w-4xl p-8 md:p-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="space-y-6">
                        <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-primary">About Me</motion.h2>
                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
                            I'm a Front-End Developer who loves building responsive and interactive web applications. I focus on clean design, modern UI, and user-friendly experiences.
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
                            {['HTML5', 'CSS3', 'JavaScript', 'React', 'TailwindCSS', 'UI/UX Design'].map((skill, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                                    }}
                                    whileHover={{ scale: 1.1, borderColor: "#9333ea", color: "#9333ea" }}
                                    className="px-4 py-2 text-sm font-medium border border-primary rounded-full text-gray-800 dark:text-gray-200 cursor-default transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </section>
    );
}
