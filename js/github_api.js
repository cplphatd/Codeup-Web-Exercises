/**
 * Created by David on 11/11/16.
 */
"use strict";
(function () {
    //Array containing repository information
    var githubRepos = [
        {
            "id": 72568209,
            "name": "Codeup-Web-Exercises",
            "full_name": "cplphatd/Codeup-Web-Exercises",
            "owner": {
                "login": "cplphatd",
                "id": 23084153,
                "avatar_url": "https://avatars.githubusercontent.com/u/23084153?v=3",
                "gravatar_id": "",
                "url": "https://api.github.com/users/cplphatd",
                "html_url": "https://github.com/cplphatd",
                "followers_url": "https://api.github.com/users/cplphatd/followers",
                "following_url": "https://api.github.com/users/cplphatd/following{/other_user}",
                "gists_url": "https://api.github.com/users/cplphatd/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/cplphatd/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/cplphatd/subscriptions",
                "organizations_url": "https://api.github.com/users/cplphatd/orgs",
                "repos_url": "https://api.github.com/users/cplphatd/repos",
                "events_url": "https://api.github.com/users/cplphatd/events{/privacy}",
                "received_events_url": "https://api.github.com/users/cplphatd/received_events",
                "type": "User",
                "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/cplphatd/Codeup-Web-Exercises",
            "description": "Repository for Codeup work",
            "fork": false,
            "url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises",
            "forks_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/forks",
            "keys_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/teams",
            "hooks_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/hooks",
            "issue_events_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/issues/events{/number}",
            "events_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/events",
            "assignees_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/assignees{/user}",
            "branches_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/branches{/branch}",
            "tags_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/tags",
            "blobs_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/languages",
            "stargazers_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/stargazers",
            "contributors_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/contributors",
            "subscribers_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/subscribers",
            "subscription_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/subscription",
            "commits_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/contents/{+path}",
            "compare_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/merges",
            "archive_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/downloads",
            "issues_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/issues{/number}",
            "pulls_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/labels{/name}",
            "releases_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/releases{/id}",
            "deployments_url": "https://api.github.com/repos/cplphatd/Codeup-Web-Exercises/deployments",
            "created_at": "2016-11-01T19:14:59Z",
            "updated_at": "2016-11-01T19:46:20Z",
            "pushed_at": "2016-11-10T22:54:46Z",
            "git_url": "git://github.com/cplphatd/Codeup-Web-Exercises.git",
            "ssh_url": "git@github.com:cplphatd/Codeup-Web-Exercises.git",
            "clone_url": "https://github.com/cplphatd/Codeup-Web-Exercises.git",
            "svn_url": "https://github.com/cplphatd/Codeup-Web-Exercises",
            "homepage": null,
            "size": 30225,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "HTML",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "open_issues_count": 0,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
        }
    ]

    //Iterate across the array and output each repo name, when each repo was created, and description
    githubRepos.forEach(function (githubRepo) {
        console.log("Repository name: " + githubRepo.name);
        console.log("Creation date: " + githubRepo.created_at);
        console.log("Description: " + githubRepo.description);
        console.log("Created by: " + githubRepo.owner.login);
    })


})();
