import { Component } from '@angular/core';

@Component({
  selector: 'app-nemo-game',
  templateUrl: './nemo-game.component.html',
  styleUrls: ['./nemo-game.component.css']
})
export class NemoGameComponent {
  circles: string[] = Array(10).fill('/assets/regular_circle.jpg');
  attempts: number = 6;
  message: string = '';
  nemoCircle: number = Math.floor(Math.random() * 10);
  gameIsOver: boolean = false;
  imagePathNemo: string = '/assets/nemo1.jpg'; 

  ngOnInit(): void {
    
  }

  handleCircleClick(index: number) {
    if (this.attempts <= 0 || this.gameIsOver) {
      return;
    }
  
    this.attempts--;
  
    if (index === this.nemoCircle) {
      this.circles[index] = this.imagePathNemo;
      this.message = `Congratulations! You Win in ${6 - this.attempts} attempts.`;
      this.gameIsOver = true;
    } else {
      this.circles[index] = '/assets/cross.jpg'; 
    }
  
    if (this.attempts === 0 && !this.gameIsOver) {
      this.message = 'Sorry, You Lose..!!';
      this.gameIsOver = true;
    }
  }  

}
