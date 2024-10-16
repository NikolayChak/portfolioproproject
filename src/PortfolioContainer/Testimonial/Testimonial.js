import React from 'react';
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeding";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import lady from "../../../src/assets/Testimonial/lady.png"
import mike from "../../../src/assets/Testimonial/mike.png";
import daisy from "../../../src/assets/Testimonial/daisy.jpg";
import man from "../../../src/assets/Testimonial/man.png";
import shape from "../../../src/assets/Testimonial/shape-bg.png"
import "./Testimonial.css";


function Testimonial(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    }
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1000: {
                items: 3,
            },
        }
    }

    return (
        <div>
            <ScreenHeading
                title={'Testimonial'}
                subHeading={'What My Client Say About Me'}
            />
            <section className='testimonial-section fade-in' id={props.id || ''}>
                <div className='container'>
                    <div className="row">
                        <OwlCarousel className='owl-carousel' id='testimonials-carousel' {...options}>

                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            I patronized Nikolay and when He delivered, I
                                            honestly
                                            fell in love with the project He is a very honest guy and
                                            he delivers ontime.
                                            <i className='fa fa-quote-left'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={daisy}
                                             alt="no internet connection"></img>
                                        <h5>Daisy Dominic</h5>
                                        <p>CEO InansGlobal</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            I patronized Nikolay and when He delivered, I
                                            honestly
                                            fell in love with the project He is a very honest guy and
                                            he delivers ontime.
                                            <i className='fa fa-quote-left'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={man}
                                             alt="no internet connection"></img>
                                        <h5>Daisy Dominic</h5>
                                        <p>CEO InansGlobal</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            I patronized Nikolay and when He delivered, I
                                            honestly
                                            fell in love with the project He is a very honest guy and
                                            he delivers ontime.
                                            <i className='fa fa-quote-left'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={mike}
                                             alt="no internet connection"></img>
                                        <h5>Daisy Dominic</h5>
                                        <p>CEO InansGlobal</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            I patronized Nikolay and when He delivered, I
                                            honestly
                                            fell in love with the project He is a very honest guy and
                                            he delivers ontime.
                                            <i className='fa fa-quote-left'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={lady}
                                             alt="no internet connection"></img>
                                        <h5>Daisy Dominic</h5>
                                        <p>CEO InansGlobal</p>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <div className="footer-image">
                <img src={shape} alt="Phot0 not responding"/>
            </div>
        </div>
    );
}

export default Testimonial;