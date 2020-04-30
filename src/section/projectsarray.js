export const projectsarray = [
    {
        id:1,
        title:'Hans Driving Training Center',
        imageUrl:require("../assets/Drivingschool.jpeg"),
        mobileLayout: require("../assets/hansmobile.png"),
        laptopLayout: require("../assets/hanslaptop.png"),
        description: ["This project is entirely my creation and it is also one of the biggest projects I have ever undertaken.",
            " The front-end was created using React and styled using custom css. The website is a part of a bigger branding project which is also available under my projects section.",
            "Since I designed, coded, tested and deployed the application, it is safe to say that I was a one man show when it comes to this project."],
        websiteUrl: 'https://hans-driving.web.app',
        ready:true,
        tools:['react','node']
    },
    {
        id:2,
        title:'Kripson Clothing Store',
        imageUrl:require("../assets/clothingapp.jpeg"),
        mobileLayout: require("../assets/storemobile.png"),
        laptopLayout: require("../assets/storelaptop.png"),
        description: ["Kripson Store is a fully functioning online store which I created when I was learning React. I created this as a base to build upon if I ever want to open an online store.",
            " The front-end was created using React and Redux and styled using custom css.",
            "The back-end was created using Express(NodeJs) for the server and firebase as a database. Payment method is supported by Stripe."],
        websiteUrl: 'https://kripson-store.herokuapp.com/',
        ready: true,
        tools:['react','node']

    },
    {
        id:3,
        title:'Kripson Eportfolio',
        imageUrl:require("../assets/Eportfolio.jpeg"),
        websiteUrl: 'https://portfolio-kripson.web.app/',
        mobileLayout: require("../assets/portfoliomobile.png"),
        laptopLayout: require("../assets/portfoliolaptop.png"),
        description: ["This is a showcase for my projects.",
            " The front-end was created using React and styled using custom css."],
        ready:true,
        tools:['react']
    },
    {
        id:4,
        title:'Ruby',
        imageUrl:require("../assets/ruby.jpeg"),
        ready:false,
        tools:['react','node']
    },
    {
        id:5,
        title:'Bootcamp',
        imageUrl:require("../assets/Bootcamp.png"),
        ready:false,
        tools:['laravel']
    },
    {
        id:6,
        title:'FaceDetection',
        imageUrl:require("../assets/facedetection.jpeg"),
        ready:false,
        tools:['react','node']
    }

];
