
const URI = "http://localhost/training/Javascript/project1/github-clone/"

var userInfo = {
    name: "Khaled Youssef",
    username: "khaled-youssef",
    bio: "Software Engineer",
    image: "assets/img/profile-img.jpeg",
};

var followersData= {
    followers: 25,
    following: 67,
    starCount: 150,
};

var mainData = {
    location : "Egypt",
    city: "Giza",
    email: "khalid.yousif@gmail.com",
    link: {
        title: "Github Link",
        href: "#"
    }
};

var organizations = [
    {
        name: "bsmart",
        private: false,
        image: "assets/img/favicon.png"
    }
];

var repos = [
    {
        title: "Project 1",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia sunt hic accusantium vitae dicta neque eos aliquid obcaecati, impedit numquam blanditiis quas ab commodi, ut fugiat voluptatibus pariatur voluptatum.",
        language:  "Javascript", 
        updateTime : "Aug 24, 2021",
        public: true,
        tags: [{
            name: "Reactjs",
            link: "#",
        },{
            name: "Node",
            link: "#",
        },
        {
            name: "HTML",
            link: "#",
        },
    ]
    }
];

function userInfoHandler({name, username, bio, image}){
    const userInfoContainer =`
    <div class="user-image">
        <img src="${URI}${image}" alt="${name} Profile Image" srcset="">
    </div>
    <div class="maindata">
        <h1>${name}</h1>
        <p>${username}</p>
        <p class="jobTitle">${bio}</p>
        <button class="actionButtton">Follow</button>
    </div>
    `;
    return userInfoContainer;


};


function followersHander({following, followers, starCount}){
    const followersHanderContainer = `
    <span class="text-sm">${followers } followers  · ${ following } following</span>
    `
    return followersHanderContainer;
}


function mainDataHandler ({location, city, email, link}) {

    const mainDataContainer = `
    <span class="location d-block">${city}, ${location}</span>
    <span class="email d-block"><a href="mailto:${email}">${email}</a></span>
    <span class="link d-block"><a href="${link.href}"> ${link.title}</a></span>
    ` 
return mainDataContainer;

}

console.log(document.querySelector(".userData"))
document.querySelector(".userData").innerHTML = userInfoHandler(userInfo)
document.querySelector(".followers").innerHTML = followersHander(followersData)

// console.log(followersHander(followersData));
// console.log(mainDataHandler(mainData));
