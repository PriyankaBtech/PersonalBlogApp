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
    async createPost({Title, Slug, Content, Image, Status, UserID}) {
        try {
            return await this.databases.createDocument(
                envImports.appwriteDatabaseId,
                envImports.appwriteCollectionId,
                Slug,

                {
                    Title,
                    Content,
                    Image,
                    Status,
                    UserID,
                }
            )
            
        } catch (error) {
            console.log("Error :", error)
            
        }

    }

    // Update Post
    async updatePost( Slug, {Title, Content, Image, Status}) {
        try {
            return await this.databases.updateDocument(
                envImports.appwriteDatabaseId,
                envImports.appwriteCollectionId,
                Slug,

                {
                    Title,
                    Content,
                    Image,
                    Status
                }
            )
            
        } catch (error) {
            console.log("Error", error)
        }
    }

    // Delete Post
    async deletePost(Slug) {
        try {
            await this.databases.deleteDocument(
                envImports.appwriteDatabaseId,
                envImports.appwriteCollectionId,
                Slug            
            )
            return true

        } catch (error) {
            console.log("Error", error);
            return false
        }
    }

    // Read Post
    async getPost(Slug) {
        try {
            return await this.databases.getDocument(
                envImports.appwriteDatabaseId,
                envImports.appwriteCollectionId,
                Slug            
            )

        } catch (error) {
            console.log("Error", error);
            return false
        }
    }

    // Read Posts
    async getPosts(queries = [Query.equal("Status", "active")]) {
        try {
            return await this.databases.listDocuments(
                envImports.appwriteDatabaseId,
                envImports.appwriteCollectionId,
                queries,              
            )

        } catch (error) {
            console.log("Error", error);
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
            console.log("Error", error);
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
            console.log("Error", error);
            return false
        }
    }
}

const databaseService = new DatabaseService();

export default databaseService;