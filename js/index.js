import {apiEndPoint, userName, preload} from './Utils/constants.js'
import {userInfoHandler, followersHandler, mainDataHandler, organizationDataHandler, reposDataHandler } from './Utils/DOM-helper.js'



async function getUserData (userName){
    const userApiData = await fetch(apiEndPoint+userName)
    return userApiData
}


async function getReposData (url){
    const userReposData = await fetch(url)
    return userReposData
}



// Fetch the main Data API
getUserData(userName).then(resolve =>{
    return resolve.json()
}).then(res=>{
    userInfoHandler(res)
    followersHandler(res)
    mainDataHandler(res)
    organizationDataHandler(res)
    getReposData( res.repos_url).then(reposRes =>{
        return reposRes.json()
    }).then(res=>{
        reposDataHandler(res)
    })
}).finally(setTimeout(()=>{preload.classList.add ("hidden")}, 500))




