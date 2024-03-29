import { Subject } from "rxjs";

import { AuthData } from "./auth-data.model";
import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable()
export class AuthService {
    private user!: User
    authChange = new Subject<boolean>()


    constructor(private router:Router){}

    registerUsesr(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        } 

        this.authSuccessfully()
    }


    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        }
        this.authSuccessfully()
    }


    logout() {
        this.user = {
            email: '',
            userId: ''
        }

        this.authChange.next(false)
        this.router.navigate(['/login'])
    }

    getUser() {
        return { ...this.user }
    }


    isAuth() {
        return this.user != null
    }


    private authSuccessfully(){
        this.authChange.next(true)
        this.router.navigate(['/training'])
    }

}