import './home.css'
import Projects  from './projects';
import Courses from './courses'
function Home(){
    return(
        <>
        <div className="container home">
            <div className="row home-row">
                <div className="col-md-6 box1">
                    <h1 style={{color:'#01D288'}}>--Hello</h1>
                    <h1 style={{color:'white'}}>I'm Omer Sohail</h1>
                    <p style={{color:'#CDC7C6 '}}>Fullstack Developer & Instructor</p>
                    <p style={{color:'#CDC7C6 '}}>Hi there! My name is Omer Sohail and I’m a software engineer with over 5 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others.</p>
                    <button className='youtube-btn'>Youtube Channel <i class="fa fa-youtube-play" style={{fontSize:'48px;color:red'}}></i></button>

                </div>

                <div className='col-md-4 offset-md-2 box2'>
                    <img className="img-round" src="https://scontent.flhe13-1.fna.fbcdn.net/v/t39.30808-6/378868324_860756278901093_1659713808052935769_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AD5mlKwScQsQ7kNvgEV5E2h&_nc_ht=scontent.flhe13-1.fna&oh=00_AYB34W8nU3IqyA-E0CQKPn2rH2rEUNktmtx6zPtQM3yyPA&oe=666E62CC"/>

                </div>

            </div>

        </div>
        <Projects/>
        <Courses/>
        
        </>
    )
}

export default Home;