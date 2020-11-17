import React from 'react';
import { Card } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Servicios() {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,        
        //navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
    
            }
        },
    };
    return (
        <>            
            <OwlCarousel
                className="owl-theme mt-5"
                loop
                margin={10}
                nav
                {...options}                
            >
                <div className="item">
                    <Card className="text-center border-0">
                        <Card.Body>
                        <Card.Title>
                                <FontAwesomeIcon
                                    icon={["fa", "home"]} 
                                    size="2x"
                                    />
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
                <div className="item">
                    <Card className="text-center border-0">
                        <Card.Body>
                            <Card.Title>
                                <FontAwesomeIcon
                                    icon={["fa", "truck"]} 
                                    size="2x"
                                    />
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="item">
                    <Card className="text-center border-0">
                        <Card.Body>
                            <Card.Title>
                                <FontAwesomeIcon
                                    icon={["fa", "headset"]} 
                                    size="2x"
                                    />
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="item">
                    <Card className="text-center border-0">
                        <Card.Body>
                        <Card.Title className="justify-content-center">
                                <FontAwesomeIcon
                                    icon={["fa", "credit-card"]} 
                                    size="2x"
                                    />
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
            </OwlCarousel>
        </>
    )
}

