import './App.css'
import LMU from './assets/LMU.png';
import esoft from './assets/esoft.png';
import uom from './assets/uom.jpg';
// import annoor from './assets/An-noor.jpg';
import annoor from './assets/An-noor-2.png';
import minhaj from './assets/Al-minhaj.jpg';

function Education(){
    return(
        <>
            <div className='edu-container'>
                <p className='at-1'><b>My Educational</b></p>
                <h1 className='at-t'>Qualification's</h1>

                <h4 className='higher'>Higher Education</h4>
                <div className='higher-edu'>                    
                    <div className='degree'>
                        <div className='degree-img'>
                            <img src={LMU} alt='LMU' />
                        </div>
                        <div className='degree-details'>
                            <b>Bachelor of Engineering Honours in Software Engineering - London Metropolitan University</b><br/>
                            <p>Grade - Upper Second Class</p>
                        </div>
                        
                    </div>
                    <div className='hnd'>
                        <div className='hnd-img'>
                            <img src={esoft} alt='Esoft' />
                        </div>
                        <div className='hnd-details'>
                            <b>Higher National Diploma in Computing (Software Engineering)</b><br/>
                            <p>Grade - Merit</p>
                        </div>

                    </div>
                </div>

                <h4 className='higher'>Professional Qualification</h4>
                <div className='prof-quali'>
                    <div className='degree-img'>
                        <img src={uom} alt='UOM' />
                    </div>
                    <div className='prof-details'>
                        <b>Full-stack development (Front-End Web Development) at Open Learning Platform</b><br/>
                        <p>University of Moratuwa</p>
                    </div>
                </div>

                <h4 className='higher'>School Education</h4>
                <div className='schl'>
                    <div className='schl-1'>
                        <div className='schl-img-1'>
                            <img src={annoor} alt='An-Noor cc' />
                        </div>
                        <div className='schl-details-1'>
                            <b>An-Noor Central College (National School)</b><br/>
                            <p>Panagamuwa</p>
                        </div>
                    </div>

                    <div className='schl-2'>
                        <div className='schl-img-2'>
                            <img src={minhaj} alt='Al-Minhaj Ns' />
                        </div>
                        <div className='schl-details-2'>
                            <b>Al-Minhaj National School</b><br/>
                            <p>Hapugasthalawa</p>
                        </div>
                        
                    </div>
                     
                </div>
            </div>
        
        </>
    )
}

export default Education;