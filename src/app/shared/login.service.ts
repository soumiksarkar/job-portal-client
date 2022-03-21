import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFreelancer, IEmployer } from "../model/model";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private baseUrl: string = 'http://localhost:8080';
    private context: string = '/api/v1/login';

    constructor(private http: HttpClient) { }

    authenticateFreelancer(data: any): Observable<IFreelancer[]> {
        return this.http.post<IFreelancer[]>(this.baseUrl + this.context + '/freelancer', data);
    }

    authenticateEmployer(data: any): Observable<IEmployer[]> {
        return this.http.post<IEmployer[]>(this.baseUrl + this.context + '/employer', data);
    }
}