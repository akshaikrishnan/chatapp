import { Component, OnInit, ViewChild, ElementRef   } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {OverlayContainer} from "@angular/cdk/overlay";
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('200ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('200ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class HomeComponent implements OnInit {

  typesOfShoes: string[] = ['Vision 👨‍👩‍👧‍👧','Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Loafers', 'Moccasins', 'Sneakers', 'Loafers', 'Moccasins', 'Sneakers'];
  toggled: boolean = false;
  event: any;
  emote:any;
  msg ='';
  dark = false;
  panelOpenState = false;
  overlay;
  profile = false;
  tab = 0;




  
  toggleTheme(): void {
    if (this.overlay.classList.contains("unicorn-dark-theme")) {
        this.overlay.classList.remove("unicorn-dark-theme");
        this.overlay.classList.add("light-theme");
    } else if (this.overlay.classList.contains("light-theme")) {
        this.overlay.classList.remove("light-theme");
        this.overlay.classList.add("unicorn-dark-theme");
    } else {
        this.overlay.classList.add("light-theme");
    }
}

  handleSelection(event :any) {
    console.log(event.char);
    this.emote=event.char;
    this.msg += this.emote;  
  }
  constructor(private ngxLoader: NgxUiLoaderService, private overlayContainer: OverlayContainer) {
    this.overlay = overlayContainer.getContainerElement();
   }
   

  ngOnInit(): void {
    this.ngxLoader.start();
    setTimeout(() => {
      this.ngxLoader.stop(); // stop foreground spinner of the loader "loader-01" with 'default' taskId
    }, 1000);
    this.toggleTheme();
   
  }

}
