import './social-links.css';
import { FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
    return (
        <div className="container-social-links">
            <Link to='https://github.com/leshnik-t' title="Find me on GitHub" target='_blank' rel="noopener noreferrer" role='button'><FaGithub /></Link>
            <Link to='https://www.hackerrank.com/lenatl?hr_r=1' title="Find me on HackerRank" target='_blank' rel="noopener noreferrer" role='button'><FaHackerrank /></Link>
            <Link to='https://www.linkedin.com/in/lena-marinova-36756856/' title="Find me on LinkedIn" target='_blank' rel="noopener noreferrer" role='button'><FaLinkedin /></Link>
        </div>
    )
}

export default SocialLinks;