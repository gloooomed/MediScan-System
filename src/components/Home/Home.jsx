import { useRef } from 'react'
import 'animate.css';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"
import aidoctorImage from "../../assets/aidoctor.svg"
import neuralNetworkImage from "../../assets/neuranetwork.png"

function Home() {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col gap-24 pb-20 w-full">
            <div className="relative pt-16 md:pt-24 flex flex-col items-center justify-center gap-16 w-full text-center">
                
                {/* Plus Pattern Background */}
                <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[150vw] h-[1000px] z-0 pointer-events-none opacity-50 dark:opacity-40"
                     style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M24 20v8M20 24h8' stroke='%2322c55e' stroke-width='2' stroke-linecap='round' stroke-opacity='0.6'/%3E%3C/svg%3E")`,
                        backgroundSize: '48px 48px',
                        WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 40%, black 0%, transparent 100%)',
                        maskImage: 'radial-gradient(ellipse 50% 50% at 50% 40%, black 0%, transparent 100%)',
                     }}>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-4xl z-10 flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold tracking-wide text-sm mb-8 border border-blue-500/20">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
                        </span>
                        ADVANCING HEALTHCARE WITH AI
                    </div>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground'>
                        Your Precision <br className="hidden md:block" />Health Companion
                    </h1>
                    <p className="text-lg md:text-xl mt-8 text-foreground/70 max-w-2xl font-light leading-relaxed mx-auto">
                        MediScan System empowers you to predict potential health issues based on symptom analysis. Harness the world’s most advanced artificial intelligence to gain actionable insights for your wellbeing.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full">
                        <Link to="/predict">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 w-full sm:w-auto bg-foreground text-background font-semibold rounded-full shadow-xl shadow-foreground/10 transition-colors hover:bg-foreground/90 whitespace-nowrap text-lg"
                            >
                                Start Analysis
                            </motion.button>
                        </Link>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToSection} 
                            className="px-8 py-4 w-full sm:w-auto border border-cardBorder text-foreground font-medium rounded-full hover:bg-card transition-colors whitespace-nowrap text-lg"
                        >
                            Learn Methodology
                        </motion.button>
                    </div>
                </motion.div>


            </div>

            {/* PREDICT SECTION */}
            <div ref={sectionRef} className="relative z-10 w-full pt-16">
                <div className="text-center mb-16">
                    <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Capabilities</h2>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight'>Data-Driven Diagnosis</h1>
                    <p className="mt-4 text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
                        We simplify the complexity of clinical data. Input your indicators and let our operating system process them against vast molecular libraries to yield instant, accurate predictions.
                    </p>
                </div>
                
                <div className="flex justify-center w-full max-w-5xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
                    >
                        <div className="bg-card border border-cardBorder p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Intuitive Input</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">Streamlined capture of symptoms through a structured clinical interface.</p>
                        </div>
                        <div className="bg-card border border-cardBorder p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-teal-400/10 flex items-center justify-center mb-4 text-teal-500">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Instant Compute</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">Harnesses proprietary neural pipelines for immediate predictive processing.</p>
                        </div>
                        <div className="bg-card border border-cardBorder p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-500">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">High Fidelity</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">Maintains strict clinical accuracy parameters matching traditional diagnostics.</p>
                        </div>
                        <div className="bg-card border border-cardBorder p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Secure Execution</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">Enterprise-grade security handling sensitive patient permutations locally.</p>
                        </div>
                    </motion.div>

                </div>
                </div>
                
                {/* HERO IMAGES MOVED HERE */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className="w-full relative z-10 flex justify-center max-w-6xl mx-auto mt-24"
                >
                    <div className="relative w-full overflow-visible flex flex-col md:flex-row items-center justify-between p-4 sm:p-10 bg-card/60 border border-cardBorder rounded-[3rem] shadow-2xl backdrop-blur-xl mx-auto">
                       {/* Left Image: Robot */}
                       <div className="w-full md:w-1/2 flex justify-center p-4">
                           <img src={aidoctorImage} alt="AI Data Analysis" className="w-full h-auto max-h-[450px] scale-105 object-contain relative z-10 opacity-95 hover:opacity-100 transition-opacity drop-shadow-2xl" />
                       </div>
                       
                       {/* Seamless Divider */}
                       <div className="hidden md:flex h-64 w-[2px] bg-gradient-to-b from-transparent via-cardBorder/50 to-transparent mx-2"></div>
                       
                       {/* Right Image: Neural Net */}
                       <div className="w-full md:w-1/2 flex justify-center p-4">
                           <img src={neuralNetworkImage} alt="Neural Network compute" className="w-full h-auto max-h-[450px] scale-110 object-contain relative z-10 dark:brightness-125 dark:contrast-125 dark:saturate-150 transition-all drop-shadow-2xl" />
                       </div>
                    </div>
                </motion.div>
            {/* CALL TO ACTION - DIFFERENT CARD CONTENT */}
            <div className="w-full mt-24 flex justify-center px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full max-w-6xl bg-card border border-cardBorder rounded-[3rem] p-10 sm:p-16 shadow-2xl relative overflow-hidden"
                >
                    {/* Background decorative glow */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground leading-[1.2]">
                                Stop Guessing. <br className="hidden md:block"/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Start Knowing.</span>
                            </h1>
                            <p className="text-lg text-foreground/60 max-w-md mx-auto md:mx-0">
                                Our neural architecture is standing by. Feed it your symptomatic parameters to extract immediate clinical probabilities.
                            </p>
                        </div>
                        
                        <div className="shrink-0 flex items-center justify-center">
                            <Link to="/predict">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-foreground hover:opacity-90 text-background font-bold text-lg px-8 py-5 rounded-full shadow-lg transition-all flex items-center gap-3"
                                >
                                    Launch Engine
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Home;
