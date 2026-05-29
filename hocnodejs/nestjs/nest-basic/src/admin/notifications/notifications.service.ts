import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class NotificationsService {
    @OnEvent('order.created')
    sendOrderNotifcation(payload: any) {
        console.log('Đã gửi thông báo cho admin', payload);
    }
}
