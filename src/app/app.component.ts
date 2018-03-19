import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    player1_name="Player 1";
    getP1Name(p1_name: NgForm){
        let name=p1_name.value;
        let temp = name.player1;
        this.player1_name= temp;
    }
    player2_name="Player 2";
    getP2Name(p2_name: NgForm){
        let name=p2_name.value;
        let temp = name.player2;
        this.player2_name= temp;
             console.log(this.board);
    }

    //game logic
    board:Array<any> = ["X","","",
                        "","X","",
                        "","",'X'];


}
