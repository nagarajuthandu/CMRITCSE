import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredvalue = "";
  newPost="";
  onAddPost(){
    //alert("post added success fully");
    this.newPost=this.enteredvalue;
  }

}
