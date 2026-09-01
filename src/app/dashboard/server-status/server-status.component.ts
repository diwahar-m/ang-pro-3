import { Component, OnInit, OnDestroy, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  //  private destroyRef = inject(DestroyRef);
  // constructor() { 
  //   setInterval(() => { 
  //     const  rnd = Math.random(); 

  //     if(rnd < 0.5){
  //       this.currentStatus = 'online';
  //     } else if(rnd < 0.9){ 
  //       this.currentStatus = 'offline';
  //     } else {
  //       this.currentStatus = 'unknown';
  //     }
  //   } , 5000);
  // }

  private interval?: ReturnType<typeof setInterval>;
  ngOnInit() {  
    this.interval = setInterval(() => { 
      const  rnd = Math.random(); 

      if(rnd < 0.5){
        this.currentStatus = 'online';
      } else if(rnd < 0.9){ 
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    } , 5000);

    // this.destroyRef.onDestroy(() => {
    //   clearInterval(this.interval);
    // });

  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT'); 

   }

   ngOnDestroy() {
    clearTimeout(this.interval);
   }
}
