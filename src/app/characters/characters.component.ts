import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';

class Average {
  'lv': number;
  'HP': number;
  'MP': number;
  'NB1': number;
  'NB2': number;
  'NB3': number;
  'NB4': number;
  'NB5': number;
  'NB6': number;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  // characterURLsList: string[] = [''];

  characterURL: string;

  charactersList: Character[] = [];



  average: Average;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {

  }

  onClick(): void {
    this.addCharactersList(this.characterURL);

  }

  addCharactersList(characterURL): void {
    this.characterService.getCharacter(characterURL)
      .subscribe(character => {
        this.charactersList.push(character);
        this.average = this.getAverage(this.charactersList);
      });

  }

  getSum(array: any[]): Average[] {
    return array.reduce((x, y) => {
      return {
        'lv': Number(x['lv']) + Number(y['lv']),
        'HP': Number(x['HP']) + Number(y['HP']),
        'MP': Number(x['MP']) + Number(y['MP']),
        'NB1': Number(x['NB1']) + Number(y['NB1']),
        'NB2': Number(x['NB2']) + Number(y['NB2']),
        'NB3': Number(x['NB3']) + Number(y['NB3']),
        'NB4': Number(x['NB4']) + Number(y['NB4']),
        'NB5': Number(x['NB5']) + Number(y['NB5']),
        'NB6': Number(x['NB6']) + Number(y['NB6']),
      };
    });
  }

  getAverage(array: any[]) {
    const sum: Average[] = this.getSum(array);
    return {
      'lv': sum['lv'] / array.length,
      'HP': sum['HP'] / array.length,
      'MP': sum['MP'] / array.length,
      'NB1': sum['NB1'] / array.length,
      'NB2': sum['NB2'] / array.length,
      'NB3': sum['NB3'] / array.length,
      'NB4': sum['NB4'] / array.length,
      'NB5': sum['NB5'] / array.length,
      'NB6': sum['NB6'] / array.length,
    };

  }
}
