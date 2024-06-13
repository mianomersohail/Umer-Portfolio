import './project.css'
import Footer from './footer'

function Project(){
    return(
        <>
        <div className="container project">
            <h1>Projects</h1>
            <div className="row"> 
                
                <div className="col-md-5 project-box">
                    <h2>Madrisah Project</h2>
                    <p>That was my great Project with some great Memories with complete Customer Satisfaction Project Feature you can see in my video.</p>
                </div>
                <div className='col-md-5 project-box offset-md-1'>
                    <div className='project-video-wrapper'>
                        <iframe className='project-video' src="https://www.youtube.com/embed/lwBsknG_rkA?si=kxXDhf7BMtoZc7xL" title="Madrisah Project Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                <div className="col-md-5 project-box">
                    <h2>Web 3 Project</h2>
                    <p>This was my new Experience of blockchain where I solved some complex logics for two parties to make their deals in a decentralized way. The blockchain used was Eth BlockChain and the language used was Solidity with eth.js library to interact with the blockchain.</p>
                </div>
                <div className='col-md-5 project-box offset-md-1'>
                    <div className='project-video-wrapper'>
                        <iframe className='project-video' src="https://www.youtube.com/embed/H-9pPHKNZXs?si=tQ3tv1yqyHeUMUNL" title="Web 3 Project Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                <div className="col-md-5 project-box">
                    <h2>Mian Real State Project</h2>
                    <p>Project for Mian Real State one of the Common and most popular name in pakistan Real Estate Industry.</p>
                </div>
                <div className='col-md-5 project-box offset-md-1'>
                    <div className='project-video-wrapper'>
                        <iframe className='project-video' src="https://www.youtube.com/embed/u0TbnJA_-wU?si=VZA_xFkAj3bOauVR" title="Mobile Shop Project Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <Footer/>
        </>
    )
}

export default Project
