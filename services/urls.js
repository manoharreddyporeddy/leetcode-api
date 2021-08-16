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

        getUserProfile: {
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
                "content-length": "1165",
                "content-type": "application/json",
                cookie: "csrftoken=IQp6XUgKDTMgxM3wCGelRp1Jreg1VVlW0PbuzymTPgvzOKv6drTBSEN0qNbP6cVr; _ga=GA1.2.1665604196.1622694607; _gid=GA1.2.1973316059.1629091670; _gat=1",
                origin: "https://leetcode.com",
                referer: "https://leetcode.com/{USER_NAME}/",
                "sec-ch-ua": '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
                "x-csrftoken": "IQp6XUgKDTMgxM3wCGelRp1Jreg1VVlW0PbuzymTPgvzOKv6drTBSEN0qNbP6cVr",
                "x-kl-ajax-request": "Ajax_Request",
                "x-newrelic-id": "UAQDVFVRGwEAXVlbBAg=",
            },
            body: {
                operationName: "getUserProfile",
                variables: {
                    username: "{USER_NAME}",
                },
                query: "query getUserProfile($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n    __typename\n  }\n  matchedUser(username: $username) {\n    username\n    socialAccounts\n    githubUrl\n    contributions {\n      points\n      questionCount\n      testcaseCount\n      __typename\n    }\n    profile {\n      realName\n      websites\n      countryName\n      skillTags\n      company\n      school\n      starRating\n      aboutMe\n      userAvatar\n      reputation\n      ranking\n      __typename\n    }\n    submissionCalendar\n    submitStats: submitStatsGlobal {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n        __typename\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n        __typename\n      }\n      __typename\n    }\n    badges {\n      id\n      displayName\n      icon\n      creationDate\n      __typename\n    }\n    upcomingBadges {\n      name\n      icon\n      __typename\n    }\n    activeBadge {\n      id\n      __typename\n    }\n    __typename\n  }\n}\n"
            },
        },
    },
};
