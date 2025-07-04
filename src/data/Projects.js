const Projects = {
    "Personal Website":{
        title:"PERSONAL WEBSITE",
        type:"Personal",
        languages:"React, Bootstrap, Reactstrap",
        date:"2025",
        video:"https://www.youtube.com/embed/eaFgN0M5Luc",
        description:`Simple front end application made using react and bootstrap.
        Will be integrating full stack features in the future using python,
        Flask, and PostgreSQL.`
    },
    "Save the bees":{
        title: "SAVE THE BEES",
        type: "Intro to Software Engineering",
        languages: "Angular, Java, SpringBoot",
        date: "2024",
        video: "https://www.youtube.com/embed/E_Qqq0QTd1Q",
        description: `Full stack application made using Angular, Java, and Spring Boot.
        Users can add needs they want to donate money towards to their funding basket, wish-list, or subscription list.
        Admins can create, delete, and edit needs available to users.
        This application was made in a team of 5, with my focus being primarily on the back-end JSON manipulation and REST controllers.
        On top of this I developed both front and backend for the wish-list.`
    },
    "Night clubs":{
        title: "NIGHT CLUBS",
        type: "Web Engineering",
        languages: "React, Bootstrap, Reactstrap, Python, Flask, PostgreSQL",
        date: "2024",
        video: "https://www.youtube.com/embed/7Grs6ycbbEY",
        description: `Full stack application made entirely by me using React, Bootstrap, Python, Flask, and PostgreSQL.
        Users can add, delete, filter, and edit nightclubs.
        Various UI functionalities have been implemented to make this application look good on all device sizes.`
    },
    "Chat Room":{
        title: "CHAT ROOM",
        type: "Web Engineering",
        languages: "Python, PostgreSQL",
        date: "2024",
        video: "https://www.youtube.com/embed/lyGGmOv5pfY",
        description: `Check out my code relating to SQL database manipulations!`
    },
    "Kaizen Habits": {
        title: "KAIZEN HABITS",
        type: "Personal",
        languages: "React Ts, ASP.NET, MongoDB, AWS BeanStalk, AWS Amplify, AWS Cloudfront, Nginx, XUnit",
        date: "2025",
        video: "https://www.youtube.com/embed/SlBoB0DIEW4",
        description: `Full stack web application deployed to AWS.
        Database hosted by MongoDB Atlas, server by AWS Beanstalk, and front end by AWS Amplify.
        AWS CloudFront is used to allow HTTPS requests while using restrictive browsers such as Safari that restrict cross-domain cookies.
        CloudFront masks the server and front end behind the same domain.
        Ideated and designed application using Figma and UML diagrams.
        Secure password hashing and storing over HTTPS requests.
        Session keys are held for persistent authentication.
        Users can modify habits and view long-term statistics such as their current streak or longest streak, and see how many days they stuck with completing all their habits.
        Login Using Username: Guest, Password: HabitTracker, in order to test the application yourself!`,
        link:"https://kaizenhabits.net",
        linkTitle:"kaizenhabits.net"
    }
}

export default Projects;