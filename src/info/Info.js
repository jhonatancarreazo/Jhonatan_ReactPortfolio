import self from "../img/self.webp"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.webp"
import mock5 from "../img/mock5.webp"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jhonatan",
    lastName: "Carreazo",
    initials: "JC", // the example uses first and last, but feel free to use three or more if you like.
    position: "Fronted web Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Colombia'
        },
        
        {
            emoji: "📧",
            text: "jhonatan.carreazoa@gmail.com"
        }
    ],
    socials: [
       
        {
            link: "https://github.com/jhonatancarreazo",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jhonatancarreazo/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I’m Jhonatan Carreazo, a Frontend Web Developer focused on building modern, responsive, and user-friendly web applications.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Estilo Moi",
            live: "https://estilo-moi-store.web.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/jhonatancarreazo/estilo-moi-store", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Ethnos",
            live: "https://jhonatancarreazo.github.io/Ethnos/",
            source: "https://github.com/jhonatancarreazo/Ethnos.git",
            image: mock2
        },
        {
            title: "Landing page profesional",
            live: "https://landing-asistente.vercel.app/",
            source: "https://github.com/jhonatancarreazo/landing_page_profesional",
            image: mock3
        },
        {
            title: "Personal Portfolio Website",
            live: "https://jhonatancarreazo.dev",
            source: "https://github.com/jhonatancarreazo/Jhonatan_ReactPortfolio",
            image: mock4
        },
        {
            title: "Mom Life & Lifestyle Blog",
            live: "https://gisecassiani.netlify.app/",
            source: "https://github.com/jhonatancarreazo/gise-cassiani",
            image: mock5
        },
    ]
}