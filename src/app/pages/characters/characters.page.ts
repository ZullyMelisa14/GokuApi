import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/shared/services/http.service';
import { ShowimageComponent } from 'src/app/shared/components/showimage/showimage.component';
import { FilterComponent } from 'src/app/shared/components/filter/filter.component'; // Importar el modal
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  links: any = {};
  limit: number = 10;

  constructor(
    private DBapi: HttpService,
    private readonly modalControl: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1) {
    this.DBapi.getCharacters(page, this.limit).subscribe((data: any) => {
      console.log('Datos recibidos de la API:', data);

      if (data.items && Array.isArray(data.items)) {
        this.characters = data.items;
        this.filteredCharacters = [...this.characters];
        this.currentPage = data.meta.currentPage;
        this.totalPages = data.meta.totalPages;
        this.links = data.links;
      } else {
        console.error('La API no devolvió un array válido');
        this.characters = [];
        this.filteredCharacters = [];
      }
    });
  }
  searchTerm: string = '';

searchCharacters() {
  const term = this.searchTerm.toLowerCase().trim();
  this.filteredCharacters = this.characters.filter(charac =>
    charac.name.toLowerCase().includes(term)
  );
}


  async openFilterModal() {
    const modal = await this.modalControl.create({
      component: FilterComponent,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.applyFilter(data.selectedRace, data.selectedGender, data.selectedAffiliation);
    }
  }

  applyFilter(race: string, gender: string, affiliation: string) {
    this.filteredCharacters = this.characters.filter(
      (charac) =>
        (!race || charac.race === race) &&
        (!gender || charac.gender === gender) &&
        (!affiliation || charac.affiliation === affiliation)
    );
  }

  async openImage(imageUrl: string) {
    const modal = await this.modalControl.create({
      component: ShowimageComponent,
      componentProps: { imageUrl },
    });
    return await modal.present();
  }

  goToDetails(characterId: string) {
    this.router.navigate(['/details', characterId]);
  }
}
