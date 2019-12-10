let siteMetadata = {
    title: `WEB MASTERBUILDER`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `WEB DESIGN | WEB DEVELOPMENT`,
    description: `Web Master Builder strives to deliver affordability with efficiency. So
come to share your thoughts with us and give your brilliant ideas an
opportunity to come to life!`,
    author: `@_web_masterbuilder`,
    darkmode: false,
    switchTheme: false,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "HOW WE WORK",
            url: "/how-we-work"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "",
        description: `We are so glad you found us. Thank you! You can reach us via the follows:`,
        mail: "thewinningfellows@gmail.com",
        phone: "(02) 9785-4037",
        address: "192 Freemans Drive \nMorisset NSW  \n Australia 2264"
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
