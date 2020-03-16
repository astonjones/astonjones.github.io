import React, { Component } from 'react';

class Contact extends Component{

    render() {
        return(
            <section className="contact">
                <div className="contact-content">
                    <h3>Shoot me a Message!</h3>
                    <div className="contact-form">
                        <form>
                            <input type="text"></input>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact