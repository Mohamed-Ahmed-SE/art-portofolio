import React, { useState } from 'react';
import img1 from '../assets/images/project-1.jpg'
import img2 from '../assets/images/project-2.jpg'
import img3 from '../assets/images/project-3.jpg'
import img4 from '../assets/images/project-4.jpg' 
import img5 from '../assets/images/project-5.jpg' 
import img6 from '../assets/images/project-6.jpg' 
import img7 from '../assets/images/preview.png'
import img8 from '../assets/images/Screenshot 2025-07-01 230225.png'

const projects = [
    {
        id: 1,
        imgUrl: img1,
        title: "Sunset Over Water",
        text: "Acrylic on canvas, 2023"
    },
    {
        id: 2,
        imgUrl: img2,
        title: "Urban Reflections",
        text: "Digital Art, 2024"
    },
    {
        id: 3,
        imgUrl: img3,
        title: "Forest Pathway",
        text: "Watercolor, 2022"
    },
    {
        id: 4,
        imgUrl: img4,
        title: "Portrait of a Dreamer",
        text: "Charcoal Sketch, 2023"
    },
    {
        id: 5,
        imgUrl: img5,
        title: "Abstract Thoughts",
        text: "Mixed Media, 2024"
    },
    {
        id: 6,
        imgUrl: img6,
        title: "Night Lights",
        text: "Oil on Canvas, 2023"
    },
]


const projects2 = [
    {
        id: 1,
        imgUrl: img7,
        title: "AVENTADOR",
        text: "car aventador, 2025"
    },
    {
        id: 2,
        imgUrl: img8,
        title: "ANIME Watcher",
        text: "Anime watcher, 2025"
    },
    {
        id: 3,
        imgUrl: img5,
        title: "Abstract Thoughts",
        text: "Mixed Media, 2024"
    },
    

]





const Tab1 = () => {
    return (
        <>
            <div className="project-cards container w-100">
                <div className="row justify-content-center row-gap-4 w-100 mx-auto">
                    {projects.map((item) => {
                        return (
                            <div key={item.id} className='card-spacing col-12 col-md-6 col-lg-4'>
                                <div className="project-card card text-bg-dark ">
                                    <img src={item.imgUrl} className="card-img" alt={item.title} />
                                    <div className="card-img-overlay">
                                        <h3 className="card-title">{item.title}</h3>
                                        <i className="card-text">{item.text}</i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const Tab2 = () => {
    return (
        <>
        <div className="project-cards container w-100">
                <div className="row justify-content-center row-gap-4 w-100 mx-auto">
                    {projects2.map((item) => {
                        return (
                            <div key={item.id} className='card-spacing col-12 col-md-6 col-lg-4'>
                                <div className="project-card card text-bg-dark ">
                                    <img src={item.imgUrl} className="card-img" alt={item.title} />
                                    <div className="card-img-overlay">
                                        <h3 className="card-title">{item.title}</h3>
                                        <i className="card-text">{item.text}</i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const Tab3 = () => {
    return (
        <>
            <p className="text-light w-75 fs-5 mx-auto">
                No projects Here Yet
            </p>
        </>
    )
}

const Projects = () => {
    const [activeTab, setActiveTab] = useState("tab1")
    const activeClass = (tabName) => {
        return activeTab === tabName ? "active " : ""
    }
    return (
        <>
            <section id="projects">
                <div className="projects-section">
                    <h2 className="section-title text-light mb-3 fs-1">My Projects</h2>
                    <p className='sup-paragraph w-75 mb-5'>Welcome to my art portfolio. Here you can explore a selection of my recent artworks, spanning various styles and mediums.</p>
                    <div style={{ padding: "0 8.5%" }} className="container projects-tabs">
                        <ul className='projects-nav row'>
                            <li className={`${activeClass("tab1")}col-4`}><button onClick={() => setActiveTab("tab1")}>1st Section</button></li>
                            <li className={`${activeClass("tab2")}col-4`}><button onClick={() => setActiveTab("tab2")}>2nd Section</button></li>
                            <li className={`${activeClass("tab3")}col-4`}><button onClick={() => setActiveTab("tab3")}>3rd Section</button></li>
                        </ul>
                    </div>
                    <div className='w-100 mt-4'>
                        {activeTab === 'tab1' && <Tab1 />}
                        {activeTab === 'tab2' && <Tab2 />}
                        {activeTab === 'tab3' && <Tab3 />}
                    </div>
                </div>
            </section>
        </>
    );
}

export default React.memo(Projects);
