import './App.css'
import Pic from './assets/A.jpg';


function About() {
    return(
        <>
            <div className='about-container'>
            <p className='at-1'><b>Get to Know More </b> </p>
            <h1 className='at-t'>About Me</h1>

                <div className='about-container-details'>
                    <div className='about-me'>
                        <p>
                            I have completed BEng (Hons) in Software Engineering with upper second class. 
                            I have experience working on various projects, including standalone applications as well. 
                            I enjoy solving problems and creating practical solutions. 
                            I continuously explore new technologies and tools to enhance my skills.                                               
                        </p>
                        <br/>
                        <p>                         
                            I possess excellent communication skills, problem solving abilities, and critical thinking skills. I am a quick 
                            learner, able to adapt to new technologies easily. I excel at teamwork, I am self-motivated, and I 
                            demonstrate flexibility in my approach. Additionally, I have experience with Spring Boot, React 
                            js and ASP .Net Framework am committed to continuous learning and growth in the field of 
                            software engineering.
                        </p>
                    </div>
                    <div className='about-me-img'>
                        <img src={Pic} alt='Althaf picture' />
                    </div>
                </div>


            </div>
        </>
    )
}
export default About;