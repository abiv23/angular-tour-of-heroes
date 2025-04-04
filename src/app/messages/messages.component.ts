import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  imports: [NgIf, NgFor],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class Messages {
  constructor(public messageService: MessageService) {}
}
