//presets
import React from 'react';

//importing components
import AboutMe from "./about-me.jsx";
import Projects from "./projects.jsx";
import PersonalInfo from "./PersonalInfo/personal-info.jsx";
import MainPage from "./main-page.jsx";

class Content extends React.Component {

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
                return <MainPage/>;
        }
    };

    render () {
       return <div className = "content">
           <header>
               <div className = "circle-1"></div><div className = "circle-2"></div><div className = "circle-4"></div>
               <h1>{this.props.renderScreen}</h1>
           </header>
           <div className = "main-content">
               {this.handleRender(this.props.renderScreen)}
           </div>
       </div>
    }
}

export default Content;