
import logo from "../../assets/frontend/img/logo.png" 
import Avatar from "../../components/avatar/Avatar";
import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";

const Header = () => {

  const { auth  } = useAuth();

  return (
    <>
       {/* Header */}
       <header className="header header-custom header-fixed header-one">
            <div className="container">
              <nav className="navbar navbar-expand-lg header-nav">
                <div className="navbar-header">
                  <a id="mobile_btn" href="">
                    <span className="bar-icon">
                      <span />
                      <span />
                      <span />
                    </span>
                  </a>
                  <Link to="/dashboard" className="navbar-brand logo">
                    <img src={logo} className="img-fluid" alt="Logo" />
                  </Link>
                </div>
                <div className="main-menu-wrapper">
                  <div className="menu-header">
                    <Link to="/dashboard" className="menu-logo">
                      <img src={logo} className="img-fluid" alt="Logo" />
                    </Link>
                    <a 
                      id="menu_close"
                      className="menu-close"
                      href=""
                    >
                      <i className="fas fa-times" />
                    </a>
                  </div>
                  <ul className="main-nav">
                    <li className="">
                      <a href="">
                        Home 
                      </a>
                    </li>
                    <li className="has-submenu">
                      <a href="">
                        Doctors <i className="fas fa-chevron-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="doctor-dashboard.html">Doctor Dashboard</a>
                        </li>
                        <li>
                          <a href="appointments.html">Appointments</a>
                        </li>
                        <li>
                          <a href="schedule-timings.html">Schedule Timing</a>
                        </li>
                        <li>
                          <a href="my-patients.html">Patients List</a>
                        </li>
                        <li>
                          <a href="patient-profile.html">Patients Profile</a>
                        </li>
                        <li>
                          <a href="chat-doctor.html">Chat</a>
                        </li>
                        <li>
                          <a href="invoices.html">Invoices</a>
                        </li>
                        <li>
                          <a href="doctor-profile-settings.html">Profile Settings</a>
                        </li>
                        <li>
                          <a href="reviews.html">Reviews</a>
                        </li>
                        <li>
                          <a href="doctor-register.html">Doctor Register</a>
                        </li>
                        <li className="has-submenu">
                          <a href="doctor-blog.html">Blog</a>
                          <ul className="submenu">
                            <li>
                              <a href="doctor-blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog view</a>
                            </li>
                            <li>
                              <a href="doctor-add-blog.html">Add Blog</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <ul className="nav header-navbar-rht">
                  {/* Cart */}
                  <li className="nav-item dropdown noti-nav view-cart-header me-3">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link p-0 position-relative"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa-solid fa-cart-shopping" />{" "}
                      <small className="unread-msg1">7</small>
                    </a>
                    <div className="dropdown-menu notifications dropdown-menu-end">
                      <div className="shopping-cart">
                        <ul className="shopping-cart-items list-unstyled">
                          <li className="clearfix">
                            <div className="close-icon">
                              <i className="fa-solid fa-circle-xmark" />
                            </div>
                            <a href="product-description.html">
                              <img
                                className="avatar-img rounded"
                                src="assets/img/products/product.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="product-description.html" className="item-name">
                              Benzaxapine Croplex
                            </a>
                            <span className="item-price">$849.99</span>
                            <span className="item-quantity">Quantity: 01</span>
                          </li>
                          <li className="clearfix">
                            <div className="close-icon">
                              <i className="fa-solid fa-circle-xmark" />
                            </div>
                            <a href="product-description.html">
                              <img
                                className="avatar-img rounded"
                                src="assets/img/products/product1.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="product-description.html" className="item-name">
                              Ombinazol Bonibamol
                            </a>
                            <span className="item-price">$1,249.99</span>
                            <span className="item-quantity">Quantity: 01</span>
                          </li>
                          <li className="clearfix">
                            <div className="close-icon">
                              <i className="fa-solid fa-circle-xmark" />
                            </div>
                            <a href="product-description.html">
                              <img
                                className="avatar-img rounded"
                                src="assets/img/products/product2.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a href="product-description.html" className="item-name">
                              Dantotate Dantodazole
                            </a>
                            <span className="item-price">$129.99</span>
                            <span className="item-quantity">Quantity: 01</span>
                          </li>
                        </ul>
                        <div className="booking-summary pt-3">
                          <div className="booking-item-wrap">
                            <ul className="booking-date">
                              <li>
                                Subtotal <span>$5,877.00</span>
                              </li>
                              <li>
                                Shipping <span>$25.00</span>
                              </li>
                              <li>
                                Tax <span>$0.00</span>
                              </li>
                              <li>
                                Total <span>$5.2555</span>
                              </li>
                            </ul>
                            <div className="booking-total">
                              <ul className="booking-total-list text-align">
                                <li>
                                  <div className="clinic-booking pt-3">
                                    <a className="apt-btn" href="cart.html">
                                      View Cart
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <div className="clinic-booking pt-3">
                                    <a className="apt-btn" href="product-checkout.html">
                                      Checkout
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* /Cart */}
                  {/* Notifications */}
                  <li className="nav-item dropdown noti-nav me-3 pe-0">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link p-0"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa-solid fa-bell" />{" "}
                      <span className="badge">5</span>
                    </a>
                    <div className="dropdown-menu notifications dropdown-menu-end ">
                      <div className="topnav-dropdown-header">
                        <span className="notification-title">Notifications</span>
                      </div>
                      <div className="noti-content">
                        <ul className="notification-list">
                          <li className="notification-message">
                            <a href="#">
                              <div className="notify-block d-flex">
                                <span className="avatar">
                                  <img
                                    className="avatar-img"
                                    alt="Ruby perin"
                                    src="assets/img/clients/client-01.jpg"
                                  />
                                </span>
                                <div className="media-body">
                                  <h6>
                                    Travis Tremble{" "}
                                    <span className="notification-time">18.30 PM</span>
                                  </h6>
                                  <p className="noti-details">
                                    Sent a amount of $210 for his Appointment{" "}
                                    <span className="noti-title">Dr.Ruby perin </span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="notification-message">
                            <a href="#">
                              <div className="notify-block d-flex">
                                <span className="avatar">
                                  <img
                                    className="avatar-img"
                                    alt="Hendry Watt"
                                    src="assets/img/clients/client-02.jpg"
                                  />
                                </span>
                                <div className="media-body">
                                  <h6>
                                    Travis Tremble{" "}
                                    <span className="notification-time">
                                      12 Min Ago
                                    </span>
                                  </h6>
                                  <p className="noti-details">
                                    {" "}
                                    has booked her appointment to{" "}
                                    <span className="noti-title">Dr. Hendry Watt</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="notification-message">
                            <a href="#">
                              <div className="notify-block d-flex">
                                <div className="avatar">
                                  <img
                                    className="avatar-img"
                                    alt="Maria Dyen"
                                    src="assets/img/clients/client-03.jpg"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6>
                                    Travis Tremble{" "}
                                    <span className="notification-time">6 Min Ago</span>
                                  </h6>
                                  <p className="noti-details">
                                    {" "}
                                    Sent a amount $210 for his Appointment{" "}
                                    <span className="noti-title">Dr.Maria Dyen</span>
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="notification-message">
                            <a href="#">
                              <div className="notify-block d-flex">
                                <div className="avatar avatar-sm">
                                  <img
                                    className="avatar-img"
                                    alt="client-image"
                                    src="assets/img/clients/client-04.jpg"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6>
                                    Travis Tremble{" "}
                                    <span className="notification-time">8.30 AM</span>
                                  </h6>
                                  <p className="noti-details">
                                    {" "}
                                    Send a message to his doctor
                                  </p>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* /Notifications */}
                  {/* User Menu */}
                  <li className="nav-item dropdown has-arrow logged-item">
                    <a
                      href="#"
                      className="dropdown-toggle nav-link"
                      data-bs-toggle="dropdown"
                    >
                      <span className="user-img" >
                            <Avatar url ={auth.photo && auth.photo} />
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <div className="user-header">
                        <div className="avatar avatar-sm">
                          <img
                            src="assets/img/patients/patient.jpg"
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="user-text">
                          <h6>Richard Wilson</h6>
                          <p className="text-muted mb-0">Patient</p>
                        </div>
                      </div>
                      <a className="dropdown-item" href="doctor-dashboard.html">
                        Dashboard
                      </a>
                      <a className="dropdown-item" href="profile-settings.html">
                        Profile Settings
                      </a>
                      <a className="dropdown-item" href="login.html">
                        Logout
                      </a>
                    </div>
                  </li>
                  {/* /User Menu */}
                </ul>
              </nav>
            </div>
          </header>
          {/* /Header */}
    </>
  )
}

export default Header













