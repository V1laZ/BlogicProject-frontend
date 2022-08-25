import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-advisors-table',
  templateUrl: './advisors-table.component.html',
  styleUrls: ['./advisors-table.component.css']
})
export class AdvisorsTableComponent implements OnInit {
  advisors = [{id: 0, first_name: '', last_name: '', email: '', phone: 0, PIN: '', age: 0}];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllAdvisors();
  }

  getAllAdvisors = () => {
    this.api.getAllAdvisors().subscribe(
      { 
        next: (data) => this.advisors = data,
        error: (error) => (error.error['code'] == "token_not_valid") ? localStorage.removeItem('token') : ''
      }
    )
  }

  exportCsv() {
    this.downloadFile(this.advisors);
  }

  strRep(data: any) {
    if(typeof data == "string") {
      let newData = data.replace(/,/g, " ");
       return newData;
    }
    else if(typeof data == "undefined") {
      return "-";
    }
    else if(typeof data == "number") {
      return  data.toString();
    }
    else {
      return data;
    }
  }

  ConvertToCSV(objArray: string | { id: number; first_name: string; last_name: string; email: string; phone: number; PIN: string; age: number; }[], headerList: string[]) {
    console.log(objArray);
    console.log(headerList);
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';

    let newHeaders = ["id", "first_name", "last_name", "email", "phone", "PIN", "age"];

    for (let index in newHeaders) {
      row += newHeaders[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = (i + 1) + '';
      for (let index in headerList) {
        let head = headerList[index];

        line += ',' + this.strRep(array[i][head]);
      }
      str += line + '\r\n';
    }
    return str;
  }

  downloadFile(data: { id: number; first_name: string; last_name: string; email: string; phone: number; PIN: string; age: number; }[], filename = 'data') {
    let arrHeader = ["id", "first_name", "last_name", "email", "phone", "PIN", "age"];
    let csvData = this.ConvertToCSV(data, arrHeader);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", "advisors.csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

}
