let body = new Vue({
    el: '.profile',
    data: {
        username: config.USERNAME,
        profile_picture: config.PICTURE,
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