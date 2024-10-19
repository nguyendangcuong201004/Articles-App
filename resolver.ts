import Article from "./models/articles.model"

const resolver = {
    Query: {
        getListArticle: async () => {
            const articles = await Article.find({
                deleted: false,
            })
            return articles
        },
        
        getArticle: async (_, args) => {
            const { id } = args;
            const article = await Article.findOne({
                _id: id,
                deleted: false,
            })
            return article
        }
    }
}

export default resolver