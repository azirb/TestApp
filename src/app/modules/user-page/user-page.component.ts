import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FetchService } from "../../services/fetch.service";
import {
  map,
  Subject,
  takeUntil
} from "rxjs";
import { UserInterface } from "../../common/interfaces/user.interface";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit, OnDestroy {


  private destroy$: Subject<void> = new Subject<void>()

  public userInfo: UserInterface = {
    email: '', phone:'', picture:''
  };

  constructor(private service: FetchService) { }

  ngOnInit(): void {
    this.service.getUserInfo().pipe(
      takeUntil(this.destroy$)
    ).subscribe((result)=> {
        this.userInfo = {
          email: result.results[0].email,
          phone: result.results[0].phone,
          picture: result.results[0].picture.large,
        };
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
