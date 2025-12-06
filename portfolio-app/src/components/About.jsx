import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackgroundElements from './BackgroundElements';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const title = titleRef.current;
        const chars = title.innerText.split('');
        title.innerHTML = '';

        chars.forEach((char) => {
            const span = document.createElement('span');
            span.innerText = char;
            span.style.display = 'inline-block';
            title.appendChild(span);
        });

        gsap.fromTo(title.children,
            {
                opacity: 0,
                y: 50,
                rotateX: -90
            },
            {
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                },
                opacity: 1,
                y: 0,
                rotateX: 0,
                stagger: 0.05,
                duration: 0.8,
                ease: "back.out(1.7)"
            }
        );
    }, []);

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
        hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.6, ease: "circOut" }
        }
    };

    return (
        <section id="about" ref={sectionRef} className="bg-background-dark font-display relative overflow-hidden py-16">
            <BackgroundElements />

            <div className="flex items-center justify-center min-h-[60vh] relative z-10 px-4">
                <motion.section
                    className="w-full max-w-5xl p-8 md:p-12 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white mb-6">
                                About Me
                            </h2>
                            <motion.div variants={itemVariants} className="space-y-4">
                                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                                    I'm a Front-End Developer who loves building <span className="text-primary font-semibold">responsive</span> and <span className="text-primary font-semibold">interactive</span> web applications.
                                </p>
                                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                                    I focus on clean design, modern UI, and user-friendly experiences. Blending art with code is my passion.
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="pt-6">
                                <div className="flex flex-wrap gap-3">
                                    {['HTML5', 'CSS3', 'Node.js', 'JavaScript', 'React', 'TailwindCSS', 'GSAP', 'Framer Motion'].map((skill, index) => (
                                        <motion.span
                                            key={index}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: Math.random() * 10 - 5,
                                                backgroundColor: "rgba(147, 51, 234, 0.1)",
                                                borderColor: "#9333ea"
                                            }}
                                            className="px-4 py-2 text-sm font-medium border border-slate-700 rounded-xl text-slate-200 cursor-default transition-colors bg-slate-800/50 backdrop-blur-sm"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="relative hidden md:block"
                        >
                            <motion.div
                                className="w-full h-80 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl relative overflow-hidden"
                                whileHover={{ rotateY: 10, rotateX: -5 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                style={{ perspective: 1000 }}
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-10">
                                    👨‍💻
                                </div>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                />
                            </motion.div>

                            {/* Floating elements */}
                            <motion.div
                                className="absolute -top-6 -right-6 p-5 bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700/50 min-w-[160px]"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">Experience</div>
                                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">1 Years</h3>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-6 -left-6 p-5 bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700/50 min-w-[160px]"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">Projects</div>
                                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">10+ Done</h3>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </section>
    );
}
