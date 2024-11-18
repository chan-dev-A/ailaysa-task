import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Box} from "../../model/model";
import {Form, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {

  list: Array<Box> = [];
  name:FormControl= new FormControl('', Validators.required);

  constructor(private apiService: ApiService,private route:Router) { }

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList(){
    this.apiService.getAll().subscribe(res => {
      if(res && res.success){
        this.list = res.data;
        console.log(res.message);
      } else {
        console.error(res.message);
      }
    });
  }


  addBox() {
    const body = { title: this.name.value };
    this.apiService.addBox(body).subscribe(res => {
      if(res && res.success){
        console.log(res.message)
        this.fetchList();
        this.name.reset();
      } else {
        console.error(res.message);
      }
    })
  }

  remove(id: number,event:MouseEvent) {
    event.stopPropagation();
    this.apiService.remove(id).subscribe(res => {
      if(res && res.success){
        console.log(res.message)
        this.fetchList();
      } else {
        console.error(res.message);
      }
    })
  }

  view(box:Box){
    this.route.navigate(['/box',box.id]).catch((err:any) => {console.error(err)});
  }

}
