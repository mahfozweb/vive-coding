import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [open, setOpen] = useState(false);

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <header
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm dark:shadow-slate-800"
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">
                        <a href="#">Mahfozul Hoque</a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a className="text-primary font-semibold" href="#">Home</a>
                        <a
                            className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                            href="#"
                        >About</a>
                        <a
                            className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                            href="#"
                        >Skills</a>
                        <a
                            className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                            href="#"
                        >Projects</a>
                        <a
                            className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                            href="#"
                        >Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-slate-700 dark:text-slate-300 focus:outline-none"
                        >
                            {!open ? (
                                <span className="material-symbols-outlined text-3xl">menu</span>
                            ) : (
                                <span className="material-symbols-outlined text-3xl">close</span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            className="md:hidden mt-4 overflow-hidden"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                        >
                            <a className="block py-2 text-primary font-semibold" href="#">Home</a>
                            <a
                                className="block py-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                                href="#"
                            >About</a>
                            <a
                                className="block py-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                                href="#"
                            >Skills</a>
                            <a
                                className="block py-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                                href="#"
                            >Projects</a>
                            <a
                                className="block py-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                                href="#"
                            >Contact</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
