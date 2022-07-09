
import React from 'react';
import MainLayout from './layouts/MainLayout';

const Contact = function() {
    return (
        <MainLayout title="Contact Me">
            <div className="mg-10-bottom mg-3-top-all">
                <p className="paragraph text-size-3">
                    If you would like to get in touch with me, here are a few of my contacts where I am the most active:
                </p>
                <p className="text-size-3">
                    Discord: <span style={{color: "#de17de"}}>happy dragorn#6453</span>
                </p>
                <p className="text-size-3" style={{wordBreak: "break-all"}}>
                    {/* note: store email somewhere else and load it here */}
                    Email: <span style={{color: "#3eb3fb", textDecoration: "underline"}}><a href="mailto:williamjosephhorn@gmail.com">williamjosephhorn@gmail</a></span>
                </p>
            </div>
            <p className="text-size-4">Send me an Email!</p>
            <form className="pd-4 mg-3-bottom-all col-7 center-wide on-small-become-col-12" action="" style={{backgroundColor: "#232d35"}}>
                <label htmlFor="email-author">Name:</label>
                <input name="email-author" id="email-author" type="text" placeholder="..." required/>

                <label htmlFor="email-sender">Your Email:</label>
                <input name="email-sender" id="email-sender" type="email" placeholder="..." required/>

                <label htmlFor="email-content">Message:</label>
                <textarea name="email-content" id="email-content" cols="30" rows="10" required></textarea>

                <button type="submit">Send</button>
            </form>
        </MainLayout>
    );
}

export default Contact;

