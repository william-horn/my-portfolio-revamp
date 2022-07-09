
import React from 'react';
import MainLayout from './layouts/MainLayout';

const About = function() {
    return (
        <MainLayout title="About Me">
            <p className="paragraph text-size-3">
                Hello! My name is Will. I'm a programmer and computer science enthusiast who spends most of his time
                working on personal virtual projects while trying to learn as much as possible from them. My passions are
                coding and mathematics...
            </p>
            <p className="paragraph text-size-3">
                More coming soon
            </p>
        </MainLayout>
    );
}

export default About;