import { IReactions, IResponseMeta, ROUTES_TYPE } from "./general.types"

export interface IPostsItem {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: IReactions
    views: number
    userId: number
}

export interface IPostsRoot extends IResponseMeta {
    [ROUTES_TYPE.POSTS] : IPostsItem[]
}