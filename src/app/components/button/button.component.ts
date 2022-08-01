import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() backgroundColor: string = '';
  @Input() text: string = '';
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.btnClick.emit();
  }
}
