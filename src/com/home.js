
import './home.css';
import ImageSlider from './slider';
import Courses from '../com/courses.js'
import Testi from '../com/testi.js'
import Terminal from './terminal.js';
import Footer from './footer.js'
import Join from './group join.js'
import Group from './group price.js'
import React, {useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
function Home() {
  const [name,setname]=useState({
     
      value:"I'm Umer Sohail",
      color:"white"
  })



  return (
    <>
      <section className="text-gray-600 body-font fff">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lhr">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 c" >---Hello
            <br className="hidden lg:inline-block" />              <span style={{ color: name.color }}>{name.value}</span>

            </h1>
            <p className="mb-8 leading-relaxed n">Fullstack Developer & Instructor.</p>
            <p className="mb-8 leading-relaxed n">Hi there! My name is Umer Sohail  and I’m a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others.</p>

            <div className="flex justify-center ">
              <form action='http://localhost:3000/cv' >

            <button type='submit' className="hk ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Download CV</button>
              </form>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 d">
            <img className="object-cover object-center rounded-full" alt="hero" src='https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/434033192_976267827349937_7252134059346434320_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwCGaQ75yiACUAGgXybmH1Cm_eBR2uFM4Kb94FHa4UzkQUi1DTdp25Tg7nAQ6qoac9u40Npe2BVx5i5F6PakCX&_nc_ohc=VirF5fCggoMAb7bA5Y7&_nc_ht=scontent.flhe13-1.fna&oh=00_AfD181FLD9kYvm2Vw3L4DDVNV4lrutjVV0407EBLnyNEAA&oe=662687CC'></img>
          </div>
        </div>
      </section>
      <ImageSlider/>
      <Join/>
      <Group/>
      <Courses/>
      <Testi/>
      <Terminal/>
      <Footer/>
    </>
  );
}

export default Home;
