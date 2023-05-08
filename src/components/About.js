import React from "react";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About us</h3>
                        <h1>WELCOME TO MAESTRO PIZINNI</h1>
                        <p>
                            Investigations, and yes we are the best in the world
                        </p>
                        <div className="about__btn">
                            <a href="" className="btn btn-smart">
                                READ MORE
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__img">
                            <img src="/img/pizza.jpg" alt="Pizza"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About