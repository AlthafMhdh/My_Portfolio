import './App.css'
import ProfilePic from './assets/Althaf.jpg';
import ProfileP from './assets/Althaf1.jpg';
import CV from './assets/Althaf_Resume.pdf';
import Github from './assets/Github.png';
import LinkedIn from './assets/Linkedin.png';
import Git from './assets/OIP.jpg';

function Profile() {

    const viewResume = () => {
        window.open(CV, '_blank');
    };

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = CV; 
        link.download = 'Muhammadh_Althaf_Resume.pdf';
        link.click(); 
    };

    const openGithub = () => {
        window.open('https://github.com/AlthafMhdh', '_blank');
    };

    const openLinkedIn = () => {
        window.open('https://lk.linkedin.com/in/muhammadh-althaf-489946224', '_blank');
    };

    return(
        <>
            <div className="profile-container">
                <div className='profile-pic'>
                    <img src={ProfileP} alt='Althaf profile picture' />
                </div>
                <div className='profile-text'>
                    <p className='pt-1'>Hello, I'm </p>
                    <h1 className='pt-t'>Muhammadh Althaf</h1>
                    <p className='pt-2'>FullStack Developer</p>

                    <div id='social-container'>
                        <div>
                            <img src={Git} alt='Github' onClick={openGithub} />
                        </div>
                        <div>
                            <img src={LinkedIn} alt='LinkedIn' onClick={openLinkedIn} />
                        </div>
                    </div>

                    <div className='btn-container'>
                        <div>
                            <button className='btn btn-color-1' onClick={viewResume}>View Resume</button>
                        </div>
                        <div>
                            <button className='btn btn-color-2' onClick={downloadResume}>Download Resume</button>
                        </div>                               
                    </div>

                </div>
                
            </div>
            

            
        </>
    )
}

export default Profile;