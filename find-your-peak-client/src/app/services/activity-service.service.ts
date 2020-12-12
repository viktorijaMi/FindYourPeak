import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivityModel } from '../ActivityModel';



@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseURL = "http://localhost:9090/api/activities"

  constructor(private httpClient: HttpClient) { }

  getActivityList(): Observable<ActivityModel[]> {
    return this.httpClient.get<ActivityModel[]>(`${this.baseURL}`);
  }

  addActivity(activity: ActivityModel): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, activity);
  }

  getActivityById(id: number): Observable<ActivityModel> {
    return this.httpClient.get<ActivityModel>(`${this.baseURL}/${id}`);
  }

  updateActivity(id: number, activity: ActivityModel): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, activity);
  }

  deleteActivity(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
