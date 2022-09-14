import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vechile } from './vechile';

@Injectable({
  providedIn: 'root',
})
export class VechileService {
  constructor(private _httpClient: HttpClient) {}

  getVechiles(): Observable<Vechile[]> {
    return this._httpClient.get<Vechile[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?limit=10&page=1'
    );
  }

  delet(id: string): Observable<Vechile> {
    return this._httpClient.delete<Vechile>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '/' +
        id
    );
  }

  filterof(filterTerm: string): Observable<Vechile[]> {
    return this._httpClient.get<Vechile[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?filter=' +
        filterTerm
    );
  }

  pagination(pagNo: number): Observable<Vechile[]> {
    return this._httpClient.get<Vechile[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?limit=10&page=' +
        pagNo
    );
  }

createvehile(Vehile:Vechile):Observable<Vechile>{
    return this._httpClient.post<Vechile>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',Vehile)
}



  getsort(colum:string,order:string): Observable<Vechile[]> {
    return this._httpClient.get<Vechile[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'
        +'?sortBy='+ colum+'&order='+order
    );
  }
}
