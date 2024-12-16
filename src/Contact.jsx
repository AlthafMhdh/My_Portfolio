import './App.css'
// import LinkedIn from './assets/Linkedin.png';
import LinkedIn from './assets/in.jpg';
import mail from './assets/mail.png';
import call from './assets/tel.png';
import topIcon from './assets/top.jpg';

function Contact() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return(
        <>
            <div className='skills-container'>
                <p className='at-1'><b>Get In Touch</b> </p>
                <h1 className='at-t'>Contact Me</h1>
            </div>
            <div className='contact-container'>
                <div className='contact-details'>
                    <div className='contact-cc'>
                        <div className='contact-img'>
                            <img src={call}/>          
                        </div>
                        <div className='contact-info'>
                            <h4>+94 769409295</h4>
                        </div>
                    </div>
                    
                    <div className='contact-cc'>
                        <div className='contact-img'>
                            <img src={mail}/>
                        </div>
                        <div className='contact-info'>
                            <h4>Alf11althaf@gmail.com</h4>
                        </div>
                    </div>
                    
                    <div className='contact-cc'>
                        <div className='contact-img'>
                            <img src={LinkedIn}/>
                        </div>
                        <div className='contact-info'>
                            <h4>Muhammadh-althaf</h4>
                        </div>
                    </div>
                    
                </div>
            </div>  

            <div className='scroll-to-top' onClick={scrollToTop}>
                <img src={topIcon} alt="Scroll to Top" />
            </div>

            <div className='footer'>
                <p>Copyright &#169; 2024 Muhammadh Althaf. All Rights Reserved. </p>
            </div>  
        </>
    )
}

export default Contact;