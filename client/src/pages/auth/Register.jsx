
import bloodLogo from "../../assets/frontend/img/blood.png"
import { Link } from "react-router-dom"
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux"

const Register = () => {
   const dispatch = useDispatch(); 
   
  const { input , handleInputChange, resetForm  } = useForm({
    name : "",
    auth : "",
    password : ""
  }); 


  // handlePatientCreate 
  const handlePatientCreate = () => {

    dispatch(); 
   
  }

  return (
    <>
  {/* Page Content */}
  <div className="content top-space">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {/* Register Content */}
          <div className="account-content">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7 col-lg-6 login-left">
                <img
                  src={bloodLogo}
                  className="img-fluid"
                  alt="Doccure Register"
                />
              </div>
              <div className="col-md-12 col-lg-6 login-right">
                <div className="login-header">
                  <h3>
                    Patient Register{" "}
                    <Link to="/doner-register">Are you a Donor?</Link>
                  </h3>
                </div>
                {/* Register Form */}
                <form >
                  <div className="mb-3 form-focus">
                    <input type="text" className="form-control floating" name="name" value={input.name} onChange={handleInputChange} />
                    <label className="focus-label">Name</label>
                  </div>
                  <div className="mb-3 form-focus">
                    <input type="text" className="form-control floating" name="auth" value={input.auth} onChange={handleInputChange}  />
                    <label className="focus-label">Mobile Number/Email Address </label>
                  </div>
                  <div className="mb-3 form-focus">
                    <input type="password" className="form-control floating" name="password" value={input.password} onChange={handleInputChange} />
                    <label className="focus-label">Create Password</label>
                  </div>
                  <div className="text-end">
                    <Link className="forgot-link" to="/login">
                      Already have an account?
                    </Link>
                  </div>
                  <button
                    className="btn btn-primary w-100 btn-lg login-btn"
                   onClick={handlePatientCreate}
                  >
                    Signup
                  </button>
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  <div className="row social-login">
                    <div className="col-6">
                      <a href="#" className="btn btn-facebook w-100">
                        <i className="fab fa-facebook-f me-1" /> Login
                      </a>
                    </div>
                    <div className="col-6">
                      <a href="#" className="btn btn-google w-100">
                        <i className="fab fa-google me-1" /> Login
                      </a>
                    </div>
                  </div>
                </form>
                {/* /Register Form */}
              </div>
            </div>
          </div>
          {/* /Register Content */}
        </div>
      </div>
    </div>
  </div>
  {/* /Page Content */}
</>


  )
}

export default Register
