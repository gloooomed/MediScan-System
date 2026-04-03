import brandLogo from "../../assets/health.png"
import { motion } from "framer-motion"

const Report = ({ patientDetails, diseasePredicted }) => {
    
    // Fallback UI if not loaded properly
    if (!diseasePredicted || !diseasePredicted.predictions) return null;

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-card border border-cardBorder rounded-2xl p-8 shadow-2xl backdrop-blur-md overflow-hidden relative"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-cardBorder pb-6 mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                        Diagnostic Report
                    </h1>
                    <p className="text-foreground/60 text-sm mt-1 font-mono uppercase tracking-widest">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                </div>
                <img src={brandLogo} alt="Logo" className="w-16 h-16 object-contain mt-4 md:mt-0 drop-shadow-md" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Patient Profile */}
                <div className="md:col-span-1 bg-background/50 rounded-xl p-6 border border-cardBorder h-fit">
                    <h2 className="text-lg font-bold mb-4 border-b border-cardBorder pb-2 text-foreground/80 uppercase text-xs tracking-widest">Patient Profile</h2>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between items-center"><span className="text-foreground/60">Name:</span> <span className="font-semibold">{patientDetails.patientName || 'N/A'}</span></li>
                        <li className="flex justify-between items-center"><span className="text-foreground/60">Gender:</span> <span className="font-semibold">{patientDetails.patientGender || 'N/A'}</span></li>
                        <li className="flex justify-between items-center"><span className="text-foreground/60">Age:</span> <span className="font-semibold">{patientDetails.patientAge || 'N/A'}</span></li>
                        <li className="flex justify-between items-center"><span className="text-foreground/60">Blood Type:</span> <span className="font-semibold">{patientDetails.patientBloodGroup || 'N/A'}</span></li>
                        <li className="flex justify-between items-center"><span className="text-foreground/60">Height:</span> <span className="font-semibold">{patientDetails.patientHeight ? `${patientDetails.patientHeight} cm` : 'N/A'}</span></li>
                        <li className="flex justify-between items-center"><span className="text-foreground/60">Weight:</span> <span className="font-semibold">{patientDetails.patientWeight ? `${patientDetails.patientWeight} kg` : 'N/A'}</span></li>
                    </ul>
                </div>

                {/* Diagnostic Results */}
                <div className="md:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-lg font-bold mb-4 border-b border-cardBorder pb-2 text-foreground/80 uppercase text-xs tracking-widest">Predicted Probabilities</h2>
                        <div className="space-y-4">
                            {diseasePredicted.predictions.map((eachDisease, idx) => (
                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-background/40 border border-cardBorder rounded-lg p-4 relative overflow-hidden" 
                                    key={eachDisease.disease}
                                >
                                    {/* Progress background bar */}
                                    <div 
                                        className={`absolute top-0 left-0 h-full opacity-10 ${idx === 0 ? 'bg-red-500' : 'bg-blue-500'}`} 
                                        style={{ width: `${eachDisease.probability}%` }}
                                    ></div>
                                    
                                    <div className="relative z-10 flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <h3 className={`font-bold text-lg ${idx === 0 ? 'text-red-500 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>
                                                {eachDisease.disease}
                                            </h3>
                                            <span className="font-mono font-bold">{eachDisease.probability.toFixed(1)}%</span>
                                        </div>
                                        <p className="text-sm text-foreground/70 leading-relaxed">{eachDisease.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold mb-4 border-b border-cardBorder pb-2 text-foreground/80 uppercase text-xs tracking-widest">Recommended Action Protocol</h2>
                        <div className="bg-background/40 border border-cardBorder rounded-xl p-6">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {diseasePredicted.precautions && diseasePredicted.precautions.map((precaution, index) => (
                                    <li className="flex items-start gap-3" key={index}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground/60 shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3"/></svg>
                                        <span className="text-sm font-medium text-foreground">{precaution.charAt(0).toUpperCase() + precaution.slice(1)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Report
