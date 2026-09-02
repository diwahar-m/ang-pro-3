import { afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // encapsulation used to add css styles of children here
  host: { 
    class: 'control', 
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() { 
  //   console.log('Clicked!');
  // }
  label  = input.required<string>();  
  private el = inject(ElementRef); 
  // @ContentChild('input') private control: ElementRef<HTMLInputElement | HTMLTextAreaElement> | undefined;
  private control = 
  contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() { 
    afterRender(() => {
      console.log('after Render');
    })

    afterNextRender(() => {
      console.log('after Next Render');
    })
  }

  ngAfterContentInit() {}




  onClick() { 
    console.log('Clicked!')
    console.log(this.el);
    console.log(this.control());
  }

}
 