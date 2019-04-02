import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';

@NgModule({
  declarations: [ChatComponent, ChatListComponent, ChatInboxComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ChatModule { }
