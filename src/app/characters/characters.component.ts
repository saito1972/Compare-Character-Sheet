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
  'used_exp': number;
  'now_exp': number;
  'money': number;
  'price_all_sum': number;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characterURLs: string;

  charactersList: Character[] = [];

  average: Average;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {

  }

  async onClick() {
    const urls = this.characterURLs.split(/\r\n|\r|\n/);
    console.log(urls);
    for (let i = 0; i < urls.length; i++) {
      await this.addCharactersList(urls[i]);
    }



    // this.characterURLs.split('[\r\n]').map(async (url) => {
    //   const hoge = await this.addCharactersList(url);
    //   console.log(hoge);
    // });
  }

  async addCharactersList(characterURL) {
    // console.log(characterURL);
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
        'used_exp': Number(x['used_exp']) + Number(y['used_exp']),
        'now_exp': Number(x['now_exp']) + Number(y['now_exp']),
        'money': Number(x['money']) + Number(y['money']),
        'price_all_sum': Number(x['price_all_sum']) + Number(y['price_all_sum']),
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
      'used_exp': sum['used_exp'] / array.length,
      'now_exp': sum['now_exp'] / array.length,
      'money': sum['money'] / array.length,
      'price_all_sum': sum['price_all_sum'] / array.length,
    };

  }
}
