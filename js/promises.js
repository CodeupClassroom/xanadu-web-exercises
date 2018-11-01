"use strict";

// ======================= WAIT EXERCISE

    const wait = (delay) => {
        return new Promise((res, ref) => {
            setTimeout(() => {
                res(`You'll see this after ${delay / 1000} second(s)`);
            }, delay);
        });
    };

    wait(1000).then((message) => {
        console.log(message);
    });

    wait(2000).then((message) => {
        console.log(message);
    });


// ======================= GITHUB API EXERCISE (new and improved!)

const token = 'b48c101eb866a02cdef2f9763282b3e9564e3578';
const githubApiBaseUrl = 'https://api.github.com';
const options = {
    headers: {'Authorization': `token ${token}`}
};

const getMostRecentCommit = (username) => {

    let fetchRequest = fetch(`${githubApiBaseUrl}/users/${username}/events`, options);

    return fetchRequest
        .then(response => response.json())
        .then(events => {
            const mostRecentPushEvent = events.find(event => event.type === "PushEvent");
            // alternative to .find()...
            // const mostRecentPushEvent = events.filter(event => event.type === "PushEvent")[0];
            const mostRecentCommitUrl = mostRecentPushEvent.payload.commits[0].url;
            return fetch(mostRecentCommitUrl, options);
        })
        .then(response => response.json())
        .then(data => data.commit.author.date);
};

getMostRecentCommit('jreich5').then(mostRecentCommitDate => console.log(mostRecentCommitDate));


















