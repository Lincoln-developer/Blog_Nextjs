import fs from "fs";
import path from "path"
import matter from "gray-matter"

//Path to the posts directory where our data is gonna be fetched.
const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(){
    //Get file names under the /posts
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map(fileName => {
        //Remove .md from file name to get id
        const id = fileName.replace(/\.md$/)

        //Read markdown file as string, by getting the full file path first.
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        //Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        //Combine the data with the id.
        return {
            id,
            ...matterResult.data
        }
    })
    //sort posts by date
    return allPostsData.sort(({date:a}, {date:b}) => {
        if(a < b){
            return 1
        }else if(a > b){
            return -1
        }else{
            return 0
        }
    })
}