import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Artist } from 'src/app/interfaces/Artist';
import { Song } from 'src/app/interfaces/Song';
import { lastValueFrom } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent {
  songs: Song[] = [];
  artists: Artist[] = [];
  genres: string[] = ['Rock', 'Pop', 'Jazz', 'Metal', 'Blues', 'Rap', 'Country', 'Classical', 'Electronic', 'Reggae'];
  state: string = 'list';
  selectedSong: number = 0;
  spinner: boolean = false;
  form: FormGroup;

  constructor(
    private songService: AppService,
    private spinnerService: SpinnerService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      title: [''],
      artist: [''],
      genre: [''],
      country: [''],
      year: [''],
      rating: [''],
      duration: [''],
      poster: ['']
    });
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.spinnerService.show();
    this.songs = await lastValueFrom(this.songService.getSongs())
    this.artists = await lastValueFrom(this.songService.getArtists())
    setTimeout(() => { this.spinnerService.hide(); }, 1000); //Delay agregado para visualizar el spinner
  }

  getArtistNameById(id: number): string {
    const artist = this.artists.find(artist => artist.id == id);
    if (!artist) {
      return 'Unknown'
    }
    return artist.name
  }

  action(action: string) {
    this.state = action;
    if (action === 'view') {
      const selectedSong = this.songs.find(song => song.id == this.selectedSong);
      if (selectedSong) {
        this.form.patchValue({
          title: selectedSong.title,
          artist: selectedSong.artist,
          genre: selectedSong.genre,
          year: selectedSong.year,
          rating: selectedSong.rating,
          duration: selectedSong.duration,
          poster: selectedSong.poster
        });
      }
    } else if (action === 'new') {
      this.form.reset();
    }
  }

  async saveSong() {
    if (this.state === 'view') {
      const updatedSongIndex = this.songs.findIndex(song => song.id == this.selectedSong);
      if (updatedSongIndex !== -1) {
        console.log(this.form.value)
        this.songs[updatedSongIndex] = {
          id: this.selectedSong,
          title: this.form.value.title,
          artist: this.form.value.artist,
          genre: this.form.value.genre,
          year: this.form.value.year,
          rating: this.form.value.rating,
          duration: this.form.value.duration,
          poster: this.form.value.poster,
        };
      }
    } else {
      const newSong = {
        id: 0, // Generar un nuevo ID ejemplo
        title: this.form.value.title,
        artist: this.form.value.artist,
        genre: this.form.value.genre,
        year: this.form.value.year,
        rating: this.form.value.rating,
        duration: this.form.value.duration,
        poster: ''
      };
      console.log(newSong);
      this.songs.push(newSong);
    }
    this.state = 'list';

  }
  deleteSong() {
    this.songs = this.songs.filter(song => song.id !== this.selectedSong);
    this.state = 'list';
  }

  setSelectedSong(id: number) {
    this.selectedSong = id;
    this.action('view');
  }

  addGenre(event: any) {
    const currentGenres = this.form.get('genre')?.value || [];
    currentGenres.push(event.target.value);
    this.form.patchValue({ genre: currentGenres });
  }

  removeGenre(genre: string) {
    let currentGenres = this.form.get('genre')?.value || [];
    currentGenres = currentGenres.filter((el: string) => el !== genre);
    this.form.patchValue({ genre: currentGenres });
  }

}