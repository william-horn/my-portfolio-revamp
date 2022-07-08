

import React from 'react';
import MainLayout from './layouts/MainLayout';
import Project from '../components/Project/Project';

const Projects = function({ projects }) {
    return (
        <MainLayout title="Projects">
            <p className="paragraph text-size-3 mg-10-bottom">
                Here are some of my recent projects:
            </p>

            {projects.map(project => {
                return <Project key={project.id} project={project}/>
            })}
        </MainLayout>
    );
}

export default Projects;