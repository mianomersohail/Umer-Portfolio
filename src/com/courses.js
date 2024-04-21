import './courses.css'

import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

function Courses() {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        // Here, you can define the animation logic when scrolling
        // For example, add a class to the course items when they come into view

        // Select all elements with the class 'box' using querySelectorAll
        const boxes = document.querySelectorAll('.box');
        
        // Loop through each box
        boxes.forEach(box => {
            // Get the box's position relative to the viewport
            const boxTop = box.getBoundingClientRect().top;
            
            // If the box is in the viewport (visible)
            if (boxTop < window.innerHeight - 100) {
                // Add the 'fade-in' class to the box
                box.classList.add('fade-in');
            } else {
                // Remove the 'fade-in' class if the box is not in the viewport
                box.classList.remove('fade-in');
            }
        });
    };

    return (
        <>
        
            <h1 className='cone'>---Courses</h1>
            <p className="co">Checkout My Interactive Courses</p>
            <div className="grid lg:grid-cols-3 mab gap-7">
                <a href="https://youtu.be/yuH7O8zpwNc?si=wz7Z5Zqlw3JcwxoF">
                <div className='box one'>
                    <img src="https://img.freepik.com/premium-photo/beautiful-mountain-lake-generative-ai_438099-11773.jpg?size=626&ext=jpg&ga=GA1.1.71557408.1707852211&semt=ais"></img>
                    <p className='fustack'> Original Facebook Login Page </p>
                    <p className='pil'>Building Facebook Login Page Looks Like Orginal </p>
                    <div className='mainboo '>
                        <div className='boo'>
                            Node

                        </div>
                        <span className='boo'>
                            Html

                        </span>
                        <span className='boo'>
                            CSS

                        </span>
                        <span className='boo'>
                            Javs Script

                        </span>
                        <span className='boo'>
                            Bootstrap
                        </span>
                        

                        <span className='boo'>
                            React Js
                        </span>

                    </div>



                </div>
                </a>
                <div className='box two'>

                    
                        <img src="https://img.freepik.com/free-photo/reflection-lights-mountain-lake-captured-parco-ciani-lugano-switzerland_181624-24209.jpg?size=626&ext=jpg&ga=GA1.1.71557408.1707852211&semt=ais"></img>
                        <p className='fustack'>Master Trading Strategies</p>
                        <p className='pil'>Trade Financial Assets and Earn a passive side Income By Just Buy and Sell Digitals assets</p>

                        <div className='mainboo two' >
                            <div className='boo'>
                                Gold Trading

                            </div>
                            <div className='boo'>
                                Forex Currencies 

                            </div>
                            <div className='boo'>
                                Bitcoin Trading

                            </div>

                        </div>
                   

                
                </div>

                <div className='box one'>
                    <img src="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D"></img>
                    <p className='fustack'>Complete Blockchain Technology</p>
                    <p className='pil'>Smart Contracts on Ethereum Blockchain </p>

                    <div className='mainboo three'>
                        <div className='boo'>
                            Solidity

                        </div>
                        <div className='boo'>
                            Ethers.js

                        </div>
                        <div className='boo'>
                            Hardhat
                        </div>

                    </div>

                </div>

            </div>
            <div className='grid lg:grid-cols-3 gap-7 mab'>
                <div className='box one'>
                    <img src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <h1>Solidity:Smart Contracts on Eth Blockchain </h1>
                    <p>Take your Developement next level with Web3</p>
                    <p>Eth BlockChain</p>
                    <div className='mainboo'>
                        <div className='boo'>
                        Solidity

                        </div>
                        <div className='boo'>
                        Web3

                        </div>
                        <div className='boo'>Smart Contract

                        </div>

                    </div>


                </div>
                <div className='box one'>
                    <img src="https://images.unsplash.com/photo-1497015289639-54688650d173?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D5"></img>
                    <p>Interview Prepartions</p>
                    <p>Complet Interview Qustions</p>
                    <div className='mainboo'>
                        
                        <div className='boo'>
                            Mern Stack

                        </div>
                        <div className='boo'>Web 3

                        </div>
                        <div className='boo'>Forex Currencies

                        </div>
                        <div className='boo'>CryptoCurriences</div>

                    </div>

                </div>
                <div className='box one '>
                    <img src="https://www.shutterstock.com/shutterstock/photos/2318581837/display_1500/stock-photo-june-brazil-in-this-photo-illustration-the-mongodb-logo-is-displayed-on-a-smartphone-2318581837.jpg"></img>
                    <p>MONGO DB</p>
                    <p>Complete mongodb Data Base </p>
                    <div className='mainboo'>
                        <div className='boo'>
                            Data Base

                        </div>
                        <div className='boo'>Crud Operations

                        </div>
                        <div className='boo'>Schemas

                        </div>

                        <div className='boo'>Free and Paid versions

</div>

                    </div>

                </div>

            </div>
            <div className='grid lg:grid-cols-3 mab gap-7 '>
                <div className='box one'>
                    <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/git-github.png"></img>
                    <p>Version Controls</p>
                    <p>Git & Github </p>
                    <p>Keepo Track of your code</p>
                    <div className='mainboo'>
                        <div className='boo'>Git

                        </div>
                        <div className='boo'>Git Hub

                        </div>
                        <div className='boo'>Version Controls</div>
                        <div className='boo'>Upload website on github pages

                        </div>

                    </div>

                </div>
                <div className='box one'>
                    <img src="https://www.piyushgarg.dev/_next/image?url=%2Fimages%2Freact-design-patterns.webp&w=384&q=75"></img>
                    <p>Ultimate React Js Design Patterns</p>
                    <p>Level Up Your React Skills With Design Pattern</p>
                    <div className='mainboo'>
                        <div className='boo'>React

                        </div>
                        <div className='boo'>Vertual Dom

                        </div>
                        <div className='boo'>Props</div>
                        <div className='boo'>States

                        </div>
                        <div className='boo'>Hooks etc

                        </div>

                    </div>
                    

                </div>

            </div>

           

            
        </>
    )
}

export default Courses;