/**
 * Created by David on 12/1/16.
 */
"use strict";
(function () {

        //Array to hold blog contents as a string to write as html
        var blogArray = [];

        //Will hold the object returned from the ajax .get request
        var posts;

        //ajax request to retrieve posts (IIFE)
        var getPosts = (function () {
            posts = $.get("data/blog.json");
        }) ();

        //Function to generate the blog
        var writeBlog = function (blogContents) {
            blogContents.done(function (array) {
                array.forEach(function (object) {
                    blogArray += "<div class='blog-post'>"
                        + "<h2 class='blog-post-title'>" + object.title + "</h2>"
                        + "<p class='blog-post-meta'>Date: " + object.date + "</p>"
                        + "<p>" + object.content + "</p>"
                        + "<p class='blog-post-meta'>Tags: " + object.categories.join(", ") + "</p>"
                        + "</div>";
                });
                $("#posts").html(blogArray);
            });

            posts.fail(function () {
                console.log("Request failed")
            });

            posts.always(function () {
                console.log("Process complete")
            });
        };

        //Function that removes the last post
        var removeLastPost = function (blogContents) {
            blogContents.done(function (array) {
                array.pop();
                $(".blog-post").last().remove();
            });
        };

        //Array of objects to hold new posts
        var newPosts = [{}];

        //Function to get new post object and add to array of json objects
        var addPost = function (blogContents) {
            blogContents.done(function (array) {
                blogArray = [];
                newPosts.title = $("#postTitle").val();
                newPosts.date = $("#postDate").val();
                newPosts.content = $("#postBody").val();
                newPosts.categories = [];
                newPosts.categories = $("#postTags").val().split(",");
                array.push(newPosts);
                clearAllInputs();
                blogArray += "<div class='blog-post'>"
                    + "<h2 class='blog-post-title'>" + newPosts.title + "</h2>"
                    + "<p class='blog-post-meta'>Date: " + newPosts.date + "</p>"
                    + "<p>" + newPosts.content + "</p>"
                    + "<p class='blog-post-meta'>Tags: " + newPosts.categories.join(", ") + "</p>"
                    + "</div>";
                $("#posts").append(blogArray);
            });
        };

        //Clears input fields
        var clearAllInputs = function () {
            $("#postTitle").val("");
            $("#postDate").val("");
            $("#postBody").val("");
            $("#postTags").val("");
        };

        //Populates blog initially
        writeBlog(posts);

        //Event handler to remove last blog that is stored in blogArray
        $("#removeLast").click(function () {
            removeLastPost(posts);
        });

        //Event handler to add new post from user and pushes to blogArray
        $("#addNew").click(function () {
            addPost(posts);
        });
})();
