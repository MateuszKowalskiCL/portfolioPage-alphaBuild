//presets
import React from 'react';

//importing components
import AboutMe from "./CV-pages/AboutMe/about-me.jsx";
import Projects from "./CV-pages/Projects/projects.jsx";
import PersonalInfo from "./CV-pages/PersonalInfo/personal-info.jsx";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuDisplay: "none",
            titlesArray: ["AboutMe", "Projects", "PersonalInfo"]
        }

    }

    handleRender = (renderScreen) => {
        switch(renderScreen) {
            case "AboutMe":
                return <AboutMe/>;
                break;
            case "Projects":
                return <Projects/>;
                break;
            case "PersonalInfo":
                return <PersonalInfo/>;
                break;
            default:
                return <AboutMe/>;
        }
    };

    render () {
       return <div className = "main-content">
           {this.handleRender(this.props.renderScreen)}
       </div>
    }
}

export default Content;