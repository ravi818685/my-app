import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accountdetails } from './accountdetails';
import { Vechile } from './vechile';

@Injectable({
  providedIn: 'root',
})
export class AccountdetailsService {
  constructor(private _httpClient: HttpClient) {}
getaccountdetails():Observable<Accountdetails[]> {

  return this._httpClient.get<Accountdetails[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals')
}

delet(id:string):Observable<Vechile[]>{
  return this._httpClient.delete<Vechile[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id)
}



filter(userenter:string):Observable<Vechile[]>{
  return this._httpClient.get<Vechile[]>(
    'https://6128991386a213001729f9df.mockapi.io/test/v1/principals' +
      '?filter=' +
      userenter
  );
}




}
