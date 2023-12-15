import envImports from "../envImports/envImports";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class DatabaseService{
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
        .setEndpoint(envImports.appwriteUrl)
        .setProject(envImports.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);      
    }
    
    // Create Post
    async createPost({title, slug, content, image, status, userId}) {
        try {
            return await this.databases.createDocument(
                envImports.appwriteDatabaseId,
                envImports.appwriteCollectionId,
                slug,

                {
                    title,
                    content,
                    image,
                    status,
                    userId,
                }
            )
            
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            
        }

    }

    // Update Post
    async updatePost(slug, {title, content, image, status}) {
        try {
            return await this.databases.updateDocument(
                envImports.appwriteDatabaseId,
                envImports.appwriteCollectionId,
                slug,

                {
                    title,
                    content,
                    image,
                    status
                }
            )
            
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    // Delete Post
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                envImports.appwriteDatabaseId,
                envImports.appwriteCollectionId,
                slug            
            )
            return true

        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    // Read Post
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                envImports.appwriteDatabaseId,
                envImports.appwriteCollectionId,
                slug            
            )

        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    // Read Posts
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                envImports.appwriteDatabaseId,
                envImports.appwriteCollectionId,
                queries,              
            )

        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // File upload service
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                envImports.appwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }
    
    // File delete service
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                envImports.appwriteBucketId,
                fileId
            )
            return true

        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }
}

const databaseService = new DatabaseService();

export default databaseService;