import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.css']
})
export class ContractsTableComponent implements OnInit {
  contracts = [{reg_num: '', institution: '', client: 0, manager: 0, date_close: '', date_valid: '', date_end: ''}];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllContracts();
  }

  getAllContracts = () => {
    this.api.getAllContracts().subscribe(
      { 
        next: (data) => this.contracts = data,
        error: (error) => (error.error['code'] == "token_not_valid") ? localStorage.removeItem('token') : ''
      }
    )
  }

  exportCsv() {
    this.downloadFile(this.contracts);
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

  ConvertToCSV(objArray: string | { reg_num: string; institution: string; client: number; manager: number; date_close: string; date_valid: string; date_end: string; }[], headerList: string[]) {
    console.log(objArray);
    console.log(headerList);
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';

    let newHeaders = ["reg_num", "institution", "client", "manager", "date_close", "date_valid", "date_end"];

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

  downloadFile(data: { reg_num: string; institution: string; client: number; manager: number; date_close: string; date_valid: string; date_end: string; }[], filename = 'data') {
    let arrHeader = ["reg_num", "institution", "client", "manager", "date_close", "date_valid", "date_end"];
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
    dwldLink.setAttribute("download", "contracts.csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

}
