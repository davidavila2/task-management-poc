import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';

const BASE_URL = 'http://task-management-poc.us-west-1.elasticbeanstalk.com/';
const model = 'tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  findOne(task: Task) {
    return this.httpClient.get(this.getUrlForId(task.id))
  }

  create(task: Task) {
    return this.httpClient.post(this.getUrl(), task);
  }

  update(task: Task) {
    return this.httpClient.patch(this.getUrlForIdToUpdateStatus(task.id), task);
  }

  delete(taskId) {
    return this.httpClient.delete(this.getUrlForId(taskId));
  }

  private getUrl(): string {
    return `${BASE_URL}${model}`;
  }

  private getUrlForId(id: number): string {
    return `${this.getUrl()}/${id}`;
  }

  private getUrlForIdToUpdateStatus(id: number): string {
    return `${this.getUrl()}/${id}/status`;
  }
}
