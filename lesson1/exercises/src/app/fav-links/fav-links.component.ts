import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favlinks = ['https://www.mahlatini.com/kenya/?gclid=54195953287e1545d04639243944452b&gclsrc=3p.ds&ds_rl=1282405&ds_rl=1287663&gb=1&msclkid=54195953287e1545d04639243944452b&utm_source=bing&utm_medium=cpc&utm_campaign=Mahlatini-US-DSA-All-DT%2BTA-SE-Kenya-Safari-XX&utm_term=https%3A%2F%2Fwww.mahlatini.com%2Fkenya%2F&utm_content=Kenya%20Safari', 'https://magicalkenya.com/', 'https://www.launchcode.org/'];
  constructor() { }

  ngOnInit() {
  }

}