import './resume.css'
import Footer from './footer';
function Resume() {

    return (
        <>
            <div className="container resume">
                <h1 className='resume-size home-helo'>Resume</h1>
                <div className="row resume-row">
                    <div className="col-md-5">
                        <h3 className='resume-font-two'>Work</h3>
                        <h2 className='resume-font-two'>Experience</h2>

                    </div>


                    <div className='col-md-4'>
                        <div className='resume-box'>
                            <span>2023 - Present</span>

                        </div>
                        <div className='resume-box'>
                            <span className='resume-edt home-helo'>BlockChain Develpment</span>
                            <p className='resume-font'>I have Lots of Experience in Blockchain development as a freelancing i have write Lots of Smart contract on Blockchain Some of my more popular projects are (Decentralized Dealing Projet).</p>



                        </div>
                        <div className='resume-box'>
                            <span className=''>2023- Presnet</span>

                        </div>
                        <div className='resume-box'>
                            <span className='resume-edt home-helo '>MERN STACK </span>
                            <p className='resume-font'>In my front End Carrier i have lots of experience in freelancing due to my strong grip on js and React function base and class Base Components
                                I also have strong grip on backend development one of my Fav great project was for Madrisah with chatting,calling,recorded Lectures,Online Classes, Authentication,Registration And Much More Features
                                </p>



                        </div>
                        <div className='resume-box'>
                            <span>2024 - Present</span>

                        </div>
                        <div className='resume-box'>
                            <span className='resume-edt home-helo '>Intern</span>
                            <p className='resume-font'>I have complete my Internship as a full Stack Web Devloper in Mern Stack from Arfa Institue.</p>



                        </div>

                        <div className='resume-box'>
                            <span className='resume-edt home-helo'>Git & Git Hub</span>
                            <p className='resume-font'>I also have a knowledge of version Control Like Git and Git Hub .</p>



                        </div>

                    </div>

                </div>

            </div>
            <hr></hr>
            <div className="container ">
                
                <div className="row resume-row">
                    <div className="col-md-5">
                       
                        <h2 className='resume-font-two'>Education</h2>

                    </div>


                    <div className='col-md-4'>
                        <div className='resume-box'>
                            <span>2035 - Present</span>

                        </div>
                        <div className='resume-box'>
                            <span className='resume-edt home-helo'>NCB&E</span>
                            <div className='resume-edt '>Master's Degree</div>
                            <p className='resume-font'>'I have my Master Degree in Accounts and Finance .</p>



                        </div>
                        <div className='resume-box'>
                            <span className=''>2035 - Present</span>

                        </div>
                        <div className='resume-box'>
                            <span className='resume-edt home-helo'>Arfa Software House</span>
                            <div className='resume-edt '>Web Devlopment Course</div>
                            <p className='resume-font'> I have Learn my Web Development From Arfa Zaff Institue .</p>



                        </div>
                        <div className='resume-box'>
                            <span>2035 - Present</span>

                        </div>
                        

                    </div>

                </div>

            </div>
            <hr></hr>

            <div className="container ">
               
                <div className="row resume-row">
                    <div className="col-md-7 ">
                        <h3 className='resume-font-two'>Skills</h3>
                        <h2 className='resume-font-two'>& Expertise</h2>

                    </div>


                    <div className='col-md-4 resume-skills'>
                        
                        
                        <ul className='resume-font'>
                            <li>I'm a Front End Developer Using Lates Tools And Frame Works.</li>
                            <li>I'm a Back End Developer Using Node Js Express Js.</li>
                            <li>I Have a Lots of Experience Of Block Chain Software Development.</li>
                            <li>I' Have  Lots of Experience of Financial Markets Like Bitcoin,Forex,Commodities.</li>
                            <li>I Have a lots of Experience of Free Lancing as a Full Stack Developer Also a BlockChain</li>
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