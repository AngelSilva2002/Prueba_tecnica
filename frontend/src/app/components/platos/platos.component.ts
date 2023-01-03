import { Component, OnInit } from '@angular/core';
import { PlatosService } from '../../services/platos.service';
import {Plato } from 'src/app/models/plato';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit{

  constructor(public Platoservice: PlatosService){}
  
  ngOnInit(): void {
    this.getplatos();
    
  }

  getplatos(){
    this.Platoservice.gellallplatos().subscribe(
      res => {
       this.Platoservice.platos = res;
       console.log(res)
      },
      err => console.log(err)
    )
  }

  addplato(form: NgForm){

    this.Platoservice.createplato(form.value).subscribe(
      res => {
        this.getplatos();
        form.reset();
      },

      err => { 
        console.error(err)
        this.getplatos();
        form.reset();
      }
    )

  }


}
