function Article(id, title, created, author, category, story, active) {       // Accept name and age in the constructor
    this.id = id || 0;
    this.title  = title  || null;
    this.created  = created  || null;
    this.author  = author  || null;
    this.category  = category  || null;
    this.story  = story  || null;
    this.active  = active  || 'true';
}

Article.prototype.getID = function() {
    return this.id;
}

Article.prototype.setID = function(id) {
    this.id = id;
}

Article.prototype.getTitle = function() {
    return this.title;
}

Article.prototype.setTitle = function(title) {
    this.title = title;
}

Article.prototype.getCreated = function() {
    return this.created;
}

Article.prototype.setCreated = function(created) {
    this.created = created;
}

Article.prototype.getAuthor = function() {
    return this.author;
}

Article.prototype.setAuthor = function(author) {
    this.author = author;
}

Article.prototype.getCategory = function() {
    return this.category;
}

Article.prototype.setCategory = function(category) {
    this.category = category;
}

Article.prototype.getStory = function() {
    return this.story;
}

Article.prototype.setStory = function(story) {
    this.story = story;
}

Article.prototype.getActive = function() {
    return this.active;
}

Article.prototype.setActive = function(active) {
    this.active = active;
}





Article.prototype.equals = function(otherArticle) {
    return otherArticle.getID() == this.getID()
        && otherArticle.getTitle() == this.getTitle()
        && otherArticle.getCreated() == this.getCreated()
        && otherArticle.getAuthor() == this.getAuthor()
        && otherArticle.getCategory() == this.getCategory()
        && otherArticle.getStory() == this.getStory()
        && otherArticle.getActive() == this.getActive();
}

Article.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
};

Article.prototype.getJSON = function() {
    return {'id':this.getID().toString(), 'title':this.getTitle(), 'created':this.getCreated(), 'author':this.getAuthor().toString(), 'category':this.getCategory().toString(), 'story':this.getStory(), 'active':this.getActive()};
}

module.exports = Article;