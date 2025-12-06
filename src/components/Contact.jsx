import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackgroundElements from './BackgroundElements';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const titleRef = useRef(null);
    const formRef = useRef(null);

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
                staggerChildren: 0.2,
                delayChildren: 0.1
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
        <section id="contact" className="bg-background-dark font-display flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            <BackgroundElements />

            <div className="w-full max-w-5xl mx-auto relative z-10">
                <div className="mb-12">
                    <h1
                        ref={titleRef}
                        className="text-5xl md:text-6xl font-bold text-white mb-2"
                    >
                        Contact Me
                    </h1>
                    <p className="text-slate-400 text-lg">Let's build something amazing together.</p>
                </div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div className="space-y-6" variants={itemVariants}>
                        {[
                            { icon: "email", title: "Email", value: "mahfoz81000@gmail.com" },
                            { icon: "phone", title: "Phone", value: "+880 1783-523107" },
                            { icon: "location_on", title: "Location", value: "Cattogram, Bangladesh" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                                className="flex items-center p-6 bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-sm transition-all duration-300"
                            >
                                <div className="bg-primary/20 p-3 rounded-lg mr-6">
                                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-200">{item.title}</h2>
                                    <p className="text-slate-400">{item.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="bg-slate-900/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-slate-700/50"
                        variants={itemVariants}
                    >
                        <form ref={formRef} action="#" className="space-y-6" method="POST">
                            <div>
                                <label className="sr-only" htmlFor="name">Your Name</label>
                                <input
                                    className="w-full bg-slate-800 border border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary text-slate-200 placeholder-slate-500 rounded-lg py-3 px-4 transition-colors outline-none"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="email">Your Email</label>
                                <input
                                    className="w-full bg-slate-800 border border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary text-slate-200 placeholder-slate-500 rounded-lg py-3 px-4 transition-colors outline-none"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    type="email"
                                />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="message">Your Message</label>
                                <textarea
                                    className="w-full bg-slate-800 border border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary text-slate-200 placeholder-slate-500 rounded-lg py-3 px-4 transition-colors outline-none"
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
                                    className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-600 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-300 ease-in-out"
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
