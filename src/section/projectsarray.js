export const projectsarray = [
    {
        id:1,
        title:'Smile your way to happy',
        imageUrl:require("../assets/smileyourwaytohappy.webp"),
        mobileLayout: require("../assets/smileyourwaytohappymobile.webp"),
        laptopLayout: require("../assets/smileyourwaytohappylaptop.webp"),
        description: ["Project developed for Bernie Hayne. This project serves as a landing page for Bernie's first children book called smileyourwaytohappy. I was responsible for designing, developing, testing and deploying the application.",
            "The front-end was created using NextJs and styled using custom css."],
        websiteUrl: 'https://smileyourwaytohappy.com',
        ready:true,
        height: '35vh',
        year: '2022-23',
        tools:['NextJs'],
        helperImage: require("../assets/smileyourwaytohappyhelper.webp"),
        styles:{
            backgroundColor: '#D0503E',
            color: '#DFD3C3'
        }
    },
    {
        id:2,
        title:'Kzen8',
        imageUrl:require("../assets/Kzen8-project.png"),
        mobileLayout: require("../assets/kzen8mobile.png"),
        laptopLayout: require("../assets/kzen8laptop.png"),
        description: ["Project developed for Kzen8 Pty Ltd. This is an ongoing project serves as a landing page for a no-code business software platform provided by kzen8 and is part of a much bigger marketing campaign. I was responsible for designing, developing, testing and deploying the application.",
            "The front-end was created using React and styled using custom css."],
        websiteUrl: 'https://kzen8.com',
        ready:true,
        year: '2020-current',
        height: '45vh',
        tools:['React'],
        helperImage: require("../assets/kzen8helper.png"),
        styles:{
            backgroundColor: '#133A74',
            color: '#DFD3C3'
        }
    },
    {
        id:3,
        title:'Little Hideout Cafe',
        imageUrl:require("../assets/littlehideout.webp"),
        mobileLayout: require("../assets/littlehideoutmobile.png"),
        laptopLayout: require("../assets/littlehideoutlaptop.png"),
        description: ["Project developed for Little Hideout Cafe. The project's objective was to give the outdated website a new look and feel and also develop a custom booking feature. I was responsible for designing, developing, testing and deploying the application.",
            " The front-end was created using React and styled using custom css. The back-end server was developed using Express Js which is connected to a MongoDB database."],
        websiteUrl: 'https://littlehideoutcafe.com.au',
        ready:true,
        year: '2021',
        height: '40vh',
        tools:['react','node'],
        helperImage: require("../assets/littlehideouthelper.webp"),
        styles:{
            backgroundColor: '#FFFBF1',
            color: 'black'
        }
    },
    {
        id:4,
        title:'Studio K',
        imageUrl:require("../assets/studiok.webp"),
        mobileLayout: require("../assets/studio-k-mobile.png"),
        laptopLayout: require("../assets/studio-k-laptop.png"),
        description: ["Studio K is a platform that I developed and personally use to store all of my design ideas and assets. It is currently under construction and will be available to everyone soon." ,
    "Please, use the guest login to get a demo of the platform. Features are deliberately limited until the platform is ready to be released."],
        websiteUrl: 'https://studiok.pro',
        ready:true,
        year: '2022',
        height: '50vh',
        tools:['React','Redux','NodeJs','MongoDB'],
        styles:{
            backgroundColor: '#7C44F1',
            color: 'white'
        }
    },
    {
        id:5,
        title:'One Wish Cleaning',
        imageUrl:require("../assets/onewish.webp"),
        mobileLayout: require("../assets/onewishmobile.png"),
        laptopLayout: require("../assets/onewishlaptop.png"),
        description: ["Project developed for One Wish Cleaning Pty Ltd. The project's objective was to establish the client's online presence. I was responsible for designing, developing, testing and deploying the application.",
            "The website is developed using NextJs for better SEO performance. Due to the nature of client's business, SEO is highly prioritized for this project. I was also responsible for performing basic SEO for the site. The site has received a score of 100 in Google's Lighthouse audit."],
        websiteUrl: 'https://onewishcleaning.com.au',
        ready:true,
        year: '2020',
        height: '30vh',
        tools:['NextJs'],
        helperImage: require("../assets/onewishcleaninghelper.png"),
        styles:{
            backgroundColor: '#1096D0',
            color: '#DFD3C3'
        }
    },
    {
        id:6,
        title:'Kripson Store',
        imageUrl:require("../assets/clothingapp.jpeg"),
        mobileLayout: require("../assets/storemobile.png"),
        laptopLayout: require("../assets/storelaptop.png"),
        description: ["Kripson Store is a fully functioning online store which I created when I was learning React. I created this as a base to build upon if I ever want to open an online store.",
            " The front-end was created using React and Redux and styled using custom css.",
            "The back-end was created using Express(NodeJs) for the server and firebase as a database. Payment method is supported by Stripe."],
        websiteUrl: 'https://kripson-store.herokuapp.com/',
        ready: true,
        year: '2021',
        height: '40vh',
        tools:['react','node'],
        helperImage: require("../assets/kripsonstorehelper.png"),
        styles:{
            backgroundColor: '#0D0D0D',
            color: '#DFD3C3'
        }

    },
    // {
    //     id:6,
    //     title:'Kripson Eportfolio',
    //     imageUrl:require("../assets/Eportfolio.jpeg"),
    //     websiteUrl: 'https://portfolio-kripson.web.app/',
    //     mobileLayout: require("../assets/portfoliomobile.png"),
    //     laptopLayout: require("../assets/portfoliolaptop.png"),
    //     description: ["This is a showcase for my projects.",
    //         " The front-end was created using React and styled using custom css."],
    //     ready:true,
    //     tools:['react']
    // },
    {
        id:7,
        title:'Hans Driving',
        imageUrl:require("../assets/Drivingschool.jpeg"),
        mobileLayout: require("../assets/hansmobile.png"),
        laptopLayout: require("../assets/hanslaptop.png"),
        description: ["Project developed for Hans Driving Training Center. The project's objective was to establish the client's online presence. The website is a part of a bigger branding project for the client. I was responsible for designing, developing, testing and deploying the application. Hence, this is entirely my creation.",
            " The front-end was created using React and styled using custom css. The back-end server was developed using Express Js which is connected to a MongoDB database."],
        websiteUrl: 'https://hans-driving.web.app',
        ready:true,
        year: '2020',
        height: '25vh',
        tools:['react','node'],
        helperImage: require("../assets/hansdrivinghelper.png"),
        styles:{
            backgroundColor: '#171717',
            color: '#FFA500'
        }
    },
];
