import { Component, OnInit } from '@angular/core';

import { ClientService } from '../../services/client.service';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clients: Client[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {

    this.clientService.getClients().subscribe((clients) => {
    console.log(clients);
    this.clients = clients;
  });
  }

}
