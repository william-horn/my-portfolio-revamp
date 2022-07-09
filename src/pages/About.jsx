
import React from 'react';
import MainLayout from './layouts/MainLayout';

const About = function() {
    return (
        <MainLayout title="About Me">
            <img style={{
                objectFit: "cover", 
                objectPosition: "25% 65%", 
                width: "350px", 
                height: "300px", 
                filter: "sepia()",
                borderRadius: "20px"
            }} 
            src="./assets/images/about-me-img.jpg"
            className="about-me-img mg-5-top mg-10-bottom"
            />
            <p className="paragraph text-size-3">
                Hello! My name is Will. I'm a programmer and computer science enthusiast who spends most of his time
                working on personal virtual projects and teaching himself new technologies. I'm a former math tutor/teacher
                with a burning passion for mathematics and education, and someday I would love to merge my skills in web development
                with my devotion towards math education and create amazing tools for future students - myself included. 
            </p>
            <p className="paragraph text-size-3 col-8 center-wide">
                Aside from that, I have a ton of hobbies and other skills that I love working on whenever I get the chance.
                Some of those hobbies include:
            </p>

            <ul className="resume-list mg-4-bottom-all mg-10-bottom">
                <li>Learning Music</li>
                <li>Video Editing</li>
                <li>Woodworking</li>
                <li>Cooking</li>
                <li>Drawing</li>
                <li>Graphic Design</li>
                <li>Exercising</li>
            </ul>

            <p className="paragraph text-size-3 col-8 center-wide">
                That's about it for now!
            </p>
        </MainLayout>
    );
}

export default About;