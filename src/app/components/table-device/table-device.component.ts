import { Component } from '@angular/core';
import { Device } from '../../modules/device';
import { DeviceApiService } from '../../services/device-api.service';

@Component({
  selector: 'app-table-device',
  templateUrl: './table-device.component.html',
  styleUrl: './table-device.component.css'
})
export class TableDeviceComponent {
  deviceList = Array<Device>()
  constructor(private deviceService: DeviceApiService) { }

  ngOnInit(): void {
    this.deviceService.get().subscribe(response => {
      this.deviceList = response
    })
  }
  addTable(): void {
    this.deviceService.add().subscribe(response => {
    let tbody = document.getElementsByTagName("tbody")[0]
    let row = tbody.insertRow()
    let cellId = row.insertCell()
    let cellName = row.insertCell()
    let cellColor = row.insertCell()
    let cellPrice = row.insertCell()
    //let buttonView = row.insertCell()
    //let buttonDelete = row.insertCell()

    cellId.innerHTML = response.id
    cellName.innerHTML = response.name
    cellColor.innerHTML = response.data.color
    cellPrice.innerHTML = response.data.price
   
  })
  }
  upgrade(id: number): void{
    console.log("upgrade")
  }
delete(id: number): void{
  this.deviceService.delete(id).subscribe(response =>{
    
  })
}
}
