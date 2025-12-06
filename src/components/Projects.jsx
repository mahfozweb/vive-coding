import { motion } from 'framer-motion';
import BackgroundElements from './BackgroundElements';

export default function Projects() {
    const projects = [
        {
            title: "KrishiLink",
            description: "A Smart Agricultural Marketplace for Buying, Selling, and Sharing Crop Insights.",
            image: "https://i.ibb.co.com/gb6NHzxq/krishi.png",
            tags: ["React", "JavaScript", "Mongodb", "Express", "TailwindCSS",],
            liveLink: "https://young-romahfoz123d.surge.sh/",
            gitLink: "https://github.com/mahfozweb/assignment-krishi-client.git"
        },
        {
            title: "Hero Apps",
            description: "Hero Apps is a small, user-friendly web platform that allows users to browse, download, and manage apps easily. ",
            image: "https://i.ibb.co.com/KcfTMH8K/hero.png",
            tags: ["React", "CSS", "HTML5", "TailwindCSS"],
            liveLink: "http://nappy-needlmahfoz12345e.surge.sh/",
            gitLink: "https://github.com/mahfozweb/web-assignment-hero-apps-eight.git"
        },
        {
            title: "Nature Plant Booking Web Application",
            description: "Users can browse plants, view detailed information, register/login, and manage their profiles.",
            image: "https://i.ibb.co.com/LhYZVWJP/nine.png",
            tags: ["React", "Firebase", "MongoDB", "TailwindCSS"],
            liveLink: "http://assignment-nine-mahfoz-3201.surge.sh/",
            gitLink: "https://github.com/mahfozweb/web-assignment-nine.git"
        },

    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9, filter: "blur(5px)" },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="projects" className="bg-background-dark font-display relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
            <BackgroundElements />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 text-center mb-16"
                >
                    My Projects
                </motion.h1>

                <motion.div
                    className="flex flex-wrap justify-center gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50 flex flex-col h-full w-full md:w-[calc(50%-1rem)] xl:w-[calc(25%-1.5rem)]"
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    alt={`Screenshot of the ${project.title} project`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    src={project.image}
                                />
                                {/* Overlay with Buttons */}
                                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium shadow-lg shadow-primary/30"
                                    >
                                        <span className="material-symbols-outlined text-sm">link</span>
                                        <span>Live Link</span>
                                    </motion.a>
                                    <motion.a
                                        href={project.gitLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-600 transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-sm">code</span>
                                        <span>Github Link</span>
                                    </motion.a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors">{project.title}</h2>
                                <p className="text-slate-400 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
