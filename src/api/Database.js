import { Client, Databases, ID } from "appwrite";

export class DBService{
    client;
    account;

    constructor(){
        this.client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("65ec15ae94b048c5b098");
        this.databases = new Databases(this.client);
    }
 
    // functionality
    async GetUser(slug){
        try {
            const promise = await this.databases.getDocument(
                "65ec182e15ec8ffdec9d",
                "65ec184a65550085f404",
                slug
            );
            console.log(promise);
            return promise
        } catch (error) {
            console.log(
                "Error Occured: "+ error.message
            );
            return false;
        }
    }

    async CreateUser({firstName,
        lastName,
        profession,
        description,
        highestQualification,
        ProfileImage
    }){
        try {
            const promise = this.databases.createDocument(
                "65ec182e15ec8ffdec9d",
                "65ec184a65550085f404",
                ID.unique(),
                {
                    firstName,
                    lastName,
                    profession,
                    description,
                    highestQualification,
                    ProfileImage
                }
            );
            return promise;
        } catch (error) {
            console.log(error.message);
        }
    }

    async UpdateUser({firstName,
        lastName,
        profession,
        description,
        highestQualification}){
            try {
                const promise = this.databases.updateDocument(
                    "65ec182e15ec8ffdec9d",
                    "65ec184a65550085f404",
                    ID.unique(),
                    {
                        firstName,
                        lastName,
                        profession,
                        description,
                        highestQualification
                    }
                );
                return promise;
            } catch (error) {
                console.log(error.message);
            }
    }

    async GetWebinars(){
        try {
            const promise = await this.databases.listDocuments(
                "65ec182e15ec8ffdec9d",
                "65ec18ca5a5ac7f2ab45"
            )
            console.log(promise);
            return promise;
        } catch (error) {
            console.log(
                "Error Occured: "+ error.message
            );
            return false;
        }
    }

    async GetWebinar(slug){
        try {
            const promise = await this.databases.getDocument(
                "65ec182e15ec8ffdec9d",
                "65ec18ca5a5ac7f2ab45",
                slug
            )
            console.log(promise);
            return promise;
        } catch (error) {
            console.log(
                "Error Occured: "+ error.message
            );
            return false;
        }
    }

    async RegisterWebinar(){

    }

    async GetInstructor(slug){
        try {
            const promise = await this.databases.getDocument(
                "65ec182e15ec8ffdec9d",
                "65ec1c68a1be3cdfa452",
                slug
            )
            console.log(promise);
            return promise;
        } catch (error) {
            console.log(
                "Error Occured: "+ error.message
            );
            return false;
        }
    }

    async GetInstructors(){
        try {
            const promise = await this.databases.listDocuments(
                "65ec182e15ec8ffdec9d",
                "65ec1c68a1be3cdfa452"
            )
            console.log(promise);
            return promise;
        } catch (error) {
            console.log(
                "Error Occured: "+ error.message
            );
            return false;
        }
    }

    async GetCourses(){
        try {
            const promise = await this.databases.listDocuments(
                "65ec182e15ec8ffdec9d",
                "65ec18d41448ef512152"
            )
            console.log(promise);
            return promise;
        } catch (error) {
            console.log(
                "Error Occured: "+ error.message
            );
            return false;
        }
    }

    async FetchSingleCourse(slug){
        try {
            const promise = await this.databases.getDocument(
                "65ec182e15ec8ffdec9d",
                "65ec18d41448ef512152",
                slug
            )
            console.log(promise);
            return promise;
        } catch (error) {
            console.log(
                "Error Occured: "+ error.message
            );
            return false;
        }
    }
}

const db_Service = new DBService();
export default db_Service;