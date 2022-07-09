
// Import local files
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Import components
import Header from './components/Header/Header.jsx';
import Project from './components/Project/Project.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer.jsx';

// Import pages
import Pages from './pages';

// Import context providers
import { FadeIn } from './providers/FadeInContext';

// Import config files
import projectList from './config/project-list.json';

// Import global css
import './global-styles/visibility.css';
import './global-styles/base.css';
import './global-styles/frost.css';
import './global-styles/anims.css';

const App = () => {

    // on page load mount
    useEffect(() => {
        // assign a unique id for every project element that will be rendered
        projectList = projectList.map(item => {
            item.id = uuidv4();
            return item;
        })
    }, []);

    // initialize state for different page options
    /*
        ? note to self:
        in the future, these states should probably be in lower-level components. i'm pretty sure
        whenever a page changes currently, the entire app is re-rendered.
    */
    const [navPage, setNavPage] = useState('home');
    const [projects, setProjects] = useState(projectList);

    // sync page names with aliases
    // todo: use reducers here instead? idk
    // const pageAliases = {
    //     home: { loadPage: Pages.AboutPage },
    //     aboutMe: { loadPage: Pages.AboutPage },
    //     projects: { loadPage: Pages.ProjectsPage, data: { projects } },
    //     resume: { loadPage: Pages.ResumePage },
    //     // contact: { loadPage: Pages.ContactPage, data: {} }
    // }

    // *version 1 of this function
    // const getRenderedPage = () => {
    //     const page = pageAliases[navPage];

    //     if (page) {
    //         const component = page.loadPage(page.data || {}); 
    //         return component;
    //     }
    //     // else
    //     return <div>Not found</div>;
    // }

    const getRenderedPage = () => {
        switch (navPage) {
            case 'aboutMe':
                return <Pages.AboutPage/>
            case 'projects':
                return <Pages.ProjectsPage projects={projects}/>
            case 'resume':
                return <Pages.ResumePage/>
            case 'contact':
                return <Pages.ContactPage/>
            default:
                // return <div>Not found</div>;
                return <Pages.AboutPage/>
        }
    }

    return (
        <>
        <div className="wrapper">
            <Header/>
            <Navigation onChange={setNavPage} state={navPage}/>
            <main>
                {getRenderedPage()}
            </main>
        </div>
        <Footer/>
        </>
    );
}

export default App;
  