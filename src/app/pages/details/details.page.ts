import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'src/app/Interfaces/characters';
import { Details } from 'src/app/Interfaces/details';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  standalone: false,
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public details!: Characters;
  characId: Details | null = null;

  constructor(private readonly activeRouter: ActivatedRoute, private readonly DBapi: HttpService) { }

  async ngOnInit() {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if(id){
      this.DBapi.getCharacterById(+id).subscribe(
        (data: Details) => {
          this.characId = data;
        },
        (error) => {
          console.error("Error mi Rey", error)
        }
      )
    }
  }

}
