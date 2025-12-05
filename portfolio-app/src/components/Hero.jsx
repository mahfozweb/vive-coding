import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef1 = useRef(null);
    const buttonRef2 = useRef(null);

    useEffect(() => {
        // Text Animation using GSAP
        const textElement = textRef.current;
        if (textElement) {
            const words = textElement.innerText.split(' ');
            textElement.innerHTML = '';
            words.forEach((word, wordIndex) => {
                const wordSpan = document.createElement('span');
                wordSpan.style.display = 'inline-block';
                wordSpan.style.marginRight = '0.3em'; // Space between words

                const chars = word.split('');
                chars.forEach(char => {
                    const span = document.createElement('span');
                    span.innerText = char;
                    span.style.display = 'inline-block';
                    span.style.opacity = '0'; // Initial state
                    wordSpan.appendChild(span);
                });
                textElement.appendChild(wordSpan);
            });

            // Select all char spans
            const charSpans = textElement.querySelectorAll('span span');

            const tl = gsap.timeline();
            tl.to(charSpans, {
                opacity: 1,
                y: 0,
                rotateX: 0,
                stagger: 0.02,
                duration: 1,
                ease: "power4.out",
                startAt: { y: 100, rotateX: -90 }
            });
        }

        // Magnetic Button Effect
        const buttons = [buttonRef1.current, buttonRef2.current];

        buttons.forEach(btn => {
            if (!btn) return;

            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });

    }, []);

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
        <section ref={heroRef} className="font-display bg-background-dark text-slate-300 antialiased overflow-hidden relative">
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-900/30 rounded-full blur-2xl"
                ></motion.div>
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, -40, 0] }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-900/30 rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 right-1/3 w-24 h-24 border border-teal-500/10 rounded-full md:w-64 md:h-64 border-dashed"
                />
                <div className="absolute bottom-10 left-1/3 w-36 h-36 bg-indigo-900/30 rounded-full opacity-50 blur-3xl"></div>
            </div>

            <main className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            className="flex flex-col gap-6 text-center lg:text-left"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                                <span className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                                    Available for work
                                </span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight min-h-[1.2em]">
                                <div className="sr-only">Junior Frontend Developer</div>
                                <div ref={textRef} aria-hidden="true">
                                    Junior Frontend Developer
                                </div>
                            </h1>

                            <motion.p variants={itemVariants} className="text-base md:text-lg max-w-lg mx-auto lg:mx-0 text-slate-400">
                                Skilled in <span className="text-blue-400 font-medium">React.js</span> and modern JavaScript, passionate about
                                building clean, responsive, and user-friendly web interfaces.
                            </motion.p>

                            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-8 sm:gap-12 mt-4 border-t border-slate-800 pt-6">
                                <div>
                                    <p className="text-3xl font-bold text-blue-400">10+</p>
                                    <p className="text-sm text-slate-500 uppercase tracking-wider">Projects</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-blue-400">5+</p>
                                    <p className="text-sm text-slate-500 uppercase tracking-wider">Tech Stack</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-blue-400">0</p>
                                    <p className="text-sm text-slate-500 uppercase tracking-wider">Clients</p>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
                                <button
                                    ref={buttonRef1}
                                    className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl inline-flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
                                >
                                    View My Work
                                    <span className="material-symbols-outlined !text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                                <button
                                    ref={buttonRef2}
                                    className="bg-transparent border border-slate-700 text-slate-300 font-bold py-4 px-8 rounded-xl hover:bg-slate-800/50 hover:text-white hover:border-slate-600 transition-all"
                                >
                                    Download Resume
                                </button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="relative flex justify-center lg:justify-end"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        >
                            <div className="relative w-80 h-80 sm:w-[28rem] sm:h-[28rem]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                                <img
                                    alt="Developer Portrait"
                                    className="w-full h-full object-cover rounded-full border-4 border-slate-800/50 relative z-10 shadow-2xl"
                                    src="https://i.ibb.co.com/rfQ1VvJm/300-300.jpg"
                                />

                                {/* Floating Badges */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -20 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                                    className="absolute top-4 -left-4 sm:top-8 sm:-left-8 z-20"
                                >
                                    <div className="bg-slate-900/80 backdrop-blur-md text-white text-sm font-semibold px-4 py-2 rounded-2xl flex items-center gap-3 shadow-xl border border-slate-700/50">
                                        <div className="bg-blue-500/20 p-1.5 rounded-lg">
                                            <span className="material-symbols-outlined text-blue-400 !text-lg">code</span>
                                        </div>
                                        <span>React Developer</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0, rotate: 10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                                    className="absolute bottom-1/2 -right-8 transform translate-y-1/2 z-20"
                                >
                                    <div className="bg-slate-900/80 backdrop-blur-md text-white text-sm font-semibold px-4 py-2 rounded-2xl flex items-center gap-3 shadow-xl border border-slate-700/50">
                                        <div className="bg-purple-500/20 p-1.5 rounded-lg">
                                            <span className="material-symbols-outlined text-purple-400 !text-lg">palette</span>
                                        </div>
                                        <span>UI Designer</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                                    className="absolute bottom-4 left-0 z-20"
                                >
                                    <div className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl border border-slate-700/50">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>Online</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>
        </section>
    );
}
