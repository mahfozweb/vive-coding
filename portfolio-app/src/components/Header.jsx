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
            className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800"
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">
                        <a href="#home">Mahfozul Hoque</a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a className="text-primary font-semibold" href="#home">Home</a>
                        <a
                            className="text-slate-300 hover:text-primary transition-colors duration-200"
                            href="#about"
                        >About</a>
                        <a
                            className="text-slate-300 hover:text-primary transition-colors duration-200"
                            href="#skills"
                        >Skills</a>
                        <a
                            className="text-slate-300 hover:text-primary transition-colors duration-200"
                            href="#projects"
                        >Projects</a>
                        <a
                            className="text-slate-300 hover:text-primary transition-colors duration-200"
                            href="#contact"
                        >Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-slate-300 focus:outline-none"
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
                            <a className="block py-2 text-primary font-semibold" href="#home">Home</a>
                            <a
                                className="block py-2 text-slate-300 hover:text-primary transition-colors duration-200"
                                href="#about"
                            >About</a>
                            <a
                                className="block py-2 text-slate-300 hover:text-primary transition-colors duration-200"
                                href="#skills"
                            >Skills</a>
                            <a
                                className="block py-2 text-slate-300 hover:text-primary transition-colors duration-200"
                                href="#projects"
                            >Projects</a>
                            <a
                                className="block py-2 text-slate-300 hover:text-primary transition-colors duration-200"
                                href="#contact"
                            >Contact</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
