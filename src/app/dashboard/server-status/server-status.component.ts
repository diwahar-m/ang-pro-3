import { Component, OnInit, OnDestroy, DestroyRef, inject, signal, effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  // currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline'); 
  constructor() { 
    effect(() => { 
      console.log(this.currentStatus());
      // we have onCleanup func to clear a timer.
    })
  }

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
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
      } else if(rnd < 0.9){ 
        // this.currentStatus = 'offline';
         this.currentStatus.set('offline');
      } else {
        // this.currentStatus = 'unknown';
        this.currentStatus.set('unknown');
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
