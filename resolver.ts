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
    },

    Mutation: {
        createArticle: async (_, args) => {
            const { article } = args;
            const record = new Article(article);
            await record.save()
            return record;
        },

        deleteArticle: async (_, args) => {
            const { id } = args;
            await Article.deleteOne({
                _id: id
            })
            return "Delete Successful !"
        },

        updateArticle: async (_, args) => {
            const { id, article } = args;

            await Article.updateOne({
                _id: id
            }, article);

            const record = await Article.findOne({
                _id: id,
                deleted: false
            })

            return record;
        }
    }
}

export default resolver