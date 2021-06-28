import React from 'react';
import './Css/Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="gettouch-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="gt-text">
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                <p className="mt-2"><a href="https://www.youtube.com/channel/UCxZUGWlbYDbq9siG2wtFKkA"
                                      target="_blank" rel="noreferrer" 
                                      style={{color: '#fafafa'}}
                                  >NICO CANDIOTI FIT</a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gt-text">
                                <i className="fa fa-instagram"></i>
                                <p className="mt-2"><a href='https://www.instagram.com/nicocandiotifit/?hl=es-la' 
                                      style={{color: '#fafafa'}}>@nicocandiotifit</a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gt-text">
                                <i className="fa fa-envelope"></i>
                                <p className="mt-2">
                                    <a 
                                    href="mailto:nicocandiotifit@gmail.com"
                                    style={{color: '#fafafa'}}
                                    >nicocandiotifit@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;