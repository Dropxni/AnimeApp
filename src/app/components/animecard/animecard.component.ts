import { Component, inject, input, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';



@Component({
  selector: 'app-animecard',
  standalone: true,
  imports: [],
  templateUrl: './animecard.component.html',
  styleUrl: './animecard.component.css'
})
export class AnimecardComponent {
  private _favoritesService = inject(FavoritesService)
  @Input ()animeInfo: any = {};
  addToFavorite(anime: any){
    this._favoritesService.addToFavorite(anime);
    // console.log('Hola a favorite ', anime.title);
  }


  // @Input( animeInfo: any = {} );
}