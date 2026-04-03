import { motion } from 'framer-motion';
import { Heart, Sparkles, Users } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function About() {
    const creator = {
        name: "gloooomed",
        role: "Sole Creator",
        bio: "I designed and built MediScan System end-to-end: frontend experience, API integration, model serving workflow, and deployment architecture.",
        github: "https://github.com/gloooomed",
        linkedin: "https://www.linkedin.com/in/gloooomed/",
        profileImage: "https://github.com/gloooomed.png"
    }

    return (
        <div className="w-full relative z-10 pt-6 md:pt-8 pb-24">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-4xl mx-auto mb-20"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-cardBorder mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span className="text-sm font-medium tracking-tight">Meet the Creator</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6 leading-tight">
                    The Mind Behind <br /> MediScan.
                </h1>
                <p className="text-lg text-foreground/65 max-w-2xl mx-auto font-medium tracking-tight leading-relaxed">
                    A solo-built AI health project focused on fast symptom intelligence, clear reporting, and practical user experience.
                </p>
            </motion.div>

            <section className="max-w-7xl mx-auto">
                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full max-w-[320px] bg-card border border-cardBorder rounded-2xl shadow-xl backdrop-blur-md px-7 py-8 text-center"
                    >
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-xl ring-2 ring-cardBorder">
                        <img
                            src={creator.profileImage}
                            alt={creator.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(creator.name)}&background=0f172a&color=ffffff&size=112`
                            }}
                        />
                    </div>

                    <h2 className="text-xl font-semibold tracking-tight mb-1">{creator.name}</h2>
                    <p className="text-xs uppercase tracking-widest text-foreground/55 font-bold mb-5">{creator.role}</p>
                    <p className="text-foreground/65 text-sm leading-relaxed mb-6 min-h-[84px]">{creator.bio}</p>

                        <div className="flex items-center justify-center gap-3">
                            <a
                                href={creator.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background/70 border border-cardBorder flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                                aria-label="GitHub"
                            >
                                <FaGithub size={18} />
                            </a>
                            <a
                                href={creator.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background/70 border border-cardBorder flex items-center justify-center hover:bg-foreground hover:text-background transition-all"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="mt-20 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card border border-cardBorder rounded-2xl shadow-xl backdrop-blur-md p-8 md:p-10"
                >
                    <h3 className="text-xs uppercase tracking-[0.2em] text-foreground/50 font-bold mb-4 text-center">Our Mission</h3>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-center mb-6 leading-tight">Empowering Health Insights Through Intelligence</h2>
                    <p className="text-foreground/65 text-center max-w-3xl mx-auto leading-relaxed mb-10 tracking-tight">
                        At MediScan, the mission is to make preliminary health understanding faster and clearer by combining practical AI with thoughtful product design.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="rounded-xl border border-cardBorder bg-background/40 p-5 text-center">
                            <div className="w-11 h-11 rounded-2xl bg-foreground text-background dark:bg-background dark:text-foreground flex items-center justify-center mx-auto mb-4">
                                <Sparkles size={18} strokeWidth={2} />
                            </div>
                            <h4 className="font-semibold text-lg tracking-tight mb-2">Innovation First</h4>
                            <p className="text-sm text-foreground/60">Focused on building meaningful AI flows, not just features.</p>
                        </div>
                        <div className="rounded-xl border border-cardBorder bg-background/40 p-5 text-center">
                            <div className="w-11 h-11 rounded-2xl bg-foreground text-background dark:bg-background dark:text-foreground flex items-center justify-center mx-auto mb-4">
                                <Users size={18} strokeWidth={2} />
                            </div>
                            <h4 className="font-semibold text-lg tracking-tight mb-2">User-Centric</h4>
                            <p className="text-sm text-foreground/60">Designed for clarity, speed, and confidence in every interaction.</p>
                        </div>
                        <div className="rounded-xl border border-cardBorder bg-background/40 p-5 text-center">
                            <div className="w-11 h-11 rounded-2xl bg-foreground text-background dark:bg-background dark:text-foreground flex items-center justify-center mx-auto mb-4">
                                <Heart size={18} strokeWidth={2} />
                            </div>
                            <h4 className="font-semibold text-lg tracking-tight mb-2">Passion Driven</h4>
                            <p className="text-sm text-foreground/60">Built with care for healthcare accessibility and product craftsmanship.</p>
                        </div>
                    </div>
                </motion.div>
            </section>

        </div>
    )
}

export default About
