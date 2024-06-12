import './resume.css'
import Footer from './footer';
function Resume() {

    return (
        <>
            <div className="container resume">
                <h1 className='resume-size'>Resume</h1>
                <div className="row resume-row">
                    <div className="col-md-5">
                        <h3>Work</h3>
                        <h2>Experience</h2>

                    </div>


                    <div className='col-md-4'>
                        <div className='resume-box'>
                            <span>2035 - Present</span>

                        </div>
                        <div className='resume-box'>
                            <span className='resume-edt '>Editor</span>
                            <p>'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>



                        </div>
                        <div className='resume-box'>
                            <span className=''>2035 - Present</span>

                        </div>
                        <div className='resume-box'>
                            <span className='resume-edt '>Writer at Large</span>
                            <p>'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>



                        </div>
                        <div className='resume-box'>
                            <span>2035 - Present</span>

                        </div>
                        <div className='resume-box'>
                            <span className='resume-edt '>Intern</span>
                            <p>'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>



                        </div>

                    </div>

                </div>

            </div>
            <hr></hr>
            <div className="container resume">
                
                <div className="row resume-row">
                    <div className="col-md-5">
                       
                        <h2>Education</h2>

                    </div>


                    <div className='col-md-4'>
                        <div className='resume-box'>
                            <span>2035 - Present</span>

                        </div>
                        <div className='resume-box'>
                            <span className='resume-edt '>NCB&E</span>
                            <div className='resume-edt '>Master's Degree</div>
                            <p>'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>



                        </div>
                        <div className='resume-box'>
                            <span className=''>2035 - Present</span>

                        </div>
                        <div className='resume-box'>
                            <span className='resume-edt '>Superior</span>
                            <div className='resume-edt '>Beachelor's Degree</div>
                            <p>'m a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>



                        </div>
                        <div className='resume-box'>
                            <span>2035 - Present</span>

                        </div>
                        

                    </div>

                </div>

            </div>
            <hr></hr>

            <div className="container resume">
               
                <div className="row resume-row">
                    <div className="col-md-5">
                        <h3>Skills</h3>
                        <h2>& Expertise</h2>

                    </div>


                    <div className='col-md-4 resume-skills'>
                        
                        
                        <ul>
                            <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                            <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                            <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                            <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                        </ul>
                    </div>

                </div>

            </div>
            <hr></hr>

            <Footer/>

        </>
    )
}

export default Resume;