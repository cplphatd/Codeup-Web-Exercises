/**
 * Created by David on 12/1/16.
 */
"use strict";
(function () {

        //Array to hold blog contents
        var blogArray = [];

        //Assignment of returned object to posts
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
                        + "</div><hr>";
                });
                $("#posts").html(blogArray);
            });
        };

        //Function that generates the blog with the exception of the last indexed object
        var removeLastPost = function (blogContents) {
            blogContents.done(function (array) {
                blogArray = [];
                array.pop();
                $(".blog-post").last().remove();
            });
        };

        //Object to hold new post keys
        var newPost = [{}];

        //Function to get new post object and add to array of json objects
        var addPost = function (blogContents) {
            blogContents.done(function (array) {
                blogArray = [];
                newPost.title = $("#postTitle").val();
                newPost.date = $("#postDate").val();
                newPost.content = $("#postBody").val();
                newPost.categories = [];
                newPost.categories = $("#postTags").val().split(",");
                array.push(newPost);
                console.log(array);
                clearAllInputs();
                blogArray += "<div class='blog-post'>"
                    + "<h2 class='blog-post-title'>" + newPost.title + "</h2>"
                    + "<p class='blog-post-meta'>Date: " + newPost.date + "</p>"
                    + "<p>" + newPost.content + "</p>"
                    + "<p class='blog-post-meta'>Tags: " + newPost.categories.join(", ") + "</p>"
                    + "</div><hr>";
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

        //Event handler to remove last blog that is stored in JSON
        $("#removeLast").click(function () {
            removeLastPost(posts);
        });

        //Event handler to add new post from user
        $("#addNew").click(function () {
            addPost(posts);
        });
})();
