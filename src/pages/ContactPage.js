import React from "react";

const ContactPage = () => {
  return (
    <div className="contact" id="contact">
      <div className="main-image">
        <div className="image"></div>
      </div>

      <div className="introduction">
        <div className="introduction-container">
          <p className="bio">HEY THERE !</p>
          <div className="name">
            <strong> My name is Anh Nguyen </strong>
          </div>

          <div className = "contact-container">
          <p className="bio">Creative Designer & Web Developer</p>
          <p className="bio-2">
            Currently, a student majors in Computer Science at San Jose State
            University, and wish to become a Java full stack developer.
          </p>
          <div>
          <span>Email: bonguyens2001@gmail.com</span>
          </div>
          <div>
          <span>Phone Number: (669)-265-8988</span>
          </div>
          </div>

          <div className="icons" id = "contact-icons"> 
            <a
              href="https://www.facebook.com/profile.php?id=100009838694132"
              id="fb"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a href="" id="ins">
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCaKKmZSStei8FyBLyoDgjgw"
              id="youtube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
