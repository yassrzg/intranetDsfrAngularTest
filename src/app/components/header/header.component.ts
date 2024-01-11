import { Component } from '@angular/core';
import {ThemeModalServiceService} from "../../service/theme-modal-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private  themeModalService: ThemeModalServiceService) {
  }

  openThemeModal() {
    this.themeModalService.open()
  }

}
