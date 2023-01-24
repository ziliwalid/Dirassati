import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AjouterFormDialComponent } from '../ajouter-form-dial/ajouter-form-dial.component';
import { ListProfComponent } from '../modules/landing/components/list-prof/list-prof.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent  implements OnInit{
  constructor(private dialog : MatDialog, public authService : AuthServiceService,
    private router: Router,private activatedRoute:ActivatedRoute, /*private ca : ListProfComponent*/){
    const token = localStorage.getItem('auth_token');
    this.authService._isLoggedIn$.next(!!token);
   }

   ngOnInit(): void {

   }

   openDialog(){
    this.dialog.open(AjouterFormDialComponent,{
      width :'40%',
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
           // this.ca.getAllProfs();
      }
    })
   }

   editForm(data:any){
    this.dialog.open(AjouterFormDialComponent,{
        width:'30%',
        data
     }).afterClosed()
   }
   logout(){
    localStorage.removeItem('auth_token');
    this.router.navigate(['login']);
   }





}
