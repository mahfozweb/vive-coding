import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackgroundElements from './BackgroundElements';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const skillsRef = useRef(null);

    const skills = [
        {
            name: "HTML5",
            icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa5W0tygzFEKuNMmUfzyTwveJzrI4NtQtbY1Qr1782-6DbuMenGgc5Dc64EHSp2WTe2M8kAd_7RABGL5OJ1bd56YXCoOeYF6BWj3iRKd7xgdmHsqnoNynS-rkE0095c6deK9uexIjlGOFJBxv9oTvGexLgxmX12gG36htL5ZbTHoU34ZofqhZHeJ3bcgJh7tQUEwa9PlaXQnvYbIGCNIypSOxDWahAruY-uIhmXIog2x4oEepXGN8O2u7B_hjkL8zyLSFUJYTNYDRx",
            percentage: "90%"
        },
        {
            name: "CSS3",
            icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEMl16yN01BvU7pwrLadyEPg1W_Y_zBVmNwXNjW3MgBh0ANW5f3oAvX5uBLNXNnI1JrHlvohdPeUKIxkEkIk5lE4PexLCURgmuEcMg2kLdk3n8a74dVscYZcGylwopb8VpA_mSS3VoMTYs81VfnVJbjXOGwM43Z-S_cqSkdXWs49Yic5TcQ6HRPVkkh9qXyewop6EUtMdMPL22ptBXyFsLb57COdGozBet1dYGYmd0Hm4ALJFXQhQ7pSkEEAE7un511nwhgfJVGN-L",
            percentage: "85%"
        },
        {
            name: "JavaScript",
            icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Jrd9Y9Hd3YEWFP-Nyr71r8wH5ac2oJr-PBAW9M35cBH2fCsmIASZAOXxl35S1YqXB9gfRWAUdzR8_4fLGsZF4ieJ_GtcLFoOzH1KxzEQfbXEAbmSUjAPOVElR2NIAtqKr6OAUfiEsx4NBl91CctH2P66DB_gXR1UEOXoqBCs7e9MDo4dFJY8zYH63dyx6qSogxDGnlL1SY2kLBgJvoMbKuwhBtfJCxw54PGbYqGUiEe9TSTZ3Zd0W8inMrFTWXfqucBSqM1Kj_Ja",
            percentage: "80%"
        },
        {
            name: "React",
            icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJkUrVmISN-XKNnpFR3lTk-S9jrfoWOkBPgl-7blPfPrvf2E8HJc46eFEDUnD90fjSDDonsXOLzVLEuCa3VtKTuZ1USiOVDdCMY2A1rpzMB_IvWe5SBlpX14kZutHr1NQiAXiVaRNlK87_XVtK_qpSSsv-sAlwzuNL9OIOIkEW8gCnZzMeRu-QiUVTZChXzOTPcmnagIBwsJGGcFM-psjm-uYOwNgUqiblVMVL_K_kuH2etxZ4felKw80Acf2Y_mnW3V72rPunoOsm",
            percentage: "75%"
        },
        {
            name: "TailwindCSS",
            icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN1iLGKpd7qMRyBkFkim9yfS-qSy4UWqM9Ng0FUlSgOZDvmw8LkunEdzE4WeiICcKGbAOVOwbqbWz97guLBK5kaEd8BeEzd-75pzF9MQvstdj2aGbJ_zgFCNySjLhCwEw4Gdkn40Tnb2VIVcKFfs2PQAdpQMmS90MsFfwXfd4_0rWHq-I2ODSo1YC2HmNli7tkR594wF__u8eWnoDOwoCkHrBEr7x81OLL3oMhE4Yumg0AbARHFQv-ehzPcgF8J8Hk-3-avxnt6sPm",
            percentage: "80%"
        },
        {
            name: "UI/UX Design",
            icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_NHHenH7vo1zhD-AtHkBmQLxF1GTAUDQ0SpYibcHeyJi28Lipx22XSmuyiq_tpKvINiX6KlsWt_wfLEgUz-KRIrYBLkQ5z9bu3E4O_TtKd3uDUwEcvwoutm6YGTl5CjhMD6N8-wzDkN5prYOTSBpnjXXXiAXg0Kxm0SOWJmA3jPmdkzmyXMbT0wl35zC9d-hx54K7AXJyvrC-ym6_LEHJIMLKWOIk2l6rrjaXW__d5dxNlyr3usw1Sqjwv9Bo2qjb2M9_JDhEsRah",
            percentage: "70%"
        }
    ];

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
        hidden: { opacity: 0, y: 20, scale: 0.9, filter: "blur(5px)" },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" ref={sectionRef} className="bg-background-dark font-display relative overflow-hidden py-16">
            <BackgroundElements />

            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2
                        ref={titleRef}
                        className="text-4xl sm:text-5xl font-bold text-white mb-12 text-left"
                    >
                        My Skills
                    </h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        ref={skillsRef}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 30px -10px rgba(147, 51, 234, 0.3)",
                                    borderColor: "rgba(147, 51, 234, 0.3)"
                                }}
                                className="bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 group"
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-800/80 transition-colors">
                                            <img alt={`${skill.name} logo`} className="w-8 h-8 object-contain" src={skill.icon} />
                                        </div>
                                        <span className="text-lg font-bold text-slate-200">{skill.name}</span>
                                    </div>
                                    <span className="text-md font-mono text-primary font-bold">{skill.percentage}</span>
                                </div>
                                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.percentage }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "circOut", delay: 0.2 + (index * 0.1) }}
                                        className="bg-gradient-to-r from-primary to-blue-500 h-full rounded-full relative overflow-hidden"
                                    >
                                        <motion.div
                                            className="absolute top-0 bottom-0 left-0 w-full bg-white/20"
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
