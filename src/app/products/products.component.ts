import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/assets/data';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  data = data;

  user: any;

  handleFavorite(id: number, isFavorite: boolean) {
    const name = this.authService.getName();

    if (isFavorite) {
      this.apiService
        .addFav({ name: name, favorite: id })
        .subscribe((res: any) => {
          window.location = '/products' as any;
        });
    } else {
      this.apiService
        .removeFav({ name: name, favorite: id })
        .subscribe((res: any) => {
          window.location = '/products' as any;
        });
    }
  }

  isFavorite(id: number) {
    if (this.user.favorites.includes(id)) {
      return true;
    }
    return false;
  }

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const name = this.authService.getName();
    this.apiService.user(name).subscribe((res: any) => {
      this.user = res.user;
      console.log(this.user);
    });
  }
}
