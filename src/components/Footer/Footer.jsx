import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="w-full mt-20 px-6 sm:px-10 lg:px-16 py-8 border-t border-cardBorder transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="text-left">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">MediScan</h2>
                    <p className="text-sm text-foreground/60 mt-1">&copy; 2026 MediScan.</p>
                </div>

                <a
                    href="https://github.com/gloooomed"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-full border border-cardBorder bg-card flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-blue-500/50 transition-colors"
                >
                    <FaGithub size={18} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
