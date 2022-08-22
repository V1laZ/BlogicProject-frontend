import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-poradci-table',
  templateUrl: './poradci-table.component.html',
  styleUrls: ['./poradci-table.component.css']
})
export class PoradciTableComponent implements OnInit {
  poradci = [{id: 0, jmeno: '', prijmeni: '', email: '', tel_cislo: 0, rod_cislo: '', vek: 0}];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllPoradces();
  }

  getAllPoradces = () => {
    this.api.getAllPoradces().subscribe(
      { 
        next: (data) => this.poradci = data,
        error: (error) => (error.error['code'] == "token_not_valid") ? localStorage.removeItem('token') : ''
      }
    )
  }

  exportCsv() {
    this.downloadFile(this.poradci);
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

  ConvertToCSV(objArray: string | { id: number; jmeno: string; prijmeni: string; email: string; tel_cislo: number; rod_cislo: string; vek: number; }[], headerList: string[]) {
    console.log(objArray);
    console.log(headerList);
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';

    let newHeaders = ["id", "jmeno", "prijmeni", "email", "tel_cislo", "rod_cislo", "vek"];

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

  downloadFile(data: { id: number; jmeno: string; prijmeni: string; email: string; tel_cislo: number; rod_cislo: string; vek: number; }[], filename = 'data') {
    let arrHeader = ["id", "jmeno", "prijmeni", "email", "tel_cislo", "rod_cislo", "vek"];
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
    dwldLink.setAttribute("download", "poradci.csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

}
