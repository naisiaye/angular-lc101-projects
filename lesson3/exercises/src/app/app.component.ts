import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled : boolean = true;


  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
    }
  }
  handleLanding(item) {
      window.alert('The shuttle is landing. Landing gear engaged.');
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'The shuttle has landed.';
      item.style.bottom = '0px';
  }
  handleAbort(item){
      let result = window.confirm('Are you sure you wish to abort the mission?');
      if (result) {
       this.color = 'red';
       this.height = 0;
       this.width = 0;
       this.message = 'Mission aborted.';
       item.style.bottom = '0px';
      }
  }
  distanceChecker(){
      if (this.width > 450000 || this.width < 0 || this.height < 0 || this.height > 310000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }
  moveRocket(item, direction: string){
    this.distanceChecker();
      if (direction === 'right'){
        if(parseInt(item.style.left) <= 460){
          let movement = parseInt(item.style.left) + 10 + 'px';
          item.style.left = movement;
          this.width = this.width + 10000;
        }
      } else if (direction === 'left'){
        if(parseInt(item.style.left) >= -10){
          let movement = parseInt(item.style.left) - 10 + 'px';
          item.style.left = movement;
          this.width = this.width - 10000;
        }
      } else if(direction === 'top'){
        if(parseInt(item.style.bottom) <= 320){
          let movement = parseInt(item.style.bottom) + 10 + 'px';
          item.style.bottom = movement;
          this.height = this.height + 10000;
        }
      } else {
        if(parseInt(item.style.bottom) >= 0){
          let movement = parseInt(item.style.bottom) - 10 + 'px';
          item.style.bottom = movement;
          this.height = this.height - 10000;
        }
      }
  }
}

