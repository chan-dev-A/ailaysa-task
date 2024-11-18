import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Box} from "../../model/model";

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  id!:number
  data:any;

  constructor(private activatedRoute: ActivatedRoute,private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.apiService.getById(this.id).subscribe(res=>{
        if(res && res.success){
          this.data = res.data;
        } else{
          console.error(res.message);
        }
      })
    }

  }

}
