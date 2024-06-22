import { Client, Account, ID } from "appwrite";

class Authentication{
    client;
    account;

    constructor(){
        this.client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("65ec15ae94b048c5b098");
        this.account = new Account(this.client);
    }

    async loginUser({
        email, password
    }){
        try {
            console.log("from Login user")
            console.log(email, password);
            // login the user
            let response = await this.account.createEmailPasswordSession(
                email,
                password
            )
            console.log(response);
            return response;            
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async RegisterUser({
        username,
        email,
        password
    }){
        try {

            // register the user
            let response = await this.account.create(
                ID.unique(),
                email,
                password,
                username
            )

            console.log(response);
            if (response) {
                console.log("Login Response: "+response);
                return response;   
            }
            else {
                return false;
            }
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async createVerification(){
        try {
            const promise = await this.account.createVerification('https://localhost:3000/api/v1/users/account/verify');

            let response = promise.then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });

            return response;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async updateVerification(){
        try {
            // get the verification
            const urlParams = new URLSearchParams(window.location.search);
            const secret = urlParams.get('secret');
            const userId = urlParams.get('userId');

            // returning the promise
            const promise = this.account.updateVerification(userId, secret);
            return promise;
        } catch (error) {
            console.log(error.message);
        }
    }

    async isLoggedin(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async ForgotPassword(email){
        try {
            // get the params
            const Email = String(email);
            const redirectURL = "http://localhost:3000/api/v1/account/recover-password";

            // send the request
            const response = await this.account.createRecovery(
                Email,
                redirectURL
            )

            // get the password from the reponse
            // update the password in the users collection
            this.UpdateProfile(response.userId);
        } catch (error) {
            console.log(error.message);
        }
    }

    async UpdatePassword({userID, secret, password}){
        try {
            // get the promise
            const promise = await this.account.updateRecovery(
                userID,
                secret,
                password
            );

            // return the promise
            return promise;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async Logout(){
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async GoogleSignin(){
        try {
            const promise = await this.account.createOAuth2Session(
                "google",
                "https://localhost:3000/api/v1/users/account/google",
                "https://localhost:3000/v1/users/register",
            )
            return promise;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async FacebookSignin(){
        try {
            const promise = await this.account.createOAuth2Session(
                "facebook",
                "https://localhost:3000/api/v1/users/account/facebook",
                "https://localhost:3000/v1/users/register",
            )
            return promise;
        } catch (error) {
            console.log(error.message);
        }
        return null;
    }

    async GitHubSignin(){
        try {
            const promise = await this.account.createOAuth2Session(
                "github",
                "https://localhost:3000/api/v1/users/account/github",
                "https://localhost:3000/v1/users/register",
            )
            return promise; 
        }
            catch (error) {
            console.log(error.message);
        }
        return null;
    }
}

// export the authentication
const authService = new Authentication();
export default authService;
