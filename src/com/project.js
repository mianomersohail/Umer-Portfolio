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
                    <p>That was my great Project with some great Memories with complete Customer Satisfaction Project Feature you can see in my video .</p>
                </div>

                <div className='col-md-5 project-box offset-md-1'>
                    <img className='project-img' src="https://static.wixstatic.com/media/c837a6_871a4251d9874b0d8acfe66796caaaf8~mv2.jpg/v1/fill/w_614,h_414,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/brendan-church-9F3sEV1-Iog-unsplash.jpg"/>

                </div>


                <div className="col-md-5 project-box">
                    <h2>Web 3 Project</h2>
                    <p>This was my new Experience of blockchain were i solve some complex logics for two parties to make their Deals in a Decentralized Way 
                        the blochain use was Eth BlockChain and the Language use in this was Solidity wit eth.js Liabrary to Interact with Block-Chain


                    </p>
                </div>

                <div className='col-md-5 project-box offset-md-1'>
                    <img className='project-img' src="https://static.wixstatic.com/media/11062b_6ddd2b6a939949a0acd0df3847b896bc~mv2.jpg/v1/fill/w_613,h_414,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Fashion%20Magazine.jpg"/>

                </div>




                <div className="col-md-5 project-box">
                    <h2>Mobile Shop Project</h2>
                    <p>Project for Mobile Shop to Track their Orders also customer Online Shopping and their feedback
                        
                        .</p>
                </div>

                <div className='col-md-5 project-box offset-md-1'>
                    <img className='project-img' src="https://static.wixstatic.com/media/8121cd0609b8412497001bae77b1af31.jpg/v1/fill/w_613,h_414,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8121cd0609b8412497001bae77b1af31.jpg"/>

                </div>

            </div>
        </div>
        <hr></hr>

        <Footer/>
        </>
    )
}
export default Project