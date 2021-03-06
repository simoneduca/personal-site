const url = process.env.URL ?? "https://example.com";
const title = "Simone Duca";

module.exports = {
    en: {
        url,
        title,
        description: "Web developer",
        feed: {
            subtitle: "TODO",
            filename: "feed.xml",
            path: "/feed/en.feed.xml",
            id: "TODO",
        },
        jsonfeed: {
            path: "/feed/en.feed.json",
            url: `${url}/feed/en.feed.json`,
        },
        source: {
            label: 'github',
            link: 'https://github.com/simoneduca/personal-site'
        },
        author: {
            url,
            name: "Simone Duca",
        },
        posts: {
            title: `Posts | ${title}`,
            description: "Blog posts list",
        },
        about: {
            title: `About | ${title}`,
        },
    },
};
