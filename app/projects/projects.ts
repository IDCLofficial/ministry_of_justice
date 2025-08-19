import { contentfulService } from "@/lib/contentful";
import { Project } from "@/lib/types";

export default async function getProjects() {
    const projects = await contentfulService.getProjectsByMinistryId(process.env.NEXT_PUBLIC_CONTENTFUL_MINISTRY_ID!);
    return projects
}