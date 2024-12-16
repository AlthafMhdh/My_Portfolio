import './App.css'
import mark from './assets/mark.png';

function Skills() {
    return(
        <>        
            <div className='skills-container'>
                <p className='at-1'><b>Explore My </b> </p>
                <h1 className='at-t'>Skill's & Experience</h1>

                <div className='skills-details'>
                    <div className='front-skill-details'>
                        <h3 className='dev-heading'>Frontend Development</h3>
                        <div className='article-container'>
                            <div>
                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>HTML</h4>
                                        <p>Experienced</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark}alt='article-logo'/>
                                    <div>
                                        <h4>CSS</h4>
                                        <p>Experienced</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>JavaScript</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>TypeScript</h4>
                                        <p>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>React JS</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark}alt='article-logo'/>
                                    <div>
                                        <h4>Angular</h4>
                                        <p>Basic</p>
                                    </div>
                                </article>

                            </div>

                            <div>
                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>Bootstrap</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                            </div>
                                                       
                        </div>
                    </div>

                    <div className='back-skill-details'>
                        <h3 className='dev-heading'>Backend Development</h3>
                        <div className='article-container'>
                            <div>
                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>C#</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>Java</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>PHP</h4>
                                        <p>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>Spring Boot</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>Express JS</h4>
                                        <p>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>Node JS</h4>
                                        <p>Basic</p>
                                    </div>
                                </article>

                            </div>

                            <div>
                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>ASP DotNet Core</h4>
                                        <p>Basic</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>SQL</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>My SQL</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </article>

                                <article>
                                    <img src={mark} alt='article-logo'/>
                                    <div>
                                        <h4>Rest API</h4>
                                        <p>Intermediate</p>
                                    </div>
                                </article>                           

                            </div>

                            
                        </div>
                    </div>

                </div>
                    
            </div>
        </>
    )
}

export default Skills;