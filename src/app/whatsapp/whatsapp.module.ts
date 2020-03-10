import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsappRoutingModule } from './whatsapp-routing.module';
import { ChatsComponent } from './chats/chats.component';
import { ChatComponent } from './chat/chat.component';
import { GroupAdminEditComponent } from './group-admin-edit/group-admin-edit.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { GroupChatRightsComponent } from './group-chat-rights/group-chat-rights.component';


@NgModule({
  declarations: [ChatsComponent, ChatComponent, GroupAdminEditComponent, GroupChatComponent, GroupChatRightsComponent],
  imports: [
    CommonModule,
    WhatsappRoutingModule
  ]
})
export class WhatsappModule { }
