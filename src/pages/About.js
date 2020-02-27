import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import VirtualizedList from '../components/VirtualizedList';

const About = () => {
    return (
        <section className="about">
            <div className="about-content container">
                <h1>A little about me</h1>
                <p className="about-bio">
                    My name is Aston Jones, I grew up in Vidor, Texas. I have a passion for
                    learning and ambition to create things. I am currently
                    a junior at Lamar University. I consider my self a junior fullstack
                    web developer and I am working on my skills all the time.
                    I aim to one day become a software engineer. I am currently looking for
                    an internship while I am getting through school.
                </p>
            </div>
            <div className="skills container">
            <VirtualizedList>
            </VirtualizedList>
            {/* <Carousel>
                <Carousel.Item>
                    <h5>Java</h5>
                </Carousel.Item>
                <Carousel.Item>
                    <h5>JavaScript</h5>
                </Carousel.Item>
                <Carousel.Item>
                    <h5>React</h5>
                </Carousel.Item>
                <Carousel.Item>
                    <h5>MongoDB</h5>
                </Carousel.Item>
                <Carousel.Item>
                    <h5>NodeJS</h5>
                </Carousel.Item>
                <Carousel.Item>
                    <h5>REST</h5>
                </Carousel.Item>
                <Carousel.Item>
                    <h5>NodeJS</h5>
                </Carousel.Item>
            </Carousel> */}
            </div>
        </section>
    )
}

export default About;