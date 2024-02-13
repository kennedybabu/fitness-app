import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  maxDate!: Date | null 


  constructor(private authService: AuthService) {}
  
  onSubmit(form: NgForm) {
    console.log(form)
    this.authService.registerUsesr({
      email: form.value.email,
      password: form.value.password
    })
  }
  
  
  ngOnInit(): void {
     this.maxDate = new Date()

     this.maxDate.setFullYear(this.maxDate.getFullYear() - 18)
      
  }
}
