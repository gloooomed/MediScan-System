import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import spinnerLogo from '../../assets/spinner.svg'
import symptomsList from "../../symptoms.json"
import Report from "../Report/Report"

function Predict() {

    const [showSpinner, setShowSpinner] = useState(false)
    const [symptoms, setSymptoms] = useState([])
    const [patientDetails, setPatientDetails] = useState({
        "patientName": "",
        "patientAge": "",
        "patientGender": "",
        "patientWeight": "",
        "patientHeight": "",
        "patientBloodGroup": "",
        "symptoms": []
    })
    const [diseasePredicted, setDiseasePredicted] = useState({})

    const addSymptom = () => {
        setSymptoms([...symptoms, { id: Date.now(), value: '' }])
    }

    const removeSymptom = (index) => {
        const updated = symptoms.filter((_, i) => i !== index);
        setSymptoms(updated);
        setPatientDetails(prev => ({ ...prev, symptoms: updated }));
    }

    const handleSymptomChange = (event, index) => {
        let updatedSymptoms = [...symptoms];
        updatedSymptoms[index] = { ...updatedSymptoms[index], value: event.target.value };
        setPatientDetails((prevDetails) => ({
            ...prevDetails,
            symptoms: updatedSymptoms
        }))
        setSymptoms(updatedSymptoms)
    }

    const handlePatientDetailsChange = (event) => {
        let { name, value } = event.target
        setPatientDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }))
    }

    const predictDisease = async () => {
        setDiseasePredicted([])
        setShowSpinner(true)
        console.log(patientDetails.symptoms)
        try {
            const response = await fetch('/api/predict-disease', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ symptoms: patientDetails.symptoms })
            })
            const data = await response.json();
            setDiseasePredicted(data)
            setShowSpinner(false)
        } catch (error) {
            console.error("Error fetching prediction:", error)
            setShowSpinner(false)
        }
    }

    useEffect(() => {
        console.log(diseasePredicted)
    }, [diseasePredicted])

    const inputClasses = "w-full px-4 py-3 bg-white dark:bg-slate-800 border border-cardBorder rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500";
    const labelClasses = "block text-sm font-semibold tracking-wide text-foreground mb-2 uppercase";

    return (
        <div className="w-full relative z-10 pt-10 pb-20">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <h2 className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-3">Diagnostic Pipeline</h2>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Patient Symptom Analysis</h1>
                <p className="text-lg text-foreground/70 leading-relaxed">
                    Provide the requisite clinical data points. Our neural network will compute probabilistic health outcomes instantly.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-7 bg-card border border-cardBorder rounded-2xl shadow-xl backdrop-blur-md p-8 overflow-hidden relative"
                >
                    <h2 className="text-2xl font-bold mb-8">Patient Demographics</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className={labelClasses}>Full Name</label>
                            <input
                                type="text"
                                name="patientName"
                                value={patientDetails.patientName}
                                className={inputClasses}
                                onChange={handlePatientDetailsChange}
                                placeholder="Enter patient name"
                            />
                        </div>
                        
                        <div>
                            <label className={labelClasses}>Age</label>
                            <input
                                type="number"
                                name="patientAge"
                                value={patientDetails.patientAge}
                                className={inputClasses}
                                onChange={handlePatientDetailsChange}
                                placeholder="Years"
                            />
                        </div>

                        <div>
                            <label className={labelClasses}>Gender</label>
                            <select
                                name="patientGender"
                                value={patientDetails.patientGender}
                                onChange={handlePatientDetailsChange}
                                className={inputClasses}
                            >
                                <option value="" disabled>Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div>
                            <label className={labelClasses}>Height (cm)</label>
                            <input
                                type="number"
                                name="patientHeight"
                                value={patientDetails.patientHeight}
                                className={inputClasses}
                                onChange={handlePatientDetailsChange}
                                placeholder="cm"
                            />
                        </div>

                        <div>
                            <label className={labelClasses}>Weight (kg)</label>
                            <input
                                type="number"
                                name="patientWeight"
                                value={patientDetails.patientWeight}
                                className={inputClasses}
                                onChange={handlePatientDetailsChange}
                                placeholder="kg"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className={labelClasses}>Blood Group</label>
                            <select
                                name="patientBloodGroup"
                                value={patientDetails.patientBloodGroup}
                                onChange={handlePatientDetailsChange}
                                className={inputClasses}
                            >
                                <option value="" disabled>Select blood group</option>
                                <option value="A+">A+</option><option value="A-">A-</option>
                                <option value="B+">B+</option><option value="B-">B-</option>
                                <option value="AB+">AB+</option><option value="AB-">AB-</option>
                                <option value="O+">O+</option><option value="O-">O-</option>
                            </select>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-5 bg-card border border-cardBorder rounded-2xl shadow-xl backdrop-blur-md p-8 flex flex-col relative"
                >
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">Clinical Symptoms</h2>
                        <p className="text-sm text-foreground/60">Select presenting symptoms from the clinical registry.</p>
                    </div>

                    <div className="flex-1 pr-2 space-y-4 overflow-visible">
                        <AnimatePresence>
                            {symptoms.map((eachSymptom, index) => (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0, scale: 0.9 }}
                                    className="flex items-center gap-3" 
                                    key={eachSymptom.id}
                                >
                                    <div className="flex-1">
                                        <select
                                            className={inputClasses}
                                            onChange={(e) => handleSymptomChange(e, index)}
                                            value={eachSymptom.value}
                                        >
                                            <option value="" disabled>Select a diagnosis parameter</option>
                                            {symptomsList.map((symp, idx) => (
                                                <option value={symp} key={idx}>{symp.replace(/_/g, ' ').toUpperCase()}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button onClick={() => removeSymptom(index)} className="p-3 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-colors">
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        
                        {symptoms.length === 0 && (
                            <div className="text-center py-10 border-2 border-dashed border-cardBorder rounded-xl text-foreground/50">
                                No indicators logged.<br/>Add a symptom to begin.
                            </div>
                        )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-cardBorder space-y-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 border border-dashed border-cardBorder text-foreground font-semibold rounded-lg hover:bg-background/50 transition-colors flex items-center justify-center gap-2"
                            onClick={addSymptom}
                        >
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                            Add Indicator
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={predictDisease}
                            disabled={showSpinner || symptoms.length === 0}
                            className="w-full py-4 bg-primary bg-foreground text-background font-bold text-lg rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            {showSpinner ? "Computing Engine..." : "Execute Prediction"}
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <div className="mt-16 w-full max-w-6xl mx-auto flex justify-center">
                {diseasePredicted && diseasePredicted.predictions ? (
                     <div className="w-full animate__animated animate__fadeInUp">
                        <Report patientDetails={patientDetails} diseasePredicted={diseasePredicted} />
                     </div>
                ) : showSpinner ? (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-12 flex flex-col items-center gap-6"
                    >
                        <div className="relative w-24 h-24 flex items-center justify-center mb-2">
                            {/* Outer Ring */}
                            <div className="absolute inset-0 border-4 border-blue-500/10 border-t-blue-500 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
                            {/* Inner Ring */}
                            <div className="absolute inset-3 border-4 border-teal-400/10 border-b-teal-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                            {/* Core Glow */}
                            <div className="absolute inset-8 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-full animate-pulse blur-[8px] opacity-60"></div>
                            {/* Center Dot */}
                            <div className="w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                        </div>
                        <p className="text-blue-500 dark:text-blue-400 font-mono tracking-widest uppercase text-sm animate-pulse">Processing Data Matrices...</p>
                    </motion.div>
                ) : null}
            </div>
        </div>
    )
}

export default Predict
