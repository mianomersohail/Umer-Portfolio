import React, { useEffect } from 'react';
import './projects.css';

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
                <h1 style={{ color: '#01D293' }}>--Projects</h1>
                <p style={{ color: 'white' }}>Checkout My Interactive Projects</p>

                <div className="col-md-4 project-box">
                <div className="video-container" id="video-container">
                        <iframe
                            id="madrisah-video"
                            className="project-video"
                            src="https://www.youtube.com/embed/lwBsknG_rkA?si=E4DoKcXCYaCWQVjM"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="madrisah-color madrisah-font">MADRISAH PROJECT</p>
                    <p className="madrisah-color">Madrisah Project using Mern Rest Apis best ux,ui and backend</p>
                    <div className="madrisah-round">
                        <span>Chatting</span>
                        <span>Calling</span>
                        <span>Authentication</span>
                        <span>Registration</span>
                    </div>
                    <div className="madrisah-round">
                        <span>Record class</span>
                        <span>Online Classes</span>
                        <span>Best UI</span>
                        <span>Best UX</span>
                    </div>
                </div>

                <div className="col-md-4 project-box">
                <div className="video-container" id="video-container">
                        <iframe
                            id="madrisah-video"
                            className="project-video"
                            src="https://www.youtube.com/embed/H-9pPHKNZXs?si=5fzskSxDpXBAsxJA"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="madrisah-color madrisah-font">NEXT EARTH WEB3</p>
                    <p className="madrisah-color">Next earth web3 project of metaverse jump in virtual reality best Ui,Ux</p>
                    <div className="madrisah-round">
                        <span>Best Ui</span>
                        <span>Best UX</span>
                        <span>Responsive</span>
                        <span>React </span>
                    </div>
                </div>

                <div className="col-md-4 project-box">
                    <div className="video-container" id="video-container">
                        <iframe
                            id="madrisah-video"
                            className="project-video"
                            src="https://www.youtube.com/embed/u0TbnJA_-wU?si=_tSJhkQ95ILf4RSc"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="madrisah-color madrisah-font">PROPERTY PROJECT</p>
                    <p className="madrisah-color">It was great experience for working Mian Real State i have give my best as i give </p>
                    <div className="madrisah-round">
                        <span>Best Ui</span>
                        <span>Best UX</span>
                        <span>Responsive</span>
                        <span>React </span>
                        <span>Tailwind</span>
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
                    <p className="madrisah-color madrisah-font">DOCTORS  PROJECT</p>
                    <p className="madrisah-color">It was great experience for working as a free lancer for my beloved Client from Uk </p>
                    <div className="madrisah-round">
                        <span>Best Ui</span>
                        <span>great Dsgn</span>
                        
                        <span>Responsive</span>
                        <span>React </span>
                        <span>Tailwind</span>
                    </div>
                    <div className="madrisah-round">
                        <span>Feedback 100%</span>
                        
                        
                        <span>complex design</span>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
