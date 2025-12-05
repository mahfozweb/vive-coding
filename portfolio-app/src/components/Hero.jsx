import { motion } from 'framer-motion';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="font-display bg-background-dark text-slate-300 antialiased">
            <main className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-900/30 rounded-full blur-2xl"
                    ></motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-900/30 rounded-full blur-3xl"
                    ></motion.div>
                    <div className="absolute top-10 right-1/3 w-24 h-24 bg-teal-900/30 rounded-full opacity-50 blur-2xl"></div>
                    <div className="absolute bottom-10 left-1/3 w-36 h-36 bg-indigo-900/30 rounded-full opacity-50 blur-3xl"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            className="flex flex-col gap-6 text-center lg:text-left"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                                <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-semibold">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Available for work
                                </span>
                            </motion.div>
                            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                Junior Frontend <br />
                                <span className="text-primary">Developer</span>
                            </motion.h1>
                            <motion.p variants={itemVariants} className="text-base md:text-lg max-w-lg mx-auto lg:mx-0">
                                Skilled in React.js and modern JavaScript, passionate about
                                building clean, responsive, and user-friendly web interfaces.
                            </motion.p>
                            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-8 sm:gap-12 mt-4">
                                <div>
                                    <p className="text-3xl font-bold text-blue-400">10+</p>
                                    <p className="text-sm text-slate-400">Projects</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-blue-400">5+</p>
                                    <p className="text-sm text-slate-400">Technologies</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-blue-400">0</p>
                                    <p className="text-sm text-slate-400">Clients</p>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center justify-center gap-2"
                                >
                                    View My Work
                                    <span className="material-symbols-outlined !text-xl">arrow_right_alt</span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-transparent border border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary/10"
                                >
                                    Download Resume
                                </motion.button>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="relative flex justify-center lg:justify-end"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                                <img
                                    alt="Portrait of a young man wearing a white cap and traditional shirt."
                                    className="w-full h-full object-cover rounded-full"
                                    src="https://i.ibb.co.com/rfQ1VvJm/300-300.jpg"
                                />
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                                    className="absolute top-8 -left-8 sm:top-12 sm:-left-12"
                                >
                                    <span className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                        <span className="material-symbols-outlined">hub</span>
                                        React
                                    </span>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                                    className="absolute bottom-1/2 left-0 transform translate-y-1/2 -translate-x-12 sm:-translate-x-16"
                                >
                                    <span className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                        <span className="material-symbols-outlined">design_services</span>
                                        Design
                                    </span>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                                    className="absolute bottom-8 -right-4 sm:bottom-12 sm:-right-8"
                                >
                                    <span className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                                        <span className="material-symbols-outlined">bolt</span>
                                        Fast
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </section>
    );
}
