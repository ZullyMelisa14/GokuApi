import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingService } from '../../services/loadingService/loading.service';

type colorButton = "success" | "danger" | "primary";
type buttonType = "button" | "submit";

@Component({
  standalone: false,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  implements OnInit {

  @Input({required: true}) value = "";
  @Input() type: buttonType = "button";
  @Input() color: colorButton = "danger";
  @Input() disabled = false;

  @Output() doClick = new EventEmitter<boolean>();

  constructor(private readonly loadSer: LoadingService) { }

  ngOnInit() {}

  async click() {
    await this.loadSer.show();
    this.doClick.emit(true);
    await this.loadSer.dismiss();
  }

}
