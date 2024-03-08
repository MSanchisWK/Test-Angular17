import { TestBed } from '@angular/core/testing';
import { SongsComponent } from './songs.component';

describe('SongsComponent', () => {
  let component: SongsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongsComponent]
    });
    component = TestBed.createComponent(SongsComponent).componentInstance;
  });

  it('should update an existing song when state is "view"', () => {
    // Arrange
    component.state = 'view';
    component.selectedSong = 1;
    component.songs = [
      { id: 1, title: 'Song 1', artist: 1, genre: ['Genre 1', 'Genre 2'], year: 2021, rating: 4.5, duration: 180, poster: 'poster1.jpg' },
      { id: 2, title: 'Song 2', artist: 2, genre: ['Genre 1', 'Genre 2'], year: 2020, rating: 3.5, duration: 240, poster: 'poster2.jpg' }
    ];
    component.form.setValue({
      title: 'Updated Song',
      artist: 'Updated Artist',
      genre: 'Updated Genre',
      year: 2022,
      rating: 5,
      duration: 200,
      poster: 'updated-poster.jpg'
    });

    // Act
    component.saveSong();

    // Assert
    expect(component.songs[0]).toEqual({
      id: 1,
      title: 'Updated Song',
      artist: 1,
      genre: ['Genre 1', 'Genre 2'],
      year: 2022,
      rating: 5,
      duration: 200,
      poster: 'updated-poster.jpg'
    });
  });

  it('should add a new song when state is not "view"', () => {
    // Arrange
    component.state = 'edit';
    component.songs = [
      { id: 1, title: 'Song 1', artist: 1, genre: ['Genre 1', 'Genre 2'], year: 2021, rating: 4.5, duration: 180, poster: 'poster1.jpg' },
      { id: 2, title: 'Song 2', artist: 2, genre: ['Genre 1', 'Genre 2'], year: 2020, rating: 3.5, duration: 240, poster: 'poster2.jpg' }
    ];
    component.form.setValue({
      title: 'New Song',
      artist: 'New Artist',
      genre: 'New Genre',
      year: 2022,
      rating: 4,
      duration: 220,
      poster: 'new-poster.jpg'
    });

    // Act
    component.saveSong();

    // Assert
    expect(component.songs.length).toBe(3);
    expect(component.songs[2]).toEqual({
      id: 0,
      title: 'New Song',
      artist: 1,
      genre: ['New Genre'],
      year: 2022,
      rating: 4,
      duration: 220,
      poster: 'new-poster.jpg'
    });
  });
});