/**
 * Created by David on 12/1/16.
 */
"use strict";
(function () {

        var getPosts = function () {
            return $.get("data/blog.json");
        };

        var posts = getPosts();

        var writeBlog = function (blogContents) {
            blogContents.done(function (array) {
                var collection = [];
                array.forEach(function (object) {
                    collection += "<div class='blog-post rounded'>"
                        + "<h2 class='blog-post-title'>" + object.title + "</h2>"
                        + "<p class='blog-post-meta'>Date: " + object.date + "</p>"
                        + "<p>" + object.content + "</p>"
                        + "<p class='blog-post-meta'>Tags: " + object.categories.join(", ") + "</p>"
                        + "</div><hr>";
                });
                $("#posts").html(collection);
            });
        };

        writeBlog(posts);
})();
