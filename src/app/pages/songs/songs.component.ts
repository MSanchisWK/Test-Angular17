import { Component } from '@angular/core';
import { AppService } from '../../services/app.service'; // Replace 'path-to-your-song-service' with the actual path to your SongService
import { Artist } from 'src/app/interfaces/Artist';
import { Song } from 'src/app/interfaces/Song';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {
  songs: Song[] = [];
  artists: Artist[] = [];
  genres: string[] = ['Rock', 'Pop', 'Jazz', 'Metal', 'Blues', 'Rap', 'Country', 'Classical', 'Electronic', 'Reggae'];

  constructor(private songService: AppService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.songService.getSongs().subscribe(songs => {
      this.songs = songs;
    });

    this.songService.getArtists().subscribe(artists => {
      this.artists = artists;
    });
  }

  getArtistNameById(id: number): string {
    const artist =  this.artists.find(artist => artist.id === id);
    if(!artist){
      return 'Unknown'
    }
    return artist.name 
  }
}