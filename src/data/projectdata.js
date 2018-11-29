// This file contains project information to be imported by React components 

const projectdata = [
    {
        title: "DeveloPeer",
        description: "This full-stack web app allows developers to seamlessly give and receive feedback on their projects. Users create survey forms and use credits (earned by giving feedback) to ask for reviews. They may also freely share the form link outside the site. DeveloPeer was built with React/Redux and uses an API built with Node/Express/MongoDB.",
        technology: [
            { category: "Front End", techs: ["React", "Redux", "React Router", "Enzyme/Jest", "CSS Modules"] },
            { category: "Back End", techs: ["Node", "Express", "MongoDB", "Mocha/Chai"] },
            { category: "Dev Ops", techs: ["Travis CI", "Heroku"] }
        ],
        liveLink: "http://www.michaelallain.com/",
        gitHubLink: "https://github.com/fastlain/developeer-client",
        screenshot: "images/developeer_square.png"
    },
    {
        title: "Survey Says",
        description: "Survey Says uses the experimental \"Web Speech API\" to introduce voice-to-text to a fun and light-hearted game. Based on the ever-popular Family Feud game show, this responsive full-stack web app also incorporates user authentication, continuous integration & testing, and a Mongo database for storing questions/answers and user data.",
        technology: [
            { category: "Front End", techs: ["HTML5", "CSS3", "jQuery"] },
            { category: "Back End", techs: ["Node", "Express", "MongoDB", "Mocha/Chai"] },
            { category: "Dev Ops", techs: ["Travis CI", "Heroku"] }
        ],
        liveLink: "https://surveysaysgame.herokuapp.com/",
        gitHubLink: "https://github.com/fastlain/SurveySays",
        screenshot: "images/surveySays_square.png"
    },
    {
        title: "Clam Tides",
        description: "A tide-finding application for clam diggers. Users can choose tide stations through a location-aware map interface and search for low tides with custom date ranges. Through this project, I solidified my understanding of core front-end web development technologies and learned to integrate 3rd party APIs (Google Maps with Places library and NOAA CO-OPS [tides]) and JS libraries (Moment.js and Date Range Picker).",
        technology: [
            { category: "Front End", techs: ["HTML5", "CSS3", "jQuery"] }
        ],
        liveLink: "https://fastlain.github.io/ClamTides/",
        gitHubLink: "https://github.com/fastlain/ClamTides",
        screenshot: "images/clamTides_square.png"
    }
]

export default projectdata;