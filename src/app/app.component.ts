import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

export class Query {
  
  constructor(protected name: any) { }

  getValue() {
    return this.name.test;
  }
}
export class Test extends Query {

  res: any = this.getValue();

  constructor() {
    super({ test: 1 });
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: any;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  autoCompleteControl = new FormControl('');
  filteredOptions: Observable<string[]> = this.autoCompleteControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  );

  constructor() {
  }

  toggleTheme() {
    
    if (document.body.classList.contains('dark')) {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.toppingList.filter(option => option.toLowerCase().includes(filterValue));
  }
}
