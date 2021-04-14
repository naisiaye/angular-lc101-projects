import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.mahlatini.com/assets/img/featured/kenya/wildebeest-migration-1574942833.jpg';
  image3 = 'https://www.mahlatini.com/assets/img/featured/kenya/Giraffes-1574942880.jpg';

  constructor() { }

  ngOnInit() {
  }

}