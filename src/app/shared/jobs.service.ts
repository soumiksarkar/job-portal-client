import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAppliedJobs, IJobs } from "../model/model";

@Injectable({
    providedIn: 'root'
})
export class JobService {

    private baseUrl: string = 'http://localhost:8080';
    private context: string = '/api/v1/jobs';

    constructor(private http: HttpClient) { }

    getAllJobs(): Observable<IJobs[]> {
        return this.http.get<IJobs[]>(this.baseUrl + this.context);
    }

    applyJob(data: any): Observable<any> {
        return this.http.post(this.baseUrl + this.context + "/apply", data);
    }

    getAllAppliedJobs(applcntId: number): Observable<IAppliedJobs[]> {
        return this.http.get<IAppliedJobs[]>(this.baseUrl + this.context + "/apply/" + applcntId);
    }
}