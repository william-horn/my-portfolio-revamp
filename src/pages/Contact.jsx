
import React from 'react';
import MainLayout from './layouts/MainLayout';

const Contact = function() {
    return (
        <MainLayout title="Contact Me">
            <p className="paragraph text-size-3">
                If you would like to get in touch with me, here are a few of my contacts where I am the most active:
            </p>
            <p className="text-size-3">
                Discord: <span style={{color: "#de17de"}}>happy dragorn#6453</span>
            </p>
            <p className="text-size-3">
                {/* note: store email somewhere else and load it here */}
                Email: <span style={{color: "#3eb3fb", textDecoration: "underline"}}><a href="mailto:williamjosephhorn@gmail.com">williamjosephhorn@gmail</a></span>
            </p>
        </MainLayout>
    );
}

export default Contact;

