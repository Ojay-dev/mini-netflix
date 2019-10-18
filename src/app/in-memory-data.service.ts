import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 1,
        Title: 'Blade Runner 2049',
        Year: '2017',
        Rated: 'R',
        Released: '06 Oct 2017',
        Runtime: '164 min',
        Genre: 'Action, Drama, Mystery, Sci-Fi, Thriller',
        Director: 'Denis Villeneuve',
        Writer: 'Hampton Fancher (screenplay by), Michael Green (screenplay by), Hampton Fancher (story by), Philip K. Dick (based on characters from the novel "Do Androids Dream of Electric Sheep?" by)',
        Actors: 'Ryan Gosling, Dave Bautista, Robin Wright, Mark Arnold',
        Plot: 'A young blade runner\'s discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who\'s been missing for thirty years.',
        Language: 'English, Finnish, Japanese, Hungarian, Russian, Somali, Spanish',
        Country: 'USA, UK, Hungary, Canada, Spain',
        Awards: 'Won 2 Oscars. Another 81 wins & 131 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '8.0/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '87%'
          },
          {
            Source: 'Metacritic',
            Value: '81/100'
          }
        ],
        Metascore: '81',
        imdbRating: '8.0',
        imdbVotes: '393,723',
        imdbID: 'tt1856101',
        Type: 'movie',
        DVD: '16 Jan 2018',
        BoxOffice: '$91,800,042',
        Production: 'Warner Bros. Pictures',
        Website: 'http://bladerunnermovie.com',
        Response: 'True'
      },
      {
        id: 2,
        Title: 'John Wick: Chapter 3 - Parabellum',
        Year: '2019',
        Rated: 'R',
        Released: '17 May 2019',
        Runtime: '131 min',
        Genre: 'Action, Crime, Thriller',
        Director: 'Chad Stahelski',
        Writer: 'Derek Kolstad (screenplay by), Shay Hatten (screenplay by), Chris Collins (screenplay by), Marc Abrams (screenplay by), Derek Kolstad (story by), Derek Kolstad (based on characters created by)',
        Actors: 'Keanu Reeves, Halle Berry, Ian McShane, Laurence Fishburne',
        Plot: 'Super-assassin John Wick is on the run after killing a member of the international assassin\'s guild, and with a $14 million price tag on his head - he is the target of hit men and women everywhere.',
        Language: 'Mandarin, Latin, English, Russian, Japanese, Italian, Arabic, Indonesian',
        Country: 'USA',
        Awards: 'N/A',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '7.6/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '90%'
          },
          {
            Source: 'Metacritic',
            Value: '73/100'
          }
        ],
        Metascore: '73',
        imdbRating: '7.6',
        imdbVotes: '166,855',
        imdbID: 'tt6146586',
        Type: 'movie',
        DVD: '23 Aug 2019',
        BoxOffice: 'N/A',
        Production: 'Lionsgate',
        Website: 'http://www.johnwick.movie/',
        Response: 'True'
      },
      {
        id: 3,
        Actors: 'Mark Wahlberg, Stanley Tucci, Kelsey Grammer, Nicola Peltz',
        Awards: '5 wins & 23 nominations.',
        BoxOffice: '$206,755,538',
        Country: 'USA, China, Hong Kong',
        DVD: '30 Sep 2014',
        Director: 'Michael Bay',
        Genre: 'Action, Adventure, Sci-Fi',
        Language: 'English',
        Metascore: '32',
        Plot: 'After the battle between the Autobots and Decepticons that leveled Chicago, humanity thinks that all alien robots are a threat. So Harold Attinger, a CIA agent, establishes a unit whose sole purpose is to hunt down all of them. But it turns out that they are aided by another alien robot who is searching for Optimus Prime. Cade Yeager, a "robotics expert", buys an old truck and upon examining it, he thinks it\'s a Transformer. When he powers it up, he discovers it\'s Optimus Prime. Later, men from the unit show up looking for Optimus. He helps Yeager and his daughter Tessa escape but are pursued by the hunter. They escape and Yeager learns from technology he took from the men that a technology magnate and defense contractor named Joshua Joyce is part of what\'s going on, so they go to find out what\'s going on.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@.jpg',
        Production: 'Paramount Pictures',
        Rated: 'PG-13',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '5.6/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '18%'
          },
          {
            Source: 'Metacritic',
            Value: '32/100'
          }
        ],
        Released: '27 Jun 2014',
        Response: 'True',
        Runtime: '165 min',
        Title: 'Transformers: Age of Extinction',
        Type: 'movie',
        Website: 'N/A',
        Writer: 'Ehren Kruger',
        Year: '2014',
        imdbID: 'tt2109248',
        imdbRating: '5.6',
        imdbVotes: '286,632'
      },
      {
        id: 4,
        Actors: 'Tom Holland, Samuel L. Jackson, Jake Gyllenhaal, Marisa Tomei',
        Awards: 'N/A',
        BoxOffice: 'N/A',
        Country: 'USA',
        DVD: '17 Sep 2019',
        Director: 'Jon Watts',
        Genre: 'Action, Adventure, Sci-Fi',
        Language: 'Italian, Czech, English',
        Metascore: '69',
        Plot: 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.jpg',
        Production: 'Sony Pictures',
        Rated: 'PG-13',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '7.7/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '90%'
          },
          {
            Source: 'Metacritic',
            Value: '69/100'
          }
        ],
        Released: '02 Jul 2019',
        Response: 'True',
        Runtime: '129 min',
        Title: 'Spider-Man: Far from Home',
        Type: 'movie',
        Website: 'https://www.spidermanfarfromhome.movie',
        Writer: 'Chris McKenna, Erik Sommers, Stan Lee (based on the Marvel comic book by), Steve Ditko (based on the Marvel comic book by)',
        Year: '2019',
        imdbID: 'tt6320628',
        imdbRating: '7.7',
        imdbVotes: '187,214'
      },
      {
        id: 5,
        Actors: 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans',
        Awards: 'N/A',
        BoxOffice: '$664,987,816',
        Country: 'USA',
        DVD: '14 Aug 2018',
        Director: 'Anthony Russo, Joe Russo',
        Genre: 'Action, Adventure, Sci-Fi',
        Language: 'English',
        Metascore: '68',
        Plot: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@.jpg',
        Production: 'Walt Disney Pictures',
        Rated: 'PG-13',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '8.5/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '85%'
          },
          {
            Source: 'Metacritic',
            Value: '68/100'
          }
        ],
        Released: '27 Apr 2018',
        Response: 'True',
        Runtime: '149 min',
        Title: 'Avengers: Infinity War',
        Type: 'movie',
        Website: 'http://marvel.com/movies/movie/223/avengers_infinity_war',
        Writer: 'Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos, Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)',
        Year: '2018',
        imdbID: 'tt4154756',
        imdbRating: '8.5',
        imdbVotes: '706,537'
      },
      {
        id: 6,
        Actors: 'Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah',
        Awards: 'Nominated for 1 Golden Globe. Another 27 wins & 99 nominations.',
        BoxOffice: 'N/A',
        Country: 'USA',
        DVD: '13 Apr 2004',
        Director: 'Quentin Tarantino',
        Genre: 'Action, Crime, Thriller',
        Language: 'English, Japanese, French',
        Metascore: '69',
        Plot: 'The lead character, called \'The Bride,\' was a member of the Deadly Viper Assassination Squad, led by her lover \'Bill.\' Upon realizing she was pregnant with Bill\'s child, \'The Bride\' decided to escape her life as a killer. She fled to Texas, met a young man, who, on the day of their wedding rehearsal was gunned down by an angry and jealous Bill (with the assistance of the Deadly Viper Assassination Squad). Four years later, \'The Bride\' wakes from a coma, and discovers her baby is gone. She, then, decides to seek revenge upon the five people who destroyed her life and killed her baby. The saga of Kill Bill Volume I begins.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@.jpg',
        Production: 'Miramax Films',
        Rated: 'R',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '8.1/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '85%'
          },
          {
            Source: 'Metacritic',
            Value: '69/100'
          }
        ],
        Released: '10 Oct 2003',
        Response: 'True',
        Runtime: '111 min',
        Title: 'Kill Bill: Vol. 1',
        Type: 'movie',
        Website: 'N/A',
        Writer: 'Quentin Tarantino, Quentin Tarantino (character The Bride), Uma Thurman (character The Bride)',
        Year: '2003',
        imdbID: 'tt0266697',
        imdbRating: '8.1',
        imdbVotes: '922,372'
      },
      {
        id: 7,
        Actors: 'Benjamin Walker, Dominic Cooper, Anthony Mackie, Mary Elizabeth Winstead',
        Awards: '1 nomination.',
        BoxOffice: '$37,300,000',
        Country: 'USA, Russia',
        DVD: '23 Oct 2012',
        Director: 'Timur Bekmambetov',
        Genre: 'Action, Fantasy, Horror, Western',
        Language: 'English',
        Metascore: '42',
        Plot: 'At the age of 9, Abraham Lincoln witnesses his mother being killed by a vampire, Jack Barts. Some 10 years later, he unsuccessfully tries to eliminate Barts but in the process makes the acquaintance of Henry Sturgess who teaches him how to fight and what is required to kill a vampire. The quid pro quo is that Abe will kill only those vampires that Henry directs him to. Abe relocates to Springfield where he gets a job as a store clerk while he studies the law and kills vampires by night. He also meets and eventually marries the pretty Mary Todd. Many years later as President of the United States, he comes to realize that vampires are fighting with the Confederate forces. As a result he mounts his own campaign to defeat them.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNjY2Mzc0MDA4NV5BMl5BanBnXkFtZTcwOTg5OTcxNw@@.jpg',
        Production: '20th Century Fox',
        Rated: 'R',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '5.9/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '34%'
          },
          {
            Source: 'Metacritic',
            Value: '42/100'
          }
        ],
        Released: '22 Jun 2012',
        Response: 'True',
        Runtime: '105 min',
        Title: 'Abraham Lincoln: Vampire Hunter',
        Type: 'movie',
        Website: 'N/A',
        Writer: 'Seth Grahame-Smith (screenplay by), Seth Grahame-Smith (based on the novel by)',
        Year: '2012',
        imdbID: 'tt1611224',
        imdbRating: '5.9',
        imdbVotes: '144,126'
      },
      {
        id: 8,
        Actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
        Awards: 'N/A',
        BoxOffice: 'N/A',
        Country: 'USA, UK, Canada',
        DVD: '30 Jul 2019',
        Director: 'Anthony Russo, Joe Russo',
        Genre: 'Action, Adventure, Sci-Fi',
        Language: 'English, Japanese, Xhosa',
        Metascore: '78',
        Plot: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@.jpg',
        Production: 'Marvel Studios',
        Rated: 'PG-13',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '8.6/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '94%'
          },
          {
            Source: 'Metacritic',
            Value: '78/100'
          }
        ],
        Released: '26 Apr 2019',
        Response: 'True',
        Runtime: '181 min',
        Title: 'Avengers: Endgame',
        Type: 'movie',
        Website: 'N/A',
        Writer: 'Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Jim Starlin (Thanos, Gamora & Drax created by), Jack Kirby (Groot created by)',
        Year: '2019',
        imdbID: 'tt4154796',
        imdbRating: '8.6',
        imdbVotes: '561,813'
      },
      {
        id: 9,
        Title: 'Rampage',
        Year: '2018',
        Rated: 'PG-13',
        Released: '13 Apr 2018',
        Runtime: '107 min',
        Genre: 'Action, Adventure, Sci-Fi',
        Director: 'Brad Peyton',
        Writer: 'Ryan Engle (screenplay by), Carlton Cuse (screenplay by), Ryan J. Condal (screenplay by), Adam Sztykiel (screenplay by), Ryan Engle (story by)',
        Actors: 'Dwayne Johnson, Naomie Harris, Malin Akerman, Jeffrey Dean Morgan',
        Plot: 'When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago.',
        Language: 'English, American Sign Language',
        Country: 'USA',
        Awards: 'N/A',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDA1NjA3ODU3OV5BMl5BanBnXkFtZTgwOTg3MTIwNTM@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '6.1/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '52%'
          },
          {
            Source: 'Metacritic',
            Value: '45/100'
          }
        ],
        Metascore: '45',
        imdbRating: '6.1',
        imdbVotes: '121,996',
        imdbID: 'tt2231461',
        Type: 'movie',
        DVD: '26 Jun 2018',
        BoxOffice: 'N/A',
        Production: 'Warner Bros. Pictures',
        Website: 'http://www.rampagethemovie.com/home',
        Response: 'True'
      },
      {
        id: 10,
        Title: 'Black Panther',
        Year: '2018',
        Rated: 'PG-13',
        Released: '16 Feb 2018',
        Runtime: '134 min',
        Genre: 'Action, Adventure, Sci-Fi',
        Director: 'Ryan Coogler',
        Writer: 'Ryan Coogler, Joe Robert Cole, Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel Comics by)',
        Actors: 'Chadwick Boseman, Michael B. Jordan, Lupita Nyong\'o, Danai Gurira',
        Plot: 'After the events of Captain America: Civil War, King T\'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country\'s new leader. However, T\'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakanadan special forces, to prevent Wakanda from being dragged into a world war.',
        Language: 'English, Swahili, Nama, Xhosa, Korean',
        Country: 'USA',
        Awards: '14 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '7.3/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '96%'
          },
          {
            Source: 'Metacritic',
            Value: '88/100'
          }
        ],
        Metascore: '88',
        imdbRating: '7.3',
        imdbVotes: '538,936',
        imdbID: 'tt1825683',
        Type: 'movie',
        DVD: '15 May 2018',
        BoxOffice: '$501,105,037',
        Production: 'Marvel Studios',
        Website: 'https://www.marvel.com/movies/black-panther',
        Response: 'True'
      },
      {
        id: 11,
        Title: 'Baby Driver',
        Year: '2017',
        Rated: 'R',
        Released: '28 Jun 2017',
        Runtime: '113 min',
        Genre: 'Action, Crime, Drama, Music, Thriller',
        Director: 'Edgar Wright',
        Writer: 'Edgar Wright',
        Actors: 'Ansel Elgort, Jon Bernthal, Jon Hamm, Eiza González',
        Plot: 'Baby is a young and partially hearing impaired getaway driver who can make any wild move while in motion with the right track playing. It\'s a critical talent he needs to survive his indentured servitude to the crime boss, Doc, who values his role in his meticulously planned robberies. However, just when Baby thinks he is finally free and clear to have his own life with his new girlfriend, Deborah, Doc coerces him back for another job. Now saddled with a crew of thugs too violently unstable to keep to Doc\'s plans, Baby finds himself and everything he cares for in terrible danger. To survive and escape the coming maelstrom, it will take all of Baby\'s skill, wits and daring, but even on the best track, can he make it when life is forcing him to face the music?',
        Language: 'English, American Sign Language',
        Country: 'UK, USA',
        Awards: 'Nominated for 3 Oscars. Another 31 wins & 44 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '7.6/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '93%'
          },
          {
            Source: 'Metacritic',
            Value: '86/100'
          }
        ],
        Metascore: '86',
        imdbRating: '7.6',
        imdbVotes: '381,970',
        imdbID: 'tt3890160',
        Type: 'movie',
        DVD: '10 Oct 2017',
        BoxOffice: '$107,770,367',
        Production: 'Sony Pictures',
        Website: 'http://www.babydriver-movie.com/',
        Response: 'True'
      },
      {
        id: 12,
        Title: 'Kong: Skull Island',
        Year: '2017',
        Rated: 'PG-13',
        Released: '10 Mar 2017',
        Runtime: '118 min',
        Genre: 'Action, Adventure, Fantasy, Sci-Fi',
        Director: 'Jordan Vogt-Roberts',
        Writer: 'Dan Gilroy (screenplay by), Max Borenstein (screenplay by), Derek Connolly (screenplay by), John Gatins (story by)',
        Actors: 'Tom Hiddleston, Samuel L. Jackson, Brie Larson, John C. Reilly',
        Plot: 'A washed up monster chaser convinces the U.S. Government to fund a trip to an unexplored island in the South Pacific. Under the guise of geological research, the team travels to "Skull Island". Upon arrival, the group discover that their mission may be complicated by the wildlife which inhabits the island. The beautiful vistas and deadly creatures create a visually stunning experience that is sure to keep your attention.',
        Language: 'English, Vietnamese',
        Country: 'USA, China',
        Awards: 'Nominated for 1 Oscar. Another 1 win & 15 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTUwMzI5ODEwNF5BMl5BanBnXkFtZTgwNjAzNjI2MDI@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '6.6/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '75%'
          },
          {
            Source: 'Metacritic',
            Value: '62/100'
          }
        ],
        Metascore: '62',
        imdbRating: '6.6',
        imdbVotes: '245,567',
        imdbID: 'tt3731562',
        Type: 'movie',
        DVD: '18 Jul 2017',
        BoxOffice: '$167,986,460',
        Production: 'Warner Bros. Pictures/Legendary Pictures',
        Website: 'http://kongskullislandmovie.com/',
        Response: 'True'
      },
      {
        id: 13,
        Title: 'Baahubali: The Beginning',
        Year: '2015',
        Rated: 'Not Rated',
        Released: '09 Jul 2015',
        Runtime: '159 min',
        Genre: 'Action, Drama',
        Director: 'S.S. Rajamouli',
        Writer: 'Vijayendra Prasad (story by), S.S. Rajamouli (screenplay by), C.H. Vijay Kumar (telugu dialogue), Ajay Kumar (telugu dialogue), Madhan Karky (tamil dialogue), Manoj Muntashir (hindi dialogue)',
        Actors: 'Prabhas, Rana Daggubati, Ramya Krishnan, Sathyaraj',
        Plot: 'When Sanga and her husband, part of a tribe living around the province of Mahismathi, save a drowning infant, little do they know the background of the infant or what the future holds for him. The kid grows up to as Shivudu, a free-spirit wanting to explore the mountains and in the process learns of his roots and then realizes the whole purpose of his life and ends up confronting the mighty Bhallala Deva!',
        Language: 'Telugu, Tamil, Hindi',
        Country: 'India',
        Awards: '22 wins & 12 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '8.1/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '87%'
          }
        ],
        Metascore: 'N/A',
        imdbRating: '8.1',
        imdbVotes: '94,499',
        imdbID: 'tt2631186',
        Type: 'movie',
        DVD: 'N/A',
        BoxOffice: 'N/A',
        Production: 'Arka Media Works',
        Website: 'http://baahubali.com/',
        Response: 'True'
      },
      {
        id: 14,
        Title: 'Girls Trip',
        Year: '2017',
        Rated: 'R',
        Released: '21 Jul 2017',
        Runtime: '122 min',
        Genre: 'Adventure, Comedy, Drama',
        Director: 'Malcolm D. Lee',
        Writer: 'Erica Rivinoja (story by), Kenya Barris (story by), Tracy Oliver (story by), Kenya Barris (screenplay by), Tracy Oliver (screenplay by)',
        Actors: 'Regina Hall, Queen Latifah, Jada Pinkett Smith, Tiffany Haddish',
        Plot: 'When four lifelong friends travel to New Orleans for the annual Essence Festival, sisterhoods are rekindled, wild sides are rediscovered, and there\'s enough dancing, drinking, brawling, and romancing to make the Big Easy blush.',
        Language: 'English',
        Country: 'USA, Canada',
        Awards: '10 wins & 32 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjMwNTEzODUwMV5BMl5BanBnXkFtZTgwNjE5NjA5MjI@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '6.2/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '91%'
          },
          {
            Source: 'Metacritic',
            Value: '71/100'
          }
        ],
        Metascore: '71',
        imdbRating: '6.2',
        imdbVotes: '30,274',
        imdbID: 'tt3564472',
        Type: 'movie',
        DVD: '17 Oct 2017',
        BoxOffice: '$115,088,305',
        Production: 'Universal Pictures',
        Website: 'http://www.girlstripmovie.com/',
        Response: 'True'
      },
      {
        id: 15,
        Title: 'The Boss Baby',
        Year: '2017',
        Rated: 'PG',
        Released: '31 Mar 2017',
        Runtime: '97 min',
        Genre: 'Animation, Adventure, Comedy, Family, Fantasy',
        Director: 'Tom McGrath',
        Writer: 'Michael McCullers, Marla Frazee (based on the book by)',
        Actors: 'Alec Baldwin, Steve Buscemi, Jimmy Kimmel, Lisa Kudrow',
        Plot: 'Seven-year-old Tim Templeton has always been a boy of an overactive imagination, and for the past seven years, life was all peaches for him, getting all the love and affection from his caring parents. However, life will never be the same and Tim won\'t be the centre of attention anymore as the arrival of an improbable new brother named Boss Baby, dressed in a black suit complete with a tie and a briefcase, will shortly rob him of all love, as he takes over the whole Templetons\' house. Nevertheless, although this may be true, soon, Tim and the new Boss in a diaper will need to put differences aside and join forces, as a sneaky scheme involving the head of Puppy Co. threatens to tilt the balance of power towards their insidiously adorable furry antagonists, not to mention that the next Pet Convention is in only two days.. Brothers, hurry up.',
        Language: 'English, Spanish',
        Country: 'USA',
        Awards: 'Nominated for 1 Oscar. Another 1 win & 19 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '6.3/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '52%'
          },
          {
            Source: 'Metacritic',
            Value: '50/100'
          }
        ],
        Metascore: '50',
        imdbRating: '6.3',
        imdbVotes: '96,846',
        imdbID: 'tt3874544',
        Type: 'movie',
        DVD: '25 Jul 2017',
        BoxOffice: '$174,996,080',
        Production: 'DreamWorks Animation',
        Website: 'N/A',
        Response: 'True'
      },
      {
        id: 16,
        Title: 'Game Night',
        Year: '2018',
        Rated: 'R',
        Released: '23 Feb 2018',
        Runtime: '100 min',
        Genre: 'Action, Comedy, Crime, Mystery',
        Director: 'John Francis Daley, Jonathan Goldstein',
        Writer: 'Mark Perez',
        Actors: 'Jason Bateman, Rachel McAdams, Kyle Chandler, Sharon Horgan',
        Plot: 'A group of friends who meet regularly for game nights find themselves entangled in a real-life mystery when the shady brother of one of them is seemingly kidnapped by dangerous gangsters.',
        Language: 'English',
        Country: 'USA',
        Awards: 'N/A',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '6.9/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '85%'
          },
          {
            Source: 'Metacritic',
            Value: '66/100'
          }
        ],
        Metascore: '66',
        imdbRating: '6.9',
        imdbVotes: '171,243',
        imdbID: 'tt2704998',
        Type: 'movie',
        DVD: '22 May 2018',
        BoxOffice: '$33,537,766',
        Production: 'New Line Cinema',
        Website: 'http://www.gamenight.movie/',
        Response: 'True'
      },
      {
        id: 17,
        Title: 'Blockers',
        Year: '2018',
        Rated: 'R',
        Released: '06 Apr 2018',
        Runtime: '102 min',
        Genre: 'Comedy',
        Director: 'Kay Cannon',
        Writer: 'Brian Kehoe, Jim Kehoe',
        Actors: 'Leslie Mann, John Cena, Ike Barinholtz, Kathryn Newton',
        Plot: 'Three parents try to stop their daughters from losing their virginity on prom night.',
        Language: 'English',
        Country: 'USA',
        Awards: '1 nomination.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjE0ODIzNjkzMl5BMl5BanBnXkFtZTgwODQ3MzU4NDM@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '6.2/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '83%'
          },
          {
            Source: 'Metacritic',
            Value: '69/100'
          }
        ],
        Metascore: '69',
        imdbRating: '6.2',
        imdbVotes: '60,263',
        imdbID: 'tt2531344',
        Type: 'movie',
        DVD: '19 Jun 2018',
        BoxOffice: 'N/A',
        Production: 'Universal Pictures',
        Website: 'N/A',
        Response: 'True'
      },
      {
        id: 18,
        Title: 'Deadpool',
        Year: '2016',
        Rated: 'R',
        Released: '12 Feb 2016',
        Runtime: '108 min',
        Genre: 'Action, Adventure, Comedy, Sci-Fi',
        Director: 'Tim Miller',
        Writer: 'Rhett Reese, Paul Wernick',
        Actors: 'Ryan Reynolds, Karan Soni, Ed Skrein, Michael Benyaer',
        Plot: 'This is the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.',
        Language: 'English',
        Country: 'USA',
        Awards: 'Nominated for 2 Golden Globes. Another 27 wins & 73 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '8.0/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '84%'
          },
          {
            Source: 'Metacritic',
            Value: '65/100'
          }
        ],
        Metascore: '65',
        imdbRating: '8.0',
        imdbVotes: '839,040',
        imdbID: 'tt1431045',
        Type: 'movie',
        DVD: '10 May 2016',
        BoxOffice: '$328,674,489',
        Production: '20th Century Fox',
        Website: 'N/A',
        Response: 'True'
      },
      {
        id: 19,
        Title: 'Life of the Party',
        Year: '2018',
        Rated: 'PG-13',
        Released: '11 May 2018',
        Runtime: '105 min',
        Genre: 'Comedy',
        Director: 'Ben Falcone',
        Writer: 'Melissa McCarthy, Ben Falcone',
        Actors: 'Melissa McCarthy, Matt Walsh, Molly Gordon, Ben Falcone',
        Plot: 'After her husband abruptly asks for a divorce, a middle-aged mother returns to college in order to complete her degree.',
        Language: 'English',
        Country: 'USA',
        Awards: 'N/A',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTkzOTk0MjYwM15BMl5BanBnXkFtZTgwNTE5ODQxNTM@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '5.6/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '38%'
          },
          {
            Source: 'Metacritic',
            Value: '46/100'
          }
        ],
        Metascore: '46',
        imdbRating: '5.6',
        imdbVotes: '27,603',
        imdbID: 'tt5619332',
        Type: 'movie',
        DVD: '07 Aug 2018',
        BoxOffice: 'N/A',
        Production: 'New Line Cinema',
        Website: 'https://www.facebook.com/LifeOfThePartyMovie/',
        Response: 'True'
      },
      {
        id: 20,
        Title: 'Crazy Rich Asians',
        Year: '2018',
        Rated: 'PG-13',
        Released: '15 Aug 2018',
        Runtime: '120 min',
        Genre: 'Comedy, Drama, Romance',
        Director: 'Jon M. Chu',
        Writer: 'Peter Chiarelli (screenplay by), Adele Lim (screenplay by), Kevin Kwan (based on the novel "Crazy Rich Asians" by)',
        Actors: 'Constance Wu, Henry Golding, Michelle Yeoh, Gemma Chan',
        Plot: 'This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend\'s family.',
        Language: 'English, Mandarin, Cantonese, Hokkien, French, Malay',
        Country: 'USA',
        Awards: 'N/A',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '6.9/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '91%'
          },
          {
            Source: 'Metacritic',
            Value: '74/100'
          }
        ],
        Metascore: '74',
        imdbRating: '6.9',
        imdbVotes: '106,287',
        imdbID: 'tt3104988',
        Type: 'movie',
        DVD: '20 Nov 2018',
        BoxOffice: 'N/A',
        Production: 'Warner Bros. Pictures',
        Website: 'N/A',
        Response: 'True'
      },
      {
        id: 21,
        Title: 'Dirty Grandpa',
        Year: '2016',
        Rated: 'R',
        Released: '22 Jan 2016',
        Runtime: '102 min',
        Genre: 'Comedy',
        Director: 'Dan Mazer',
        Writer: 'John Phillips',
        Actors: 'Robert De Niro, Zac Efron, Zoey Deutch, Aubrey Plaza',
        Plot: 'Jason Kelly, the grandson of Dick Kelly, loses his grandmother about two weeks before his wedding to Meredith. He tries to assist his grandfather and console him for his loss, but was rather tricked into a spring break road trip; chasing youth once again. with the help of Shadia and Lenore, the two men go on an adventure they\'ll never forget.',
        Language: 'English',
        Country: 'USA',
        Awards: '2 wins & 11 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMzk0NzkyNDk2M15BMl5BanBnXkFtZTgwNDczOTU3NzE@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '5.9/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '11%'
          },
          {
            Source: 'Metacritic',
            Value: '21/100'
          }
        ],
        Metascore: '21',
        imdbRating: '5.9',
        imdbVotes: '103,944',
        imdbID: 'tt1860213',
        Type: 'movie',
        DVD: '17 May 2016',
        BoxOffice: '$34,690,808',
        Production: 'Lionsgate Films',
        Website: 'N/A',
        Response: 'True'
      },
      {
        id: 22,
        Title: 'Bad Moms',
        Year: '2016',
        Rated: 'R',
        Released: '29 Jul 2016',
        Runtime: '100 min',
        Genre: 'Comedy',
        Director: 'Jon Lucas, Scott Moore',
        Writer: 'Jon Lucas, Scott Moore',
        Actors: 'Mila Kunis, Kathryn Hahn, Kristen Bell, Christina Applegate',
        Plot: 'Amy has a seemingly perfect life - a great marriage, over-achieving kids, a beautiful home and a career. However, she\'s overworked, over-committed and exhausted to the point that she\'s about to snap. Fed up, she joins forces with two other over-stressed moms on a quest to liberate themselves from conventional responsibilities - going on a wild, un-mom-like binge of long overdue freedom, fun and self-indulgence - putting them on a collision course with PTA Queen Bee Gwendolyn and her clique of devoted perfect moms.',
        Language: 'English',
        Country: 'USA',
        Awards: '3 wins & 5 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjIwNzE5MTgwNl5BMl5BanBnXkFtZTgwNjM4OTA0OTE@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '6.2/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '58%'
          },
          {
            Source: 'Metacritic',
            Value: '60/100'
          }
        ],
        Metascore: '60',
        imdbRating: '6.2',
        imdbVotes: '103,834',
        imdbID: 'tt4651520',
        Type: 'movie',
        DVD: '01 Nov 2016',
        BoxOffice: '$113,217,955',
        Production: 'Block Entertainment',
        Website: 'http://stxmovies.com/badmoms/',
        Response: 'True'
      },
      {
        id: 23,
        Title: 'Central Intelligence',
        Year: '2016',
        Rated: 'PG-13',
        Released: '17 Jun 2016',
        Runtime: '107 min',
        Genre: 'Action, Comedy, Crime',
        Director: 'Rawson Marshall Thurber',
        Writer: 'Ike Barinholtz (screenplay), David Stassen (screenplay), Rawson Marshall Thurber (screenplay), Ike Barinholtz (story), David Stassen (story)',
        Actors: 'Dwayne Johnson, Kevin Hart, Amy Ryan, Danielle Nicolet',
        Plot: 'Calvin Joyner was voted in high school the guy most likely to succeed. 20 years later he\'s an accountant. As his high school reunion approaches, he tries to make contact with his old schoolmates. And someone named Bob Stone contacts him. He says that he was known as Robbie Weirdicht in school. Calvin remembers that he was picked on, as a matter of fact after an extremely nasty prank he left school. They agree to meet and Calvin is surprised by how much he has changed. Bob asks Calvin to help him out. He says yes and the next thing he knows some men burst into his home. They\'re CIA, the one in charge is looking for Stone, she says he\'s a rogue agent. When they can\'t find Bob they leave. Later he approaches Calvin telling him, he is not a rogue agent, he\'s trying to find a person known as the Black Badger who is planning to sell some information that in the wrong hands can be disastrous. so he needs Calvin\'s help to stop him. Calvin\'s not sure whom he should believe.',
        Language: 'English',
        Country: 'USA, China',
        Awards: '2 wins & 8 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMjA2NzEzNjIwNl5BMl5BanBnXkFtZTgwNzgwMTEzNzE@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '6.3/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '71%'
          },
          {
            Source: 'Metacritic',
            Value: '52/100'
          }
        ],
        Metascore: '52',
        imdbRating: '6.3',
        imdbVotes: '142,652',
        imdbID: 'tt1489889',
        Type: 'movie',
        DVD: '27 Sep 2016',
        BoxOffice: '$127,380,061',
        Production: 'Warner Bros. Pictures',
        Website: 'http://www.centralintelligencemovie.com/',
        Response: 'True'
      },
      {
        id: 24,
        Title: 'Dunkirk',
        Year: '2017',
        Rated: 'PG-13',
        Released: '21 Jul 2017',
        Runtime: '106 min',
        Genre: 'Action, Drama, History, Thriller, War',
        Director: 'Christopher Nolan',
        Writer: 'Christopher Nolan',
        Actors: 'Fionn Whitehead, Damien Bonnard, Aneurin Barnard, Lee Armstrong',
        Plot: 'Evacuation of Allied soldiers from Belgium, the British Empire, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26- June 04, 1940, during Battle of France in World War II.',
        Language: 'English, French, German',
        Country: 'UK, Netherlands, France, USA',
        Awards: 'Won 3 Oscars. Another 51 wins & 197 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '7.9/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '92%'
          },
          {
            Source: 'Metacritic',
            Value: '94/100'
          }
        ],
        Metascore: '94',
        imdbRating: '7.9',
        imdbVotes: '482,180',
        imdbID: 'tt5013056',
        Type: 'movie',
        DVD: '19 Dec 2017',
        BoxOffice: '$188,042,171',
        Production: 'Warner Bros. Pictures',
        Website: 'http://www.dunkirkmovie.com',
        Response: 'True'
      },
      {
        id: 25,
        Title: 'Gravity',
        Year: '2013',
        Rated: 'PG-13',
        Released: '04 Oct 2013',
        Runtime: '91 min',
        Genre: 'Drama, Sci-Fi, Thriller',
        Director: 'Alfonso Cuarón',
        Writer: 'Alfonso Cuarón, Jonás Cuarón',
        Actors: 'Sandra Bullock, George Clooney, Ed Harris, Orto Ignatiussen',
        Plot: 'Dr. Ryan Stone (Sandra Bullock) is a brilliant medical engineer on her first shuttle mission, with veteran astronaut Matt Kowalski (George Clooney) in command of his last flight before retiring. But on a seemingly routine spacewalk, disaster strikes. The shuttle is destroyed, leaving Stone and Kowalsky completely alone - tethered to nothing but each other and spiraling out into the blackness.',
        Language: 'English, Greenlandic',
        Country: 'UK, USA',
        Awards: 'Won 7 Oscars. Another 232 wins & 175 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '7.7/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '96%'
          },
          {
            Source: 'Metacritic',
            Value: '96/100'
          }
        ],
        Metascore: '96',
        imdbRating: '7.7',
        imdbVotes: '721,996',
        imdbID: 'tt1454468',
        Type: 'movie',
        DVD: '25 Feb 2014',
        BoxOffice: '$274,084,951',
        Production: 'Warner Bros. Pictures',
        Website: 'N/A',
        Response: 'True'
      },
      {
        id: 26,
        Title: 'A Star Is Born',
        Year: '2018',
        Rated: 'R',
        Released: '05 Oct 2018',
        Runtime: '136 min',
        Genre: 'Drama, Music, Romance',
        Director: 'Bradley Cooper',
        Writer: 'Eric Roth (screenplay by), Bradley Cooper (screenplay by), Will Fetters (screenplay by), Moss Hart (based on the 1954 screenplay by), John Gregory Dunne (based on the 1976 screenplay by), Joan Didion (based on the 1976 screenplay by), Frank Pierson (based on the 1976 screenplay by), William A. Wellman (based on a story by), Robert Carson (based on a story by)',
        Actors: 'Lady Gaga, Bradley Cooper, Sam Elliott, Andrew Dice Clay',
        Plot: 'Jackson Maine (Cooper), a country music star on the brink of decline, discovers a talented unknown named Ally (Germanotta). As the two begin a passionate love affair, Jackson coaxes Ally into the spotlight, catapulting her to stardom. But as Ally\'s career quickly eclipses his own, Jack finds it increasingly hard to handle his fading glory.',
        Language: 'English',
        Country: 'USA',
        Awards: '1 nomination.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '7.7/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '90%'
          },
          {
            Source: 'Metacritic',
            Value: '88/100'
          }
        ],
        Metascore: '88',
        imdbRating: '7.7',
        imdbVotes: '276,609',
        imdbID: 'tt1517451',
        Type: 'movie',
        DVD: '19 Feb 2019',
        BoxOffice: 'N/A',
        Production: 'Warner Bros. Pictures',
        Website: 'http://www.astarisbornmovie.com/',
        Response: 'True'
      },
      {
        id: 27,
        Title: 'Despicable Me 3',
        Year: '2017',
        Rated: 'PG',
        Released: '30 Jun 2017',
        Runtime: '89 min',
        Genre: 'Animation, Adventure, Comedy, Family, Fantasy, Sci-Fi',
        Director: 'Kyle Balda, Pierre Coffin, Eric Guillon(co-director)',
        Writer: 'Cinco Paul, Ken Daurio',
        Actors: 'Steve Carell, Kristen Wiig, Trey Parker, Miranda Cosgrove',
        Plot: 'After he is fired from the Anti-Villain League for failing to take down the latest bad guy to threaten humanity, Gru finds himself in the midst of a major identity crisis. But when a mysterious stranger shows up to inform Gru that he has a long-lost twin brother-a brother who desperately wishes to follow in his twin\'s despicable footsteps-one former super-villain will rediscover just how good it feels to be bad.',
        Language: 'English',
        Country: 'USA',
        Awards: '25 nominations.',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNjUyNzQ2MTg3Ml5BMl5BanBnXkFtZTgwNzE4NDM3MTI@.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '6.3/10'
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '58%'
          },
          {
            Source: 'Metacritic',
            Value: '49/100'
          }
        ],
        Metascore: '49',
        imdbRating: '6.3',
        imdbVotes: '97,240',
        imdbID: 'tt3469046',
        Type: 'movie',
        DVD: '05 Dec 2017',
        BoxOffice: '$264,194,540',
        Production: 'Universal Pictures',
        Website: 'http://www.despicable.me/',
        Response: 'True'
      }
    ];
    return { movies };
  }

}
