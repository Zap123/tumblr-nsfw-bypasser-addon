var pattern = "https://www.tumblr.com/safe-mode?url=*";

browser.webRequest.onBeforeRequest.addListener(
    function(details) {

        let blogNameRegex = "https%3A%2F%2F(.*)\.tumblr\.com";
        let blogName = details.url.match(blogNameRegex)[1]

        return {
            redirectUrl: "https://www.tumblr.com/dashboard/blog/" + blogName
        };
    }, {
        urls: [
            pattern,
        ],
        types: ["main_frame"]
    }, ["blocking"]
);
