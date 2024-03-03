
import bloodLogo from "../../assets/frontend/img/blood.png"

const Login = () => {
  return (

      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Login Tab Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src={bloodLogo}
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Login <span>Doccure</span>
                        </h3>
                      </div>
                      <form action="index.html">
                        <div className="mb-3 form-focus">
                          <input type="email" className="form-control floating" />
                          <label className="focus-label">Email</label>
                        </div>
                        <div className="mb-3 form-focus">
                          <input type="password" className="form-control floating" />
                          <label className="focus-label">Password</label>
                        </div>
                        <div className="text-end">
                          <a className="forgot-link" href="forgot-password.html">
                            Forgot Password ?
                          </a>
                        </div>
                        <button
                          className="btn btn-primary w-100 btn-lg login-btn"
                          type="submit"
                        >
                          Login
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
                        <div className="text-center dont-have">
                          Don’t have an account? <a href="register.html">Register</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Login Tab Content */}
              </div>
            </div>
          </div>
        </div>


    </>
  )
}

export default Login


