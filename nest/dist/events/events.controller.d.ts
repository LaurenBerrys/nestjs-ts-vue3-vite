import { ResponseData } from '../interface/code';
import { CreateEventsDto } from './create-events.dto';
import { UpdateEventsDto } from 'src/events/upevents';
import { Event } from './events.entity';
import { Repository } from 'typeorm';
export declare class EventsController {
    private readonly events;
    private readonly logger;
    constructor(events: Repository<Event>);
    findAll(): Promise<ResponseData>;
    practice(name: any): Promise<ResponseData>;
    findOne(id: any): Promise<ResponseData>;
    create(input: CreateEventsDto): Promise<ResponseData>;
    update(id: any, input: UpdateEventsDto): Promise<ResponseData>;
    delete(id: any): Promise<ResponseData>;
}
