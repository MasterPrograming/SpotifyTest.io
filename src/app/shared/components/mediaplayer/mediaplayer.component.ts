import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://cdn.pixabay.com/photo/2013/07/12/18/17/equalizer-153212_960_720.png',
    album: 'Test Musick',
    name: 'BB Oficial',
    url: 'sdfdsa',
    _id: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
