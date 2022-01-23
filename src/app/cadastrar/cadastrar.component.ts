import { AuthService } from '../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: '../cadastrar/cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User()
  conferirsenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  conferSenha(event: any) {
    this.conferirsenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUsuario
    
  if (this.user.senha != this.conferirsenha){
      alert('Senhas não coincidem')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        alert('Usuario cadastro com sucesso... ♥')
        this.router.navigate(['/login'])
      })
    }
  }

}