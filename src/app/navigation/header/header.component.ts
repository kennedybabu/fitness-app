import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavToggle = new EventEmitter<void>()
  isAuth!: boolean
  authSubscripition!: Subscription

  constructor(private authService: AuthService){}

  onToggleSidenav() {
    this.sidenavToggle.emit()
  }

  ngOnInit(): void {
    this.authSubscripition = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus 

      console.log(authStatus)
    })
  }

  ngOnDestroy(): void {
    this.authSubscripition.unsubscribe()
  }

}
