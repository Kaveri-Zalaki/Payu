import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contacts.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  form: any = {
    name: null,
    email:null,
    message:null,
  }

  constructor(private router:Router, private _service:ContactService) { }

  ngOnInit(): void {
  }

  responseformsubmit(){
    const { name, email, message} = this.form;
    this._service.addResponseToRemote(name, email, message).subscribe
    (
      data =>
      {
        console.log("Response Added successfully");
        
        this.reloadPage();
      },
      error=>console.log("error")
    )
  }

  reloadPage(): void {
    window.location.reload();
  }

}
