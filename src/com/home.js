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
                <img className="home-img" src="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/448733224_1018008389842547_5690376814240670044_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=09ItKnWyfu4Q7kNvgH3cUYX&_nc_ht=scontent.flhe13-1.fna&oh=00_AYBUEfD6Hd8ZLE26aOSbF6ZJYWx3bxBJy4YRqaFQnP8qJQ&oe=669C7D26" alt="Omer"/>



                </div>

                <div className='col-md-5 home-two-box' >
                    <h1 className='home-helo'>Hello</h1>
                    <p style={{fontSize:"23px",fontWeight:"bolder",fontFamily:"Pacifico"}}>A Bit About Me</p>
                    <p style={{fontFamily:'Gwendolyn'}}> Hi there! My name is Omer and I’m a software engineer with over 2 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others.</p>
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