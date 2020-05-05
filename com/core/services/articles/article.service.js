// This is the Article service

var db = require('../../controllers/database.controller');
var Article = require('../../../../lib/core/models/Article');

const listArticles = () => {
    return db.listTable('articles');
}

const searchArticles = (value) => {
    return db.searchTable('articles', value);
}

const addArticle = (article) => {
    var nArticle = new Article;
    nArticle.setID(db.getNextID('articles'));
    nArticle.setTitle(article.title);
    nArticle.setCreated(article.created);
    nArticle.setAuthor(article.author);
    nArticle.setCategory(article.category);
    nArticle.setStory(article.story);
    nArticle.setActive(article.active);
    return db.addToTable('articles', nArticle.getJSON());
}

const updateArticle = (article) => {
    var nArticle = new Article;
    var ArticleRecords = db.listTable('articles');
    var tmpInd = db.findRecordIndex(ArticleRecords, article.id.toString());
    nArticle.setID(article.id);
    nArticle.setTitle(article.title);
    nArticle.setCreated(article.created);
    nArticle.setAuthor(article.author);
    nArticle.setCategory(article.category);
    nArticle.setStory(article.story);
    nArticle.setActive(article.active);
    ArticleRecords[tmpInd].title = nArticle.getTitle();
    ArticleRecords[tmpInd].created = nArticle.getCreated();
    ArticleRecords[tmpInd].author = nArticle.getAuthor();
    ArticleRecords[tmpInd].category = nArticle.getCategory();
    ArticleRecords[tmpInd].story = nArticle.getStory();
    ArticleRecords[tmpInd].active = nArticle.getActive();
    db.updateTable('articles', ArticleRecords);
    return nArticle.getJSON();
}

const setActive = (id) => {
    var ArticleRecords = db.listTable('articles');
    var tmpInd = db.findRecordIndex(ArticleRecords, id);
    if(ArticleRecords[tmpInd].active === 'true'){
        ArticleRecords[tmpInd].active = 'false'
    } else {
        ArticleRecords[tmpInd].active = 'true'
    }
    db.updateTable('articles', ArticleRecords);
    return [{"id":id}];
}

// TODO update the service to delete a record
const deleteArticle = (id) => {
    return [];
}



exports.listArticles = listArticles;
exports.searchArticles = searchArticles;
exports.addArticle = addArticle;
exports.updateArticle = updateArticle;
exports.setActive = setActive;
exports.deleteArticle = deleteArticle;