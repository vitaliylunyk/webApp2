import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Api} from './constants/api.constant';

@Injectable()
export class ItemsService {
  constructor(private http: Http) { }
  getCategories(): Promise<Categories[]> {
    return this.http.get(Api.API_URL)
               .toPromise()
               .then(response => response.json().data as Categories[])
               .catch(this.handleError);
  }
  getSubcategoriesByCategory(categoryId: string): Promise<SubCategories[]> {
    return this.http.get(Api.API_URL + categoryId)
               .toPromise()
               .then(response => response.json().data as SubCategories[])
               .catch(this.handleError);
  }
}
