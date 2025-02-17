import img from './../src/images/study-rewards.webp';
function About(props){
    return(
        <div className="container-fluid bg-secondary text-white py-3" >
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-6">
                <img src={img} alt="Logo" className="img-fluid"/>
                </div>
                <div class="col-12 col-sm-6 col-lg-6 d-flex justify-content-end">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link text-white ms-3" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white ms-3" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white ms-3" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white ms-3" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )}
   
        
// function About(props) {
//     return(
//         <div className="col-3 bg-danger m-2">
//             <h2>Name{props.data.student}</h2>
//             <p>Grade{props.data.grade}</p>
//             <button>show more</button>
//         </div>         
//     )
// }





export default About;