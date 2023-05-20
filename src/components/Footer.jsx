import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className="logo">
                    <img src={Logo} alt="" />
                </Link>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quasi suscipit consectetur molestias non asperiores.</p>

                <div className="footer__socials">
                    <Link to= 'https://www.linkedin.com/in/rovshan-allakhverdiev-667803255/' target="_blank" rel="noreferrer noopener"><FaFacebookF /> </Link>

                    <Link to= 'https://www.linkedin.com/in/rovshan-allakhverdiev-667803255/' target="_blank" rel="noreferrer noopener"><FaLinkedin /> </Link>

                    <Link to= 'https://www.linkedin.com/in/rovshan-allakhverdiev-667803255/' target="_blank" rel="noreferrer noopener"><AiFillInstagram /> </Link>

                    <Link to= 'https://www.linkedin.com/in/rovshan-allakhverdiev-667803255/' target="_blank" rel="noreferrer noopener"><AiOutlineTwitter /> </Link>
                </div>

            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>

            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>

            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>

            </article>

        </div>
        <div className="footer__copyright">
            <small>2023 Rovshan &copy; All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer