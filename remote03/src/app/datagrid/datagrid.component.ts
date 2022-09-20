import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {
  users = [
    {
      "id": "6327b815bdcf4f927005fa16",
      "color": "blue",
      "name": "Jessica Dudley",
      "creation": "2021-10-03T07:33:59"
    },
    {
      "id": "6327b815fc52a920c42cbf25",
      "color": "blue",
      "name": "Morgan Farley",
      "creation": "2017-06-24T06:04:13"
    },
    {
      "id": "6327b81577e896217a7cf028",
      "color": "blue",
      "name": "Ruthie Cobb",
      "creation": "2019-01-17T02:53:57"
    },
    {
      "id": "6327b815c7c9d5416fad38f4",
      "color": "green",
      "name": "Manning Sloan",
      "creation": "2016-05-10T06:06:25"
    },
    {
      "id": "6327b815b173c3afaeedf379",
      "color": "green",
      "name": "Hoffman Whitaker",
      "creation": "2022-05-13T09:03:56"
    },
    {
      "id": "6327b81571040df9d018b3da",
      "color": "brown",
      "name": "Angelita Miller",
      "creation": "2019-06-18T07:32:01"
    },
    {
      "id": "6327b81508251fbba17da5e5",
      "color": "blue",
      "name": "Herminia Ballard",
      "creation": "2015-10-29T07:35:47"
    },
    {
      "id": "6327b81546366b221772a04f",
      "color": "blue",
      "name": "Henry Campbell",
      "creation": "2015-05-04T03:08:37"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
