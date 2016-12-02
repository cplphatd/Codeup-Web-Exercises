/**
 * Created by David on 12/1/16.
 */
"use strict";
(function () {

        //ajax request to retrieve posts
        var getPosts = function () {
            return $.get("data/blog.json");
        };

        //Assignment of returned object to posts
        var posts = getPosts();

        //Function to generate the blog
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

        //Function that generates the blog with the exception of the last indexed object
        var removeLastPost = function (blogContents) {
            blogContents.done(function (array) {
                var collection = [];
                array.forEach(function (object, index) {
                    if (index != array.length - 1) {
                        collection += "<div class='blog-post rounded'>"
                            + "<h2 class='blog-post-title'>" + object.title + "</h2>"
                            + "<p class='blog-post-meta'>Date: " + object.date + "</p>"
                            + "<p>" + object.content + "</p>"
                            + "<p class='blog-post-meta'>Tags: " + object.categories.join(", ") + "</p>"
                            + "</div><hr>";
                    }
                });
                $("#posts").html(collection);
            });
        };

        //Object to hold new post keys
        var newPost = {};

        //Function to get new post object and add to array json objects
        var addPost = function (blogContents) {
            blogContents.done(function (array) {
                var collection = [];
                newPost.title = $("#postTitle").val();
                newPost.date = $("#postDate").val();
                newPost.content = $("#postBody").val();
                newPost.categories = [];
                newPost.categories = $("#postTags").val().split(",");
                array.push(newPost);
                console.log(array);
                array.forEach(function (object, index) {
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

        //Populates blog initially
        writeBlog(posts);

        //Event handler to remove last blog that is stored in JSON
        $("#removeLast").click(function () {
            posts = getPosts();
            removeLastPost(posts);
        });

        //Event handler to add new post from user
        $("#addNew").click(function () {
            posts = getPosts();
            addPost(posts);
        });
})();
