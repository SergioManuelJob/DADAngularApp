import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
const routes: Routes = [
{ path: 'list', component: ListComponent },
{ path: 'us', component: AboutUsComponent },
{ path: '', redirectTo: '/list', pathMatch:'full'},
{ path: 'login', component: LoginComponent},
{ path:'**', component:PageNotFoundComponent}
];
@NgModule({
exports: [RouterModule],
imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
