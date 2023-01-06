import * as React from 'react'
import Quote from "../Quote";

export default function AboutHero( { heroObj } ){
    return (
        <section id="inner-hero">
            <div className="padding-global relative">
                <div className="container-large ">
                    <div id="inner-hero-title" className="hero_about_content-wrapper padding-vertical padding-small animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="title_wrapper_hero_about max-width-slarge" >
                            <div className="center-content z-index-1">
                                <div className="">
                                    <h6 className="heading-style-h6  text-color-primary text-left-mobile">
                                        {heroObj.titleObj.h1}
                                    </h6>
                                </div>
                                <div className="margin-vertical margin-small ">
                                    <div className="">
                                        <h1 className="heading-style-h1 text-left-mobile animate__animated animate__fadeInUp animate__delay-1s">
                                            {heroObj.titleObj.h2}
                                        </h1>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-weight-normal animate__animated animate__fadeInUp animate__delay-1s">
                                        {heroObj.titleObj.h3}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${heroObj.quoteObject.img ? '' : 'hide'}`}>
                        <Quote quoteObject={heroObj.quoteObject}/>
                    </div>
                    <div className="margin-top-small">
                        <div className="text-weight-normal animate__animated animate__fadeInUp animate__delay-1s">
                            {heroObj.titleObj.h4}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
