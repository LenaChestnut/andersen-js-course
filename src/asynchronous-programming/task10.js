/* eslint-disable no-undef */
/* eslint-disable no-console */

// реализовать класс Musician
// принимает url в конструктор
// есть асинхронный метод getAlbums()

class Musician {
  constructor(url) {
    this.url = url;
  }

  async getAlbums() {
    const response = await fetch(this.url);
    const albums = await response.json();
    return albums;
  }
}

const musician = new Musician('https://jsonplaceholder.typicode.com/albums');

musician.getAlbums().then(console.log);
