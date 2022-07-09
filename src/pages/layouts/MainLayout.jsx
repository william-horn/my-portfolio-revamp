
import React, { useEffect, useState, useRef } from 'react';
import pages from '..';
import { useFadeInContext } from '../../providers/FadeInContext';

// ? note to self: create fading transitions for rendering new pages

const MainLayout = ({ title, children }) => {
    // const watchState = useFadeInContext();
    // const pageSectionDiv = useRef();

    // const [state, setState] = useState(true);

    // useEffect(() => {
    // }, [watchState]);

    // const titleToId = title => 
    //     title.replace(' ', '-').toLowerCase();


    return (
        <section className="fade-in page-section text-center center-wide col-9 mg-7-top mg-4-top-all pd-4 pd-7-bottom">
            {/* <h2 id={titleToId(title) + '-title'}>{title}</h2> */}
            <h2>{title}</h2>
            <div className="mg-6-bottom-all">{children}</div>
        </section>
    );
}

export default MainLayout
