import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ListingItem } from '../models/product';

const baseUrl = `${environment.apiUrl}/items`;

@Injectable({
  providedIn: 'root'
})

export class ListingItemService {

  constructor(private http: HttpClient) { }

  public getListingItems(): Observable<ListingItem[]> {
    return this.http.get<ListingItem[]>(baseUrl);
  }

  public getListingItem(id: string): Observable<ListingItem> {
    return this.http.get<ListingItem>(`${baseUrl}/${id}`);
  }
}
