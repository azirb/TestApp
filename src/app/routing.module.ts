import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from "@angular/router";
import { UrlsEnum } from "./common/enum/urls.enum";
import { RegisterPageComponent } from "./modules/register-page/register-page.component";
import { UserPageComponent } from "./modules/user-page/user-page.component";

const routes: Routes = [
  {path: UrlsEnum.LOGIN, component:RegisterPageComponent},
  {path: UrlsEnum.USERPAGE, component:UserPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
