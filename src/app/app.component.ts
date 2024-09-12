import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RollData} from "./roll-data";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  diceValues: number[] = [];
  total: number = 0;
  numberOfDice: number = 3;

  private getRandomDiceValue(): number {
    return 1 + Math.floor(6*Math.random());
  }

  private getRollData(numberOfDice: number): RollData {
    const values: number[] = [];
    let total: number = 0;
    for(let i: number = 0; i < numberOfDice; i++){
      let diceValue = this.getRandomDiceValue()
      values.push(diceValue);
      total += diceValue;
    }
    return {
      numberOfDice: numberOfDice,
      values: values,
      total: total
    };
  }

  onRollDice(): void {
    let rollData: RollData = this.getRollData(this.numberOfDice);
    this.diceValues =  rollData.values;
    this.total = rollData.total;
  }

  onReset(): void{
    this.diceValues = [];
    this.total = 0;
    this.numberOfDice = 3;
  }

}
