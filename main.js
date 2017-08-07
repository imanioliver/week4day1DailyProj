let data =
    {
      "login": "imanioliver",
      "id": 28866839,
      "avatar_url": "https://avatars3.githubusercontent.com/u/28866839?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/imanioliver",
      "html_url": "https://github.com/imanioliver",
      "followers_url": "https://api.github.com/users/imanioliver/followers",
      "following_url": "https://api.github.com/users/imanioliver/following{/other_user}",
      "gists_url": "https://api.github.com/users/imanioliver/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/imanioliver/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/imanioliver/subscriptions",
      "organizations_url": "https://api.github.com/users/imanioliver/orgs",
      "repos_url": "https://api.github.com/users/imanioliver/repos",
      "events_url": "https://api.github.com/users/imanioliver/events{/privacy}",
      "received_events_url": "https://api.github.com/users/imanioliver/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Imani Oliver",
      "company": "The Iron Yard",
      "blog": "imanioliver.com",
      "location": "Atlanta, GA",
      "email": null,
      "hireable": null,
      "bio": "I am a new developer with an affinity for education and Track and Field! Ask me about HTML, CSS, and JavaScript!",
      "public_repos": 11,
      "public_gists": 0,
      "followers": 0,
      "following": 1,
      "created_at": "2017-05-22T13:53:54Z",
      "updated_at": "2017-08-07T18:27:13Z"
    }


let myInfo = document.querySelector ('.basics');
let myName = document.querySelector ('.myName');
let myStory = document.querySelector ('.story');
let myPic   = document.querySelector ('.img');

function allTheRealThings(){
  let data = JSON.parse(this.responseText); //JSON.parse takes a string and converts it into a Javascript object

  // console.log(data[6].login);/
  console.log(data.login);
  console.log(data.name);
  console.log(data.email);

    console.log(myName.innerHTML+= `<h1 class="html_h1">${data.name}</h1>`);
    console.log(myInfo.innerHTML+= `<p>Name: ${data.name} </p>`);
    console.log(myInfo.innerHTML+= `<p>Github URL: <a href=${data.html_url}>ImaniOliver</a> </p>`); //do I assign a value to this url? So that there is a hyperpnk?
    console.log(myInfo.innerHTML+= `<p>Email:${data.email} </p>`);
    console.log(myInfo.innerHTML+= `<p>Company: ${data.company} </p>`);
    console.log(myInfo.innerHTML+= `<p>Website: ${data.blog}</p>`);
    console.log(myStory.innerHTML+= `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`);
    console.log(myPic.innerHTML+=`<img src=${data.avatar_url}/>`);
}

// MY XMLHttpRequest BELOW!



let req = new XMLHttpRequest();

console.log(req);

req.open("GET", "https://api.github.com/users/imanioliver");
req.addEventListener("load", allTheRealThings);
req.send();
