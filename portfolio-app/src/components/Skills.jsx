import { motion } from 'framer-motion';

export default function Skills() {
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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="bg-background-light dark:bg-background-dark font-display">
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl font-bold text-primary mb-12 text-left"
                    >
                        My Skills
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                className="bg-white/50 dark:bg-glass border border-gray-200/50 dark:border-slate-700/50 rounded-lg p-6 flex flex-col gap-4 transition-all duration-300"
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <div className="flex items-center gap-3">
                                        <img alt={`${skill.name} logo`} className="w-7 h-7" src={skill.icon} />
                                        <span className="text-lg font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                                    </div>
                                    <span className="text-md text-slate-600 dark:text-slate-400">{skill.percentage}</span>
                                </div>
                                <div className="w-full bg-slate-300 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.percentage }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                        className="bg-gradient-to-r from-purple-500 to-purple-400 h-2.5 rounded-full"
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </section>
    );
}
