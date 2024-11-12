import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private filmes: Filme[] = [{
    Title: 'Batman',
    Year: '1989',
    Director: 'Tim Burton',
    Plot: 'The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.',
    Country: 'USA',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYzZmZWViM2EtNzhlMi00NzBlLWE0MWEtZDFjMjk3YjIyNTBhXkEyXkFqcGc@._V1_SX300.jpg',
    Genre: 'Action, Adventure'
  }, 
  {
    Title: 'Up',
    Year: '2009',
    Director: 'Pete Docter, Bob Peterson',
    Plot: '78-year-old Carl Fredricksen travels to South America in his house equipped with balloons, inadvertently taking a young stowaway.',
    Country: 'USA',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNmI1ZTc5MWMtMDYyOS00ZDc2LTkzOTAtNjQ4NWIxNjYyNDgzXkEyXkFqcGc@._V1_SX300.jpg',
    Genre: 'Animation, Adventure, Comedy'
  },
  {
    Title: 'Joker',
    Year: '2019',
    Director: 'Todd Phillips',
    Plot: 'Arthur Fleck, a party clown and a failed stand-up comedian, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of chaos in Gotham City.',
    Country: 'USA',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_SX300.jpg',
    Genre: 'Crime, Drama, Thriller'
  }
]

  constructor() { }

  buscarFilmePorTitulo(titulo: string): Filme | undefined{
    return this.filmes.find(
      f => f.Title.trim().toLowerCase() === titulo.trim().toLowerCase());
  }
}
