import { contentfulService } from "@/lib/contentful";

export async function getCategories(){
    const categories = await contentfulService.getCategories();
    return categories;
}

export async function getNewsBycategory(categoryId:string){
    const news = await contentfulService.getBlogsByCategoryId(categoryId, process.env.NEXT_PUBLIC_CONTENTFUL_MINISTRY_ID!);
    return news;
}