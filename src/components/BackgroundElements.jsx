import { motion } from 'framer-motion';

export default function BackgroundElements() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0], y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-900/30 rounded-full blur-2xl"
            ></motion.div>
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, -40, 0] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-900/30 rounded-full blur-3xl opacity-20"
            ></motion.div>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-1/3 w-24 h-24 border border-teal-500/10 rounded-full md:w-64 md:h-64 border-dashed"
            />
            <div className="absolute bottom-10 left-1/3 w-36 h-36 bg-indigo-900/30 rounded-full opacity-50 blur-3xl"></div>
        </div>
    );
}
