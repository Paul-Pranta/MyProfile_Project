

import leftPerson from "../img/resized/left-person.png";
import rightPerson from "../img/resized/right-person.png";

const Home = () => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-5">
            <img src={leftPerson} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-2 gap-3 text-center">
            <h4>Welcome</h4>
            <h3>to</h3>
            <h1>
              <span role="img" aria-label="raising hands">
                🙌
              </span>{" "}
              MyProfile{" "}
              <span role="img" aria-label="raising hands">
                🙌
              </span>
            </h1>
          </div>
          <div className="col-lg-5">
            <img src={rightPerson} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;







// import leftPerson from "../img/resized/left-person.png"
// import rightPerson from "../img/resized/right-person.png"




// const Home = () => {

//     const bckcolor = {
        
//         backgroundColor: "#f7f0f7",
//         height:'100%'
        
//     }

//     return (
//         <div className="vh-100 vw-90"  >
//             <div className="row py-5 px-3">
//                 <div className="col-lg-5  ">
//                     <img src={leftPerson} alt="" />
//                 </div>
//                 <div className="col-lg-2  gap-3 ">
                    
//                     <h4>Welcome</h4>
//                     <h3>to</h3>
//                     <h1>🙌 MyProfile 🙌</h1>
//                 </div>
//                 <div className="col-lg-5 ">
//                     <img src={rightPerson} alt="" />
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Home