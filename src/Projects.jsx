import './App.css'
import lms from './assets/LMS.jpg';
import trs from './assets/City.jpg';

function Projects() {

    const openLMS = () => {
        window.open('https://github.com/AlthafMhdh/Learning-Management-System', '_blank');
    };

    const openCTRS = () => {
        window.open('https://github.com/AlthafMhdh/Taxi-Reservation-System', '_blank');
    };

    return(
        <>
            <div className='skills-container'>
                <p className='at-1'><b>My Recent</b> </p>
                <h1 className='at-t'>Projects</h1>

                <div className='project-details-container'>
                    <div className='project-details'>
                        <div className='project-image'>
                            <img src={lms} />
                        </div>
                        <div className='pro-title'>
                            <h4>Learning Management System</h4>
                            <p>React Js + Springboot Project</p>
                            <div className='btn-git'>
                                <button className='btnn btn-color-3' onClick={openLMS}>Github</button>
                            </div>
                        </div>
                    </div>

                    <div className='project-details'>
                        <div className='project-image'>
                            <img src={trs} />
                        </div>
                        <div className='pro-title'>
                            <h4>Taxi Reservation System</h4>
                            <p>React Js + Springboot Project</p>
                            <div className='btn-git'>
                                <button className='btnn btn-color-3' onClick={openCTRS}>Github</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Projects;