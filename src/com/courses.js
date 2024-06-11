import React, { useEffect } from 'react';
import './courses.css';

function Projects() {
    useEffect(() => {
        // Load the YouTube IFrame API
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Initialize the YouTube player
        let player;
        window.onYouTubeIframeAPIReady = function() {
            player = new window.YT.Player('madrisah-video', {
                events: {
                    onReady: onPlayerReady,
                },
            });
        };

        function onPlayerReady(event) {
            const videoContainer = document.getElementById('video-container');
            videoContainer.addEventListener('mouseenter', () => {
                event.target.playVideo();
            });
            videoContainer.addEventListener('mouseleave', () => {
                event.target.pauseVideo();
            });
        }
    }, []);

    return (
        <div className="container Projects">
            <div className="row">
                <h1 style={{ color: '#01D293' }}>--COURSES</h1>
                <p style={{ color: 'white' }}>Checkout My Interactive Courses</p>

                <div className="col-md-4 project-box">
                <div className="video-container" id="video-container">
                        <iframe
                            id="madrisah-video"
                            className="project-video"
                            src="https://www.youtube.com/embed/oTNRYy0VOfY?si=-bwz_mNwQVr8Wtfm"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="madrisah-color madrisah-font">Java Script</p>
                    <p className="madrisah-color">Complete Java script Play List for beginners</p>
                    <div className="madrisah-round">
                        <span>ECMA 6 </span>
                        <span>Begineer</span>
                        <span>Advance</span>
                        <span>Interview prep</span>
                    </div>
                    <div className="madrisah-round">
                        <span>Objects</span>
                        <span>Classes</span>
                        <span>Generators</span>
                        <span>Iterators</span>
                    </div>
                </div>

                <div className="col-md-4 project-box">
                <div className="video-container" id="video-container">
                        <iframe
                            id="madrisah-video"
                            className="project-video"
                            src="https://www.youtube.com/embed/frdMVSax2LE?si=DnvcRp75s0zSozoi"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="madrisah-color madrisah-font">HTML</p>
                    <p className="madrisah-color">Basics to Advance Html,Vs Code Installation folder structure</p>
                    <div className="madrisah-round">
                        <span>HTML</span>
                        <span>Project</span>
                        <span>interview </span>
                        <span> Vs Code</span>
                        
                    </div>
                    <div className="madrisah-round">
                        <span>biginer guide</span>
                        <span>advance concep</span>
                        <span>Extensions</span>
                        
                        
                    </div>
                </div>

                <div className="col-md-4 project-box">
                    <div className="video-container" id="video-container">
                        <iframe
                            id="madrisah-video"
                            className="project-video"
                            src="https://www.youtube.com/embed/nCoGPqQYVwY?si=ZvQud8mvOxdzcFKP"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="madrisah-color madrisah-font">CSS</p>
                    <p className="madrisah-color">Advance css Concepts with bootstrap and tailwind framework Responsiveness work </p>
                    <div className="madrisah-round">
                        <span>Css</span>
                        <span>Responsive </span>
                        <span>Bootstrap</span>
                        <span>api calling </span>
                        <span>Tailwind</span>
                    </div>

                    <div className="madrisah-round">
                        <span>Bigners</span>
                        <span>Guideance </span>
                       
                    </div>
                </div>
                <div className="col-md-4 project-box">
                    <div className="video-container" id="video-container">
                        <iframe
                            id="madrisah-video"
                            className="project-video"
                            src="https://www.youtube.com/embed/NAbmDaq7baE?si=7j8F6nuFb9UhNd-C"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="madrisah-color madrisah-font">REACT</p>
                    <p className="madrisah-color">React Complete course Class base And Functions Base components </p>
                    <div className="madrisah-round">
                        <span>class comp</span>
                        <span>Funciton comp </span>
                        
                        <span>props</span>
                        <span>Hooks </span>
                        <span>state</span>
                    </div>
                    <div className="madrisah-round">
                        <span>Inteview prep</span>
                        
                        
                        <span>Life Cycle </span>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
