import { motion } from 'framer-motion';

export default function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="bg-background-light dark:bg-background-dark font-display flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold text-primary mb-12"
                >
                    Contact Me
                </motion.h1>
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <div className="flex items-center p-6 bg-white/50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="bg-primary/20 p-3 rounded-lg mr-6">
                                <span className="material-symbols-outlined text-primary">email</span>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Email</h2>
                                <p className="text-gray-600 dark:text-gray-400">aharmanhd16@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center p-6 bg-white/50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="bg-primary/20 p-3 rounded-lg mr-6">
                                <span className="material-symbols-outlined text-primary">phone</span>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Phone</h2>
                                <p className="text-gray-600 dark:text-gray-400">+880 1315 315 449</p>
                            </div>
                        </div>
                        <div className="flex items-center p-6 bg-white/50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="bg-primary/20 p-3 rounded-lg mr-6">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Location</h2>
                                <p className="text-gray-600 dark:text-gray-400">Chittagong, Bangladesh</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="bg-white/50 dark:bg-gray-800 p-8 rounded-lg shadow-sm"
                        variants={itemVariants}
                    >
                        <form action="#" className="space-y-6" method="POST">
                            <div>
                                <label className="sr-only" htmlFor="name">Your Name</label>
                                <input
                                    className="w-full bg-gray-200 dark:bg-gray-900 border-2 border-transparent focus:border-primary focus:ring-0 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 rounded-lg py-3 px-4 transition-colors"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="email">Your Email</label>
                                <input
                                    className="w-full bg-gray-200 dark:bg-gray-900 border-2 border-transparent focus:border-primary focus:ring-0 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 rounded-lg py-3 px-4 transition-colors"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    type="email"
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="message">Your Message</label>
                                <textarea
                                    className="w-full bg-gray-200 dark:bg-gray-900 border-2 border-transparent focus:border-primary focus:ring-0 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 rounded-lg py-3 px-4 transition-colors"
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                ></textarea>
                            </div>
                            <div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-all duration-300 ease-in-out"
                                    type="submit"
                                >
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
