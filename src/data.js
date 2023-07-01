var Post = /** @class */ (function () {
    function Post(id, title, imageUrl, body) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.body = body;
    }
    Post.prototype.getId = function () {
        return this.id;
    };
    Post.prototype.getTitle = function () {
        return this.title;
    };
    Post.prototype.getImageUrl = function () {
        return this.imageUrl;
    };
    Post.prototype.getBody = function () {
        return this.body;
    };
    return Post;
}());
var Page;
(function (Page) {
    Page[Page["posts-page"] = 0] = "posts-page";
    Page[Page["full-post-page"] = 1] = "full-post-page";
})(Page || (Page = {}));
;
var CommentItem = /** @class */ (function () {
    function CommentItem(id, postId, email, body) {
        this.id = id;
        this.postId = postId;
        this.email = email;
        this.body = body;
    }
    CommentItem.prototype.getId = function () {
        return this.id;
    };
    CommentItem.prototype.getPostId = function () {
        return this.postId;
    };
    CommentItem.prototype.getEmail = function () {
        return this.email;
    };
    CommentItem.prototype.getBody = function () {
        return this.body;
    };
    return CommentItem;
}());
var posts = [
    new Post(0, "Cats", "cat.jpg", "Cats have a remarkable ability to twist their bodies and land on their feet when falling. This reflex, known as the 'righting reflex,' allows them to reorient themselves mid-air and minimize the chances of injury. A cat's whiskers are not only sensitive, but they also help them gauge the width of spaces. The whiskers are roughly as wide as the cat's body, enabling them to determine whether they can fit through a particular opening."),
    new Post(1, "Dogs", "dog.jpg", "Dogs have an extraordinary sense of smell and are capable of detecting scents at concentrations as low as parts per trillion. This keen sense of smell makes them invaluable in various fields, including search and rescue, bomb detection, and even medical detection of diseases like cancer. When dogs wag their tails, the direction of the wag can convey different emotions. A wag to the right often indicates positive emotions such as happiness or friendliness, while a wag to the left can suggest negative emotions like fear or anxiety."),
    new Post(2, "Birds", "bird.jpg", "Many bird species undertake long-distance migrations, covering thousands of miles each year. They navigate using various cues, including the Earth's magnetic field, landmarks, and celestial patterns. Feathers serve multiple functions for birds. They enable flight, provide insulation, and aid in courtship displays. The vibrant colors and patterns of feathers play a crucial role in attracting mates and establishing territories."),
    new Post(3, "Rabbits", "rabbit.jpg", "Rabbits engage in a behavior called coprophagy, which involves eating their own feces. This might sound strange, but it serves a vital purpose. By consuming certain types of feces called cecotropes, rabbits can obtain essential nutrients like proteins and vitamins produced by bacteria in their cecum. They are known for their remarkable reproductive abilities. They have short gestation periods, with some breeds giving birth to a litter of bunnies in just 30 days. This contributes to their reputation for multiplying quickly."),
    new Post(4, "Pigs", "pig.jpg", "Pigs are highly intelligent animals and are often considered one of the most intelligent domesticated species. They are capable of problem-solving, have excellent long-term memory, and can learn complex tasks. They have an exceptional sense of smell. They possess a large number of olfactory receptors, which enables them to detect scents and locate food even when it's buried underground."),
    new Post(5, "Cows", "cow.jpg", "Cows have a social hierarchy within their herds. They form strong bonds with other members and establish friendships. They also display emotions and have been observed forming social networks. They communicate with each other using various vocalizations. They have distinct moo sounds that can convey different messages, such as calling for their calves or signaling distress.")
];
var comments = [
    new CommentItem(0, 0, "user1@mail.com", "I love cats!"),
    new CommentItem(1, 0, "user2@mail.com", "Cats are the best!"),
    new CommentItem(2, 0, "user3@mail.com", "Very interesting post!"),
    new CommentItem(3, 0, "user4@mail.com", "This is a beautiful page."),
    new CommentItem(4, 1, "user2@mail.com", "Dogs are lovable creatures."),
    new CommentItem(5, 1, "user5@mail.com", "I love dogs!"),
    new CommentItem(6, 1, "user6@mail.com", "Dogs are the best!"),
    new CommentItem(7, 1, "user3@mail.com", "Very interesting post!"),
    new CommentItem(8, 2, "user7@mail.com", "Birds are lovable creatures."),
    new CommentItem(9, 2, "user1@mail.com", "I love birds!"),
    new CommentItem(10, 2, "user8@mail.com", "Birds are the best!"),
    new CommentItem(11, 2, "user2@mail.com", "Very interesting post!"),
    new CommentItem(12, 3, "user9@mail.com", "Rabbits are lovable creatures."),
    new CommentItem(13, 3, "user3@mail.com", "I love rabbits!"),
    new CommentItem(14, 3, "user1@mail.com", "Rabbits are the best!"),
    new CommentItem(15, 3, "user10@mail.com", "Very interesting post!"),
    new CommentItem(16, 4, "user6@mail.com", "Pigs are lovable creatures."),
    new CommentItem(17, 4, "user2@mail.com", "I love pigs!"),
    new CommentItem(18, 4, "user11@mail.com", "Pigs are the best!"),
    new CommentItem(19, 4, "user7@mail.com", "Very interesting post!"),
    new CommentItem(20, 5, "user4@mail.com", "Cows are lovable creatures."),
    new CommentItem(21, 5, "user3@mail.com", "I love cows!"),
    new CommentItem(22, 5, "user1@mail.com", "Cows are the best!"),
    new CommentItem(23, 5, "user9@mail.com", "Very interesting post!")
];
function createBlogPost(id, imageUrl, titleStr, paragraphStr, page) {
    var classPrefix = page === Page["posts-page"] ? "posts-page" : "full-post-page";
    var container = document.createElement("div");
    var header = document.createElement("div");
    var image = document.createElement("img");
    var body = document.createElement("div");
    var title = document.createElement("h2");
    var paragraph = document.createElement("p");
    container.classList.add("".concat(classPrefix, "-post-container"));
    header.classList.add("".concat(classPrefix, "-post-header"));
    image.classList.add("".concat(classPrefix, "-post-image"));
    body.classList.add("".concat(classPrefix, "-post-body"));
    title.classList.add("".concat(classPrefix, "-post-title"));
    paragraph.classList.add("".concat(classPrefix, "-post-paragraph"));
    image.src = "./assets/" + imageUrl;
    title.innerText = titleStr;
    paragraph.textContent = paragraphStr;
    header.appendChild(image);
    body.appendChild(title);
    body.appendChild(paragraph);
    container.appendChild(header);
    container.appendChild(body);
    if (page === Page["posts-page"]) {
        var footer = document.createElement("div");
        var link = document.createElement("a");
        footer.classList.add("post-footer");
        link.classList.add("post-link");
        link.innerText = "Expand...";
        link.href = "#";
        header.dataset.id = id;
        body.dataset.id = id;
        link.dataset.id = id;
        header.onclick = function (event) { loadFullPostPage(event.currentTarget.dataset.id); };
        body.onclick = function (event) { loadFullPostPage(event.currentTarget.dataset.id); };
        link.onclick = function (event) { loadFullPostPage(event.currentTarget.dataset.id); };
        container.appendChild(footer);
        footer.appendChild(link);
    }
    return container;
}
function loadPostsPage() {
    var container = document.getElementById("posts");
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var postElement = createBlogPost(post.getId().toString(), post.getImageUrl(), post.getTitle(), post.getBody(), Page["posts-page"]);
        container.appendChild(postElement);
    }
    window.scrollTo(0, 0);
}
function clearPostsPage() {
    var main = document.getElementsByTagName("main")[0];
    main.removeChild(main.children[0]);
    main.removeChild(main.children[0]);
}
function clearFullPostPage() {
    var main = document.getElementsByTagName("main")[0];
    main.removeChild(main.children[0]);
}
function createComment(id, email, body) {
    var container = document.createElement("div");
    var spanUser = document.createElement("span");
    var spanComment = document.createElement("span");
    container.classList.add("comment-container");
    spanUser.classList.add("comment-item-user");
    spanComment.classList.add("comment-body");
    var userName = email.split("@")[0];
    spanUser.innerText = "".concat(userName, ": ").concat(email, ": ");
    spanComment.innerText = body;
    container.appendChild(spanUser);
    container.appendChild(spanComment);
    return container;
}
function loadFullPostPage(postEle) {
    clearPostsPage();
    var main = document.getElementsByTagName("main")[0];
    var section = document.createElement("section");
    var container = document.createElement("div");
    var post = document.createElement("div");
    var divCommentsContainer = document.createElement("div");
    var divComments = document.createElement("div");
    var backBtnDiv = document.createElement("div");
    var backIcon = document.createElement("img");
    section.id = "full-post-page";
    post.id = "full-post";
    backIcon.src = "./assets/ArrowIcon.svg";
    container.className = "";
    post.className = "";
    backBtnDiv.className = "back-btn";
    divCommentsContainer.className = "comments-container";
    divComments.className = "comments";
    backBtnDiv.onclick = reloadPostsPage;
    main.appendChild(section);
    section.appendChild(container);
    backBtnDiv.appendChild(backIcon);
    container.appendChild(backBtnDiv);
    container.appendChild(post);
    divCommentsContainer.appendChild(divComments);
    container.appendChild(divCommentsContainer);
    var postItem = posts[postEle];
    var postElement = createBlogPost(postItem.getId().toString(), postItem.getImageUrl(), postItem.getTitle(), postItem.getBody(), Page["full-post-page"]);
    post.appendChild(postElement);
    var comments = getCommentsByPostId(postItem.getId());
    for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        var commentElement = createComment(comment.getId().toString(), comment.getEmail(), comment.getBody());
        divComments.appendChild(commentElement);
    }
    window.scrollTo(0, 0);
    return null;
}
function getCommentsByPostId(postId) {
    return comments.filter(function (comment) { return comment.getPostId() == postId; });
}
function reloadPostsPage() {
    clearFullPostPage();
    loadPostsPageLayout();
    loadPostsPage();
}
function loadPostsPageLayout() {
    var main = document.getElementsByTagName("main")[0];
    var p = document.createElement("p");
    var section = document.createElement("section");
    p.className = 'main-title';
    p.innerText = "User posts";
    section.id = "posts";
    main.appendChild(p);
    main.appendChild(section);
}
loadPostsPageLayout();
loadPostsPage();
