import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

const Work = () => {
    return (
        <div className="work-content container">
            <div className="work-text">
                <h3>Here's a little bit of work I've done</h3>
            </div>
            <div className="work-cards">
            <div className="card-work">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-exercising-in-gym-royalty-free-image-1569876689.jpg?resize=980:*" />
                <Card.Body>
                    <Card.Title>Exercise Tracker</Card.Title>
                    <Card.Text>
                    Built with react, just a simple exercise tracker. Built on an API that I made.
                    Give it a shot!
                    </Card.Text>
                    <Button variant="primary" href="http://floating-cliffs-22487.herokuapp.com/">To the Site</Button>
                </Card.Body>
            </Card>
            </div>
            <div className="card-work">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/V7aPfCUFULF6xhD5HvL5TtWVb_A=/0x0:4741x3161/920x613/filters:focal(1992x1202:2750x1960):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59535149/shutterstock_625918454.0.jpg" />
                <Card.Body>
                    <Card.Title>YelpCamp</Card.Title>
                    <Card.Text>
                    Sign up, upload camps, and comment on others. Built with an API that I made Comes with a lot of 
                    functionality, but not yet mobile friendly. I'm still working on it!
                    </Card.Text>
                    <Button variant="primary" href="https://secret-bayou-18204.herokuapp.com/">To the site</Button>
                </Card.Body>
            </Card>
            </div>
            </div>
        </div>
    )
}

export default Work;