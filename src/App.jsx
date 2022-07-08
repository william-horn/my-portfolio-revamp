
// Import local files
import React, { useState } from 'react';

// Import components
import Header from './components/Header/Header.jsx';
import Project from './components/Project/Project.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer.jsx';
import { v4 as uuidv4 } from 'uuid';

// Import pages
import pages from './pages';

// Import config files
import projectList from './config/project-list.json';

// Import global css
import './global-styles/visibility.css';
import './global-styles/base.css';
import './global-styles/frost.css';

const App = () => {

    // assign a unique id for every project element that will be rendered
    projectList = projectList.map(item => {
        item.id = uuidv4();
        return item;
    })

    // initialize state for different page options
    const [navPage, setNavPage] = useState('home');
    const [projects, setProjects] = useState(projectList);

    // sync page names with aliases
    const pageAliases = {
        home: { loadPage: pages.AboutPage },
        aboutMe: { loadPage: pages.AboutPage },
        projects: { loadPage: pages.ProjectsPage, data: { projects } },
        resume: { loadPage: pages.ResumePage },
        // contact: { loadPage: pages.ContactPage, data: {} }
    }

    const getRenderedPage = () => {
        const page = pageAliases[navPage];
        if (page) return page.loadPage(page.data || {});
        // else
        return <div>Not found</div>;
    }

    return (
        <div className="wrapper">
            <Header/>
            <Navigation onChange={setNavPage} state={navPage}/>
            <main>
                {getRenderedPage()}
            </main>
            <Footer/>
        </div>
    );
}

export default App;
  