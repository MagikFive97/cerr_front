import { Component, EventEmitter, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {User} from '../user'
import { Session } from '../Session';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  User: FormGroup;
  datos: any;
  historico: User[] = [];
  Sesion: Session[] = [];
  

  constructor(public http: HttpClient,
    private router: Router){
    this.User= new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      rol: new FormControl(''),
    })}

  submit() {
    if (this.User.valid) {

      this.historico.push({
        email:this.User.value['email'],
        password:this.User.value['password'],
        username:this.User.value['username'],
        rol:this.User.value['rol'],
      });


      this.http.post('http://localhost:8000/api/login/',{
        email : this.historico[0].email,
        password: this.historico[0].password,
        
      }, { headers : { 'content-type': 'application/json'}}).subscribe((res : any) =>{
        this.datos = res;
        this.Sesion.push({
          token: res.access_token,
          user: this.historico[0],
          rol: res.rol,
        })
        localStorage.setItem('token',res.access_token);
        localStorage.setItem('rol',res.rol);
        
        console.log(this.Sesion);
        if(this.Sesion[0].rol == 'gerente'){
          this.router.navigate(['gerencia/dashboard']);
        }
        if(this.Sesion[0].rol == 'trabajador'){
          this.router.navigate(['trabajador/dashboard']);
        }
        
        // this.clear();
        // console.log(this.historico);
      })
    }

  }
  @Input() error: string | null | undefined;

}
