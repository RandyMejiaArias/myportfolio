import React from 'react';
import illustration from '../images/undraw_winter_walk_2yac.svg';
import ContactForm from '../components/contactForm';

export default () =>(
    <header className="bg-blue-900">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="text-6xl font-bold text-white ">Randy Mejía Arias</h1>
                    <p className="text-xl font-light text-white">Full Stack Developer</p>
                </div>
                <img src={illustration} style={{height: "300px"}}></img>
            </div>

            <div>
                <ContactForm />
            </div>
        </div>
    </header>
);