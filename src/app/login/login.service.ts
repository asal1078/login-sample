import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { ServicesService } from '../share/sevices/services.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private service: ServicesService
  ) { }

  url!:string;
  params!: any;


  PostDatas(data:any){
    return this.service.post(this.url , this.params).pipe(
      catchError(error => {
        return throwError(error.error || 'Server error');
      })
    );
  }
  
}

