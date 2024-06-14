# Profile
*Self hosted VueJS based Discord like web-profile*
<div align="center">
   <img src="https://i.dfr.gg/XCm6.png" align="center" />
</div>

## How do I use it ?
You'll only need a webserver like Apache or NGINX and to follow theses few steps:

1. Clone this repository in your webserver root

Simply type the following commands:
```bash
$ git clone https://github.com/IchiiDev/profile.git profile

$ cd profile
```

2. Add assets to the `assets\img` folder

You can include your profile picture to the folder as well with Discord badges and projects icons (Exemple badges and placeholders are included with the project). You can find a list of useful Discord assets in SVG here: [#ressources](#ressources)

*Disclaimer:* I highly recommend not to host any of Discord assets on your own. Always consider directly using the Discord assets links (cf: [#ressources](#ressources))
EDIT (11/09/2021): For some reason, Discord is blocking assets for third party websites so you will need to host them on your web server.

3. Edit the `assets\config.js` file to manage the page's content
   
Open the `assets\config.js` file and edit the following configuration:
```js
const config = {
    
    USERNAME: "User#0000",
    PICTURE: "assets/img/profile_picture.png",

    DESCRIPTION: "Change this bio in the <b>assets/config.js</b> file. <i>It may include HTML syntax</i>",

    BADGES: [
        { id: "HypeSquad Bravery", image: "https://discord.com/assets/64ae1208b6aefc0a0c3681e6be36f0ff.svg" },
        { id: "Nitro Sub", image: "https://discord.com/assets/386884eecd36164487505ddfbac35a9d.svg" },
    ],

    PROJECTS: [
        { id: "project-1", image: "assets/img/placeholder1.png", link: "https://discord.com", name: "Super cool project 1" },
        { id: "project-2", image: "assets/img/placeholder2.png", link: "https://discord.com", name: "Super cool project 2" },
        { id: "project-3", image: "assets/img/placeholder3.png", link: "https://discord.com", name: "Super cool project 3" },
    ],

    SOCIALS: [
        { class_name: "fab fa-github", link: "https://github.com/discord" },
        { class_name: "fab fa-twitter", link: "https://twitter.com/discord" },
    ],

}
```

### Use Gravatar for your profile picture
You can now use a Gravatar image as your profile picture. In order to enable this feature, you'll need to have a [Gravatar email](https://fr.gravatar.com/emails/new/). Once you registered a profile picture and an email on Gravatar, just set the email you used as parameter for the `PICTURE` setting. However this will make your address public and I highly recommend using an email hash instead. To use it, simply [convert your e-mail address into a MD5 hash](https://www.md5hashgenerator.com/) and set it as parameter for the `PICTURE` setting.

Here is a detailed documentation of every configuration parameters:

| Key | Description |
| ----------- | ----------- |
| USERNAME | The user's nickname, will be used in the profile card headers & the webpage title |
| PICTURE | The profile picture used in the profile card headers [LINK / E-MAIL ADDRESS / HASH] |
| DESCRIPTION | Short biography displayed in the profile card | 
| BADGES | Object[] Each badges displayed in the profile card header |
| PROJECTS | Object[] Each project displayed in the profile card |
| SOCIALS | Object[] Each social media icons displayed in the profile card |

## Ressources

<p>Copyright &copy Discord 2021, I do not own any of the Discord assets and these are hosted on Discord's website</p>

- [`Discord Staff Badge`](https://canary.discord.com/assets/c5b2473c93c340dbe540e120a86a019f.svg) *Disclaimer*: Impersonating Discord Staffs is bad, the repository owner or contributors cannot be held responsible for any legal confrontation with Discord.
- [`Discord Certified Moderator Badge`](https://canary.discord.com/assets/955e3c9783043c7080ac202565810fc3.svg)
- [`Discord Moderator Programs Alumni Badge`](https://canary.discord.com/assets/b945002f0e0fd7f11990d800e98b5504.svg)
- [`Discord Partner Badge`](https://discord.com/assets/0d494d94157e71dd9cc064baad0f1b70.svg)
- [`HypeSquad Events Badge`](https://discord.com/assets/6c73f47daf179ffade99f501bfc5101b.svg)
- [`HypeSquad Bravery Badge`](https://discord.com/assets/64ae1208b6aefc0a0c3681e6be36f0ff.svg)
- [`HypeSquad Brilliance Badge`](https://discord.com/assets/48cf0556d93901c8cb16317be2436523.svg)
- [`HypeSquad Balance Badge`](https://discord.com/assets/9fdc63ef8a3cc1617c7586286c34e4f1.svg)
- [`Bug Hunter Gold Badge`](https://discord.com/assets/9286332d6e947c91fa91569efce431b0.svg)
- [`Bug Hunter Badge`](https://discord.com/assets/f61b8981e92feead854f52e5a1ba14f0.svg)
- [`Early Verified Bot Developer Badge`](https://discord.com/assets/45cd06af582dcd3c6b79370b4e3630de.svg)
- [`Active Developer Badge`](https://discord.com/assets/26c7a60fb1654315e0be26107bd47470.svg)
- [`Early Supporter Badge`](https://discord.com/assets/23e59d799436a73c024819f84ea0b627.svg)
- [`Nitro Sub Badge`](https://discord.com/assets/386884eecd36164487505ddfbac35a9d.svg)
- [`Nitro Boosting 1 Month Badge`](https://discord.com/assets/fbb6f1e160280f0e9aeb5d7c452eefe1.svg)
- [`Nitro Boosting 2 Months Badge`](https://discord.com/assets/b4b741bef6c3de9b29e2e0653e294620.svg)
- [`Nitro Boosting 3 Months Badge`](https://discord.com/assets/93f5a393e22796a850931483166d7cb9.svg)
- [`Nitro Boosting 6 Months Badge`](https://discord.com/assets/4c380650960c2b1e1584115d5e9ad63b.svg)
- [`Nitro Boosting 9 Months Badge`](https://discord.com/assets/438dd7ecbffcf21b6cbf2773ade51a04.svg)
- [`Nitro Boosting 12 Months Badge`](https://discord.com/assets/7a5f78de816fcecbbd1d5d6e635cc7dd.svg)
- [`Nitro Boosting 15 Months Badge`](https://discord.com/assets/5a24b20b84fb3eafc138916729386e76.svg)
- [`Nitro Boosting 18 Months Badge`](https://discord.com/assets/f31d590e1f3629cd0b614330f4a8ee2a.svg)
- [`Nitro Boosting 24 Months Badge`](https://discord.com/assets/9ba64f1fa91ccde0eba506c1c33f3d1a.svg)
