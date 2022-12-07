import { Component, OnInit } from '@angular/core';
export class User {
  public nom!: string;
  public email!: string;
  public typeCarte!:BigInteger;
  public numeroCarte!:BigInteger;
  public dateExpiration!: string;
  public code!:number;
}
@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {
  user = new User();
  constructor() {}

  onSubmit(form: any) {
    console.log(form.value);
  }

  ngOnInit(): void {
  }

}
