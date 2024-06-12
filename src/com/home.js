import './home.css'
import Footer from './footer'
import {Link} from 'react-router-dom'
import Msgs from './msgs'
function Home(){
    return(
        <>
        <div className="container home">
            <div className="row row-home">
                <div className="col-md-5 offset-md-1">
                    <img  className="home-img" src="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/211099031_343009547342438_8151184923034008264_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JlT87xUJwMUQ7kNvgHP6YVu&_nc_ht=scontent.flhe13-1.fna&oh=00_AYBLIXE4zRdiNZUMvXyxbkD1ODD6ftqP0ZuA8F7RRYBxQg&oe=666EA5FE"/>

                </div>

                <div className='col-md-5 home-two-box' >
                    <h1 style={{fontSize:"95px"}}>Hello</h1>
                    <p style={{fontSize:"23px",fontWeight:"bolder"}}>A Bit About Me</p>
                    <p>Hi there! My name is Omer and I’m a software engineer with over 2 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others.</p>
                    <div className='home-re-flex'> <div  className="home-re home-re-one" ><Link to="/resume" className='homelink'> Resume</Link></div><div className="home-re home-re-two"><Link to="/projects" className='homelink' > Project</Link></div><div className="home-re home-re-three"><Link to="/contact" className='homelink'>Contact</Link></div></div>
                </div>

            </div>

        </div>
        <Msgs/>
        <Footer/>
        </>
    )
}
export default Home