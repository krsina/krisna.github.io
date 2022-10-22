import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"

const Footer = () => {
const icon = <FontAwesomeIcon icon={faGithub} />
const icon2 = <FontAwesomeIcon icon={faInstagram} />
const icon3 = <FontAwesomeIcon icon={faLinkedin} />

    return (
    <div className="text-center border-t border-slate-400 p-5">
        <div><p className="text-xs">Designed and built using Next.js, TypeScript, and TailwindCSS</p></div>
        <div className="text-2xl text-slate-300">
            <Link href="https://github.com/krsina"><a className="pr-2">{icon}</a></Link>
            <Link href="https://instagram.com/krisnahh/"><a className="pr-2">{icon2}</a></Link>
            <Link href="https://linkedin.com/in/krisna-oeurn-a96529214"><a className="pr-2">{icon3}</a></Link>
            </div>
        
        
    </div>
    );
}

export default Footer;