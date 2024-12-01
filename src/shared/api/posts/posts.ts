import { backendBaseUrl } from "../../config/backend";
import { ROUTES_TYPE } from "../../types/general.types";
import { IPostsRoot } from "../../types/posts.types";

export async function GetAllPosts() : Promise<IPostsRoot | null> {
    try {
        const request = await fetch(`${backendBaseUrl}/${ROUTES_TYPE.POSTS}`);
        if(!request.ok) {
            return null
        }
        const response = await request.json();
        return response;
     }catch(e) {
        console.log(e);
        return null
    }
}