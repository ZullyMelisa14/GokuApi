import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.scss'],
})
export class ShowimageComponent  implements OnInit {

  @Input() imageUrl!: string;

  constructor(private modalControl: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalControl.dismiss();
  }

}
