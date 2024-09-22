import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../modules/device';


@Injectable({
  providedIn: 'root'
})
export class DeviceApiService {
  private url = "https://api.restful-api.dev/objects"

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.url)
  }
  add(): Observable<any> {
    let device: Device = {
      name: (document.getElementById("name") as HTMLInputElement)?.value,
      data: {
        color: (document.getElementById("color") as HTMLInputElement)?.value,
        price: parseFloat((document.getElementById("price") as HTMLInputElement)?.value)
      }
    }
    return this.http.post(this.url, device)
  }
}
