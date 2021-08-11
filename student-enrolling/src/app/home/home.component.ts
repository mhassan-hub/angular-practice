import { Component, OnInit } from '@angular/core';
import { Name } from './home';
import { HomeService } from '../home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myName: Name= {
    name: 'Mohamed!'
  }
  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
  }

}
