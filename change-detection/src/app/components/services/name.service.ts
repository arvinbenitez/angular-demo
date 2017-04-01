import { Injectable } from '@angular/core';

@Injectable()
export class NameService {
  private randomName: string[] = ['Arvin', 'Vince', 'Lyn', 'Ann', 'Lebron', 'Jeff', 'Michael',
    'Madonna', 'Gordon', 'Suzy'];

  public generateName() {
    const random = Math.floor(Math.random() * this.randomName.length);
    return this.randomName[random];
  }
}
