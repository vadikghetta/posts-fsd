
export enum ROUTES_TYPE  {
    POSTS = "posts"
}


export interface IResponseMeta {
    total: number
    skip: number
    limit: number
}


export interface IReactions {
    likes: number
    dislikes: number
  }


