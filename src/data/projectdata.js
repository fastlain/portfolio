// This file contains project information to be imported by React components 

export default projectData [
    {
        title: "Survey Says",
        description: "Survey Says uses the experimental \"Web Speech API\" to introduce voice-to-text to a fun and light-hearted game. Based on the ever-popular Family Feud game show, this responsive full-stack web application also incorporates user authentication, continuous integration & testing, and a Mongo database for storing questions/answers and user data.",
        technology: {
            frontEnd: ["HTML5", "CSS3", "jQuery"],
            backEnd: ["Node", "Express","MongoDB", "Mocha/Chai testing"],
            devOps: ["Travis CI", "Heroku"]
        },
        liveLink: "https://surveysaysgame.herokuapp.com/",
        gitHubLink: "https://github.com/fastlain/SurveySays",
        screenshot: "../public/images/surveySays_square.png"
    },
    {
        title: "Clam Tides",
        description: "A tide-finding application for clam diggers. Users can choose tide stations through a location-aware map interface and search for low tides with custom date ranges. This project helped solidify my understanding of core front-end web development technologies (HTML/CSS/JavaScript/jQuery). My goal was to learn integration of 3rd party APIs (Google Maps with Places library and NOAA CO-OPS [tides]) and JS libraries (Moment.js and Date Range Picker).",
        technology: ["HTML5", "CSS3", "jQuery"],
        liveLink: "https://fastlain.github.io/ClamTides/",
        gitHubLink: "https://github.com/fastlain/ClamTides",
        screenshot: "../public/images/clamTides_square.png"
    }

]