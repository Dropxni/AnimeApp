import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  misFavoritos: any[] = [];


  constructor() {
    this.getlLocalFavorites();
  }


  getlLocalFavorites(){
    return this.misFavoritos = JSON.parse( localStorage.getItem
      ('favoritos')||'[]')
  }

  addToFavorite(anime: any){
    this.misFavoritos.push(anime)
    localStorage.setItem('favoritos',JSON.stringify
      (this.misFavoritos)); 

  }
} 