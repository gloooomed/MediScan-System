import defaultImage from "../../assets/default.svg"
import githubImage from "../../assets/github.svg"
import { motion } from 'framer-motion';

function About() {
    const people = [
        {
            name: "Parthiba Sarkar",
            githubUrl: "https://github.com",
            position: "UI/UX Designer, Frontend and Model Training"
        },
        {
            name: "Ishika Sarkar",
            githubUrl: "https://github.com",
            position: "Model Training and Backend Developer"
        },
        {
            name: "Nandini Kumari",
            githubUrl: "https://github.com",
            position: "Researcher, Report Writer, UI/UX Designer"
        },
        {
            name: "Koustab Paul",
            githubUrl: "https://github.com",
            position: "Researcher and Backend Developer"
        },
    ]

    return (
        <div className="w-full relative z-10 pt-10 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-4xl mx-auto mb-20"
            >
                <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">The Organization</h2>
                <h1 className="text-5xl font-bold tracking-tight mb-8">Architects of Precision</h1>
                <p className="text-lg text-foreground/70 leading-relaxed">
                    At MediScan System, our mission is to make healthcare insights more accessible and convenient for everyone. We harness the power of artificial intelligence to provide quick, data-driven predictions based on user-reported symptoms.
                    <br /><br />
                    Our goal is to empower individuals to make informed decisions about their health, all while emphasizing that our tool is a supplementary resource, not a replacement for professional medical advice. Behind MediScan System is a dedicated team of tech enthusiasts and healthcare advocates committed to using AI for good, helping bridge the gap between technology and personal well-being.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {people.map((eachPerson, index) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            key={index}
                            className="flex flex-col gap-4 p-8 bg-card border border-cardBorder rounded-2xl shadow-lg backdrop-blur-md hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-16 h-16 rounded-full bg-foreground/5 p-3 flex items-center justify-center">
                                    <img src={defaultImage} alt="Profile" className="w-full opacity-80" />
                                </div>
                                <a href={eachPerson.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-foreground/5 transition-colors">
                                    <img src={githubImage} alt="Github" className="w-6 h-6 dark:invert opacity-60 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold tracking-tight mb-1">{eachPerson.name}</h2>
                                <p className="text-sm text-foreground/60 font-medium leading-relaxed">{eachPerson.position}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        </div>
    )
}

export default About
