import { userQueries } from  './resources/user/user.schema'
import { PostQueries } from './resources/post/post.squema';
import { commentQueries } from './resources/comment/comment.schema';
const Query = `
    type Query {
        ${commentQueries}
        ${PostQueries}
        ${userQueries}
    }

`;

export { Query }
