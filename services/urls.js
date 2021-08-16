module.exports = {
    requests: {
        getContestRankingData: {
            url: "https://leetcode.com/graphql",
            method: "POST",
            headers: {
                // ":authority": "leetcode.com",
                // ":method": "POST",
                // ":path": "/graphql",
                // ":scheme": "https",
                accept: "*/*",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9",
                "content-length": "434",
                "content-type": "application/json",
                cookie: "csrftoken=gnCOd92OzuloDgIUAOE2i3p2zoNbIApcdjoriff8Sjq9GSsiSi6r0xTM7IDzxROa; _ga=GA1.2.1730417220.1628823484; _gid=GA1.2.559850312.1628823484; _gat=1",
                origin: "https://leetcode.com",
                referer: "https://leetcode.com/{USER_NAME}/",
                "sec-ch-ua": '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
                "x-csrftoken": "gnCOd92OzuloDgIUAOE2i3p2zoNbIApcdjoriff8Sjq9GSsiSi6r0xTM7IDzxROa",
                "x-kl-ajax-request": "Ajax_Request",
                "x-newrelic-id": "UAQDVFVRGwEAXVlbBAg=",
            },
            body: {
                operationName: "getContestRankingData",
                variables: {
                    username: "{USER_NAME}",
                },
                query: "query getContestRankingData($username: String!) {\n  userContestRanking(username: $username) {\n    attendedContestsCount\n    rating\n    globalRanking\n    __typename\n  }\n  userContestRankingHistory(username: $username) {\n    contest {\n      title\n      startTime\n      __typename\n    }\n    rating\n    ranking\n    __typename\n  }\n}\n",
            },
        },
    },
};
