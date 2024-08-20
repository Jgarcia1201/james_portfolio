import LinkedInIcon from '../../assets/linkedin.png'
import GithubIcon from '../../assets/github.png'
import EmailIcon from '../../assets/message.png'
import Image from 'next/image'
import { ContactContainer } from './styled-components'

const Contact = () => {
    return (
        <ContactContainer>
            <a href='https://www.linkedin.com/in/jgarcia1201' target="_blank">
                <Image style={iconStyles} src={LinkedInIcon} alt='LinkedIn Icon' />
            </a>
            <a href='mailto:james.garcia1201@outlook.com' target="_blank">
                <Image style={iconStyles} src={EmailIcon} alt='Email Icon' />
            </a>
            <a href='https://github.com/jgarcia1201' target="_blank">
                <Image style={iconStyles} src={GithubIcon} alt='Github Icon' />
            </a>
        </ContactContainer>
    )
}

export default Contact

const iconStyles = {
    height: '32px',
    width: '32px'
}