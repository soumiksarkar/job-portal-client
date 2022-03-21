import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFreelancer } from "../model/model";

@Injectable({
    providedIn: 'root'
})
export class FreelancerService {

    private baseUrl: string = 'http://localhost:8080';
    private context: string = '/api/v1/freelancers';

    constructor(private http: HttpClient) { }

    getAllFreelancers(): Observable<IFreelancer[]> {
        return this.http.get<IFreelancer[]>(this.baseUrl + this.context);
    }
}