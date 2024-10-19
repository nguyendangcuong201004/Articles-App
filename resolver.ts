import Article from "./models/articles.model"

const resolver = {
    Query: {
        getListArticle: async () => {
            const articles = await Article.find({
                deleted: false,
            })
            return articles
        }
    }
}

export default resolver