import * as React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Typography from '@mui/material/Typography';
import AddCircle from '@mui/icons-material/Add';
import { faqContent } from "./faqItems";


export default function Faq() {
    return(
        <section className="section_faq">
            <div className="padding-global background-color-grey">
                <div className="container-small">
                    <div className="padding-section-large">
                        <AnimationOnScroll  animateIn="animate__fadeInUp" animateOnce={true}>
                            <div className="slide-from-bottom">
                                <h2 className="heading-style-h2 text-align-center margin-vertical margin-medium">
                                    Frequently Asked
                                </h2>
                                <p className="text-size-medium text-align-center">
                                    Did we miss something? Drop us a line at
                                    <a href="mailto:support@changex.io?subject=changex%20website"
                                       className="text-style-link">support@changex.io
                                    </a>
                                    - we’d love to hear from you.</p>
                            </div>
                                <div className="w-layout-grid faq-grid margin-vertical margin-huge slide-from-bottom">
                                    {faqContent.map((faq, index) => {
                                        return (
                                            <Accordion className="faq-question-bar w-inline-block">
                                                <AccordionSummary
                                                    expandIcon={<AddCircle />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header">
                                                    <Typography className="heading-style-h5">
                                                        {faq.title}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography className="text-size-medium text-color-darkgrey">
                                                        {faq.content}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        )})}
                                </div>
                            <div className="slide-from-bottom">
                                <h3 className="heading-style-h3 text-align-center">Still got questions?</h3>
                                <p className="text-size-medium text-align-center margin-vertical margin-small">
                                    Drop us a line at
                                    <a href="mailto:support@changex.io?subject=changex%20website"
                                       className="text-style-link">support@changex.io
                                    </a>
                                    , we’d love to hear from you.
                                </p>
                                <div id="w-node-a04bfb96-6220-1485-08a2-45cfc46a9303-0541c3c1"
                                     className="button-group centered-items">
                                    <a id="w-node-ed6b061c-b0a7-01e0-7684-22ee82e02d75-0541c3c1"
                                       href="mailto:support@changex.io?subject=changex%20website"
                                       className="button is-large is-secondary  w-button">Contact Us
                                    </a>
                                </div>
                            </div>
                        </AnimationOnScroll>>
                    </div>
                </div>
            </div>
        </section>
    )
}
