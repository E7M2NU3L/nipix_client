import { Account, Client, Storage } from "appwrite";
import { configURL } from "../config/configURL";

export class BucketService{
    client;
    storage;

    constructor(){
        this.client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("65ec15ae94b048c5b098");
        this.storage = new Storage(this.client);
    }

    async UploadUserImage(){
         try {
            // promise
            const promise = this.storage.createFile(
                '65ec1f81c5d56c259bf7',
                ID.unique(),
                file
            );
            console.log(promise);
            return promise;
        } catch (error) {
            console.log(error.message);
        }
    }

    async UpdateUserImage(){
        try {
            // promise
            const promise = this.storage.updateFile(
                '65ec1f81c5d56c259bf7',
                ID.unique(),
                file
            );
            console.log(promise);
            return promise;
        } catch (error) {
            console.log(error.message);
        }
    }
}



const bucketService = new BucketService();
export default bucketService();