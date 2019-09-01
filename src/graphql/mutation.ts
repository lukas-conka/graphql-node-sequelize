
import { userMutations } from  './resources/user/user.schema'
import { PostMutations } from './resources/post/post.squema';
import { commentMutations } from './resources/comment/comment.schema';

const Mutation = `
    type Mutation {
        ${PostMutations}
        ${userMutations}
        ${commentMutations}
    }
`;

export {Mutation}