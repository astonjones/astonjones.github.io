import React, { Component } from 'react';
import { Button } from '@material-ui/core';

const Home = () => {
    return (
        <section className="hero container">
            <div className="hero-content">
                <h1>      <span>Hi,</span>
                    <br /><span>I'm Aston</span>
                    <br /><span>Web Developer &</span>
                    <br /><span>Aspiring Software Engineer</span>
                </h1>
            </div>
            <div className="hero-buttons">
                <Button style={{ marginRight: "30px"}} href="/about" variant="outlined" color="primary">About</Button>
                <Button href="/work" variant="outlined" color="primary">Work</Button>
            </div>
        </section>
    )
}

export default Home;
