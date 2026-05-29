import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class OrdersService {
    constructor(private eventEmitter: EventEmitter2) {
    }
    create() {
        const orderId = 10;
        this.eventEmitter.emit('order.created', { orderId }); //phát event
        return 'Order created';
    }
}
