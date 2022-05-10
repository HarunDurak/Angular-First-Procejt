import { Component, OnInit } from '@angular/core';
import { data } from 'src/assets/data';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  data = data;

  user: any;
  favData: any[] = [];

  fillFavorites() {
    this.favData = []
    for (let i = 0; i < data.length; i++) {
      if(this.user.favorites.includes(data[i].id)) {
        this.favData.push(data[i])
      }
    }
  }

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const name = this.authService.getName();
    this.apiService.user(name).subscribe((res: any) => {
      this.user = res.user;
      console.log(this.user);
      this.fillFavorites();
    });
  }
}
