import './contact.css'
import Footer from './footer';
function Contact() {
    return (
        <>
            <div className="container contact">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Contact</h1>
                        <p>Looking forward to hearing from you</p>
                        <h2>Phone</h2>
                        <p>+92-316-3865-813</p>
                        <h2>Email</h2>
                        <p>muhammdumersohail27@gmail.com</p>

                    </div>

                    <div className="col-md-5">
                        <input className='contact-input' placeholder='First Name'></input>
                        <input className='contact-input' placeholder='Last Name'/>
                        <input className='contact-input' type="email" placeholder='Enter your Email'/>
                        <input className='contact-input' placeholder='Subject'/>
                        <div className='contact-flex'>


                        <textarea rows="6" cols="42" placeholder='Your Meesage'>

                          

                        </textarea>
                        <div className="contact-re "> Submit</div>
                        
                        </div>


                    </div>
                </div>
            </div>
            <hr></hr>
            <Footer/>
        </>
    )
}
export default Contact;