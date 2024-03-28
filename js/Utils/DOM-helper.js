import { preload, userApiReposData, userName} from "./constants.js"
export const preloadStatus = preload.classList.remove ("hidden")
export function insertDataToDom (className, insertingValue){
    document.querySelector(`.${className}`).innerHTML =  insertingValue
}

//Main Data Handlers
export function userInfoHandler({name, login, bio, avatar_url}){
    const userInfoContainer =`
    <div class="user-image">
        <img src="${avatar_url}" alt="${login} Profile Image" srcset="">
    </div>
    <div class="maindata">
        <h1>${name}</h1>
        <p>${login}</p>
        <p class="jobTitle">${bio ? bio : " "}</p>
        <button class="actionButtton">Follow</button>
    </div> `;
    insertDataToDom ("userData", userInfoContainer)
};

export function followersHandler({following, followers, public_repos} ){
    const followersHanderContainer = `
    <span class="text-sm"><a href = "https://github.com/${userName}?tab=followers">${followers } followers</a>   ·   <a href = "https://github.com/${userName}?tab=following"> ${ following } following</a></span>
    <p class="text-sm">${public_repos} Public Repos</p>
    `
    insertDataToDom ("followers", followersHanderContainer)
}


export function mainDataHandler ({location,  email, html_url}) {
    const mainDataContainer = `
    <span class="location d-block">${location}</span>
    <span class="email d-block"><a href="mailto:${email != null ? email: ""}">${email != null ? email: ""}</a></span>
    <span class="link d-block"><a href="${html_url}">Website</a></span>
    `
    document.querySelector(".personal-data").innerHTML =  mainDataContainer;
}


// Handling and printing Orgainzations Data

export function organizationDataHandler({company}){
    var organizationData = `<div class="organization-data"><span class="organizationname "> ${company}</span></div>`
    company ?   insertDataToDom ("organizations", organizationData)  : ""

}



// Handling and printing Repos data
export  function reposDataHandler (reprasoteries){
    reprasoteries.map ((reprasotery) =>{
        if (reprasotery.visibility == "public"){
        var repodata = `
        <article class="card reprosetory">
        <h3><a href="${reprasotery.html_url}">${reprasotery.name}</a> <span class="privacy text-sm">${reprasotery.visibility == "public" ? "Public" : "Private"}</span></h3>
        <p class="project-description">${reprasotery.description}</p>
        <div class="tags">
            <ul class="tags-list">
            ${reprasotery.topics.map((topic)=>{
                var tagData = `<li class="tag-link">
                <a href="https://github.com/topics/${topic}" target="_blank" rel="noopener noreferrer">
                    <span>${topic}</span>
                </a>
            </li>`
            return tagData
            }).join(" ")
        }

            </ul>
        </div>
        <div class="upadated">
            <span class="text-sm">Update  on ${new Date( reprasotery.updated_at)}</span>
        </div>
    </article>
        `
        document.querySelector(".main-content").innerHTML += repodata
    }
}
    )
}