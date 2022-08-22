import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-smlouvy-table',
  templateUrl: './smlouvy-table.component.html',
  styleUrls: ['./smlouvy-table.component.css']
})
export class SmlouvyTableComponent implements OnInit {
  smlouvy = [{ev_cislo: '', instituce: '', klient: 0, spravce: 0, dat_uzavreni: '', dat_platnosti: '', dat_ukonceni: ''}];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllSmlouvy();
  }

  getAllSmlouvy = () => {
    this.api.getAllSmlouvy().subscribe(
      { 
        next: (data) => this.smlouvy = data,
        error: (error) => (error.error['code'] == "token_not_valid") ? localStorage.removeItem('token') : ''
      }
    )
  }

  exportCsv() {
    this.downloadFile(this.smlouvy);
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

  ConvertToCSV(objArray: string | { ev_cislo: string; instituce: string; klient: number; spravce: number; dat_uzavreni: string; dat_platnosti: string; dat_ukonceni: string; }[], headerList: string[]) {
    console.log(objArray);
    console.log(headerList);
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';

    let newHeaders = ["ev_cislo", "instituce", "klient", "spravce", "dat_uzavreni", "dat_platnosti", "dat_ukonceni"];

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

  downloadFile(data: { ev_cislo: string; instituce: string; klient: number; spravce: number; dat_uzavreni: string; dat_platnosti: string; dat_ukonceni: string; }[], filename = 'data') {
    let arrHeader = ["ev_cislo", "instituce", "klient", "spravce", "dat_uzavreni", "dat_platnosti", "dat_ukonceni"];
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
    dwldLink.setAttribute("download", "smlouvy.csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

}
