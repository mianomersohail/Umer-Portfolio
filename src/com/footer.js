import './footer.css'
function Footer(){
    return (
        <>
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-md-3">
                    <h1>Phone </h1>
                    <p>+92-316-3865-813</p>

                </div>

                <div className="col-md-3">
                    <h1>Email</h1>
                    <p>muhammadumersohail27@gmail.com</p>

                </div>

                <div className="col-md-3">
                    <h1>Follow Me</h1>
                    <i class="fa fa-linkedin-square" style={{fontSize:"36px"}}></i><i class="fa fa-youtube-play" style={{fontSize:"36px"}}></i>

                </div>

                <div className='col-md-3'>
                <p>
                © 2035 By Nicol Rider.</p>
                <p>Powered and secured by Wix</p>

                </div>
            </div>
        </div>
        </>

    )
}
export default Footer