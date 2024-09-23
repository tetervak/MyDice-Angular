import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RollData} from "./roll-data";
import {FormsModule} from "@angular/forms";
import {DiceDisplayComponent} from "./dice-display/dice-display.component";
import {DiceRollerService} from "./dice-roller.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    DiceDisplayComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  diceValues: number[] = [];
  total: number = 0;
  numberOfDice: number = 3;

  constructor(private service: DiceRollerService) {
  }

  onRollDice(): void {
    let rollData: RollData = this.service.getRollData(this.numberOfDice);
    this.diceValues =  rollData.values;
    this.total = rollData.total;
  }

  onReset(): void{
    this.diceValues = [];
    this.total = 0;
    this.numberOfDice = 3;
  }

}
