import { useLocation } from "react-router-dom"
import { generatePathName } from "../../helpers/helpers";



const Breadcrumb = () => {
   
   const { pathname } = useLocation(); 

   // breadcrumb block list 
   const breadCrumb = ["/login", "/register", "/doner-register"];

   if (!breadCrumb.includes(pathname)) {
    return (
      <>
        {/* Breadcrumb */}
         <div className="breadcrumb-bar-two">
            <div className="container">
              <div className="row align-items-center inner-banner">
                <div className="col-md-12 col-12 text-center">
                  <h2 className="breadcrumb-title" style={{textTransform: "capitalize"}}> {generatePathName(pathname)} </h2>
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                      {generatePathName(pathname)}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
      </>
    )
   }

}

export default Breadcrumb















