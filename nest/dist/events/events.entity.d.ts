import { Attendee } from './attendee.entity';
export declare class Event {
    id: number;
    name: string;
    description: string;
    when: Date;
    address: string;
    attendees: Attendee[];
}
