import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Smart Grocery Dispenser Using AI.',
        description: "Smart Grocery Dispenser is a Machine that has the capability to thick itself with the help of AI anddispense Groceries based on customer needs.",
        tools: ['Arduino','Sensors','Python','Arduino IDE','Firebase','Twilio'],
        role: 'Admin',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'College Event Promotion Webpage.',
        description: 'The Single Page Website To Promote Our College Event called TECTRIX2K23, which has played an important role in our college event makes a huge success.',
        tools: ['HTML','CSS','Javascripts','Bootstrap'],
        role: 'Front End Developer',
        code: '',
        demo: 'https://tectrix2k23.github.io/Tectrix2k23/',
        image: travel,
    },
    {
        id: 3,
        name: 'Static Webpage For Orphanage',
        description: 'This was a Demo Website That was created based on the theme of an Orphanage and this website was created for full educational purposes.',
        tools: ['HTML','CSS','Bootstrap'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Personal Voice Assistant.',
        description: "This is one of the recent projects which was started by the moto of creating a fully functioning Personal Assistant for Myself and to make my household Computers smart.",
        tools: ['Python','OpenAi-API'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },