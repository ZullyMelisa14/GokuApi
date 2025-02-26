import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {

  availableRaces: string[] = ['Saiyan', 'Human', 'Namekian', 'Android', 'Frieza Race'];
  availableGenders: string[] = ['Male', 'Female', 'Unknown'];
  availableAffiliations: string[] = ['Z Fighter', 'Red Ribbon Army', 'Army of Frieza', 'Freelancer', 'Villain'];

  selectedRace: string = '';
  selectedGender: string = '';
  selectedAffiliation: string = '';

  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  applyFilters() {
    this.modalCtrl.dismiss({
      selectedRace: this.selectedRace,
      selectedGender: this.selectedGender,
      selectedAffiliation: this.selectedAffiliation
    });
  }

}
