import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

const BASE_URL = 'http://localhost:3000/';
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
    return this.httpClient.patch(this.getUrlForId(task.id), task);
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
}
