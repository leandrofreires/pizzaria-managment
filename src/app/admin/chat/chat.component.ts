import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { query } from '@angular/animations';
import gql from 'graphql-tag';
import { createClient } from 'http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {
  uri = 'https://api.graph.cool/simple/v1/cjrtgxakk69ip0172ut8v5g53';
  constructor(private apollo: Apollo) { }
  clients: any;
  ngOnInit() {
    //this.createClient();
    this.allClients();
  }

  allClients(): void {
    this.apollo.query({
      query: gql`query{
            allClients{
              id
              name
            }
          }`
    }).subscribe(res => this.clients = res.data);
  }
  createClient(): void {
    this.apollo.mutate({
      mutation:
        gql` mutation CreateNewClient($name: String!, $phone: String!) {
          createClient(name: $name, cellPhone: $phone) {
            id
            name
            cellPhone
          }
        }`,
      variables: {
        name: 'Roger Soares',
        phone: '13997461611'
      }
    }).subscribe(res => console.log(res));
  }

}
