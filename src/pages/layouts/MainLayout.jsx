
import React from 'react';

const MainLayout = ({ title, children }) => {

    const titleToId = title => 
        title.replace(' ', '-').toLowerCase();

    return (
        <section className="page-section text-center center-wide col-9 mg-7-top mg-4-top-all mg-10-bottom">
            {/* <h2 id={titleToId(title) + '-title'}>{title}</h2> */}
            <h2>{title}</h2>
            <div className="mg-6-bottom-all">{children}</div>
        </section>
    );
}

export default MainLayout
