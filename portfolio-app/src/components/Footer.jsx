import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/mahfozweb', icon: 'code' },
        { name: 'LinkedIn', url: '#', icon: 'work' },
        { name: 'Email', url: 'mailto:mahfoz81000@gmail.com', icon: 'mail' }
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <footer className="bg-slate-900 border-t border-slate-800 font-display relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-black z-0"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 lg:col-span-2 space-y-4">
                        <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 inline-block">
                            Mahfozul Hoque
                        </a>
                        <p className="text-slate-400 max-w-sm leading-relaxed">
                            Passionate Frontend Developer crafting beautiful, responsive, and user-friendly web experiences using modern technologies.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, color: '#9333ea' }}
                                    className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 transition-colors hover:border-primary/50"
                                    aria-label={social.name}
                                >
                                    <span className="material-symbols-outlined text-xl">{social.icon}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-primary transition-colors"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info (Simplified) */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                            Get in Touch
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <span className="material-symbols-outlined text-blue-500 mt-0.5">location_on</span>
                                <span>Cattogram, Bangladesh</span>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400">
                                <span className="material-symbols-outlined text-blue-500 mt-0.5">mail</span>
                                <a href="mailto:mahfoz81000@gmail.com" className="hover:text-blue-400 transition-colors">
                                    mahfoz81000@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent my-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {currentYear} Mahfozul Hoque. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Built with</span>
                        <span className="text-slate-300 font-medium">React</span>
                        <span className="text-slate-700 mx-1">•</span>
                        <span className="text-slate-300 font-medium">Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
