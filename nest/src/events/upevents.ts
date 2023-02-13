import { PartialType } from '@nestjs/mapped-types';
import { CreateEventsDto } from './create-events.dto';
export class UpdateEventsDto extends PartialType(CreateEventsDto) {}
