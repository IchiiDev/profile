function getPicture() {
    if (config.PICTURE.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        let hash = CryptoJS.MD5(config.PICTURE);
        return `https://gravatar.com/avatar/${hash}?s=512&d=mp`;
    } else if (config.PICTURE.match(/[a-fA-F0-9]{32}/)) {
        return `https://gravatar.com/avatar/${config.PICTURE}?s=512&d=mp`;
    } else return config.PICTURE;
}

let body = new Vue({
    el: '.profile',
    data: {
        username: config.USERNAME,
        profile_picture: getPicture(),
        badges: config.BADGES,
        description: config.DESCRIPTION,
        projects: config.PROJECTS,
        socials: config.SOCIALS,
    }
});

let head = new Vue({
    el: "#vue-managed",
    data: {
        username: config.USERNAME,
    }
})