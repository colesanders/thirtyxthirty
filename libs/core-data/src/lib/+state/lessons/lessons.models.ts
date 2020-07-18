import { Lesson } from '@thirty/api-interfaces';

export interface LessonsEntity{
  id: string | number; // Primary ID
  name: string,
  description: string,
  percentComplete: number,
  favorite: boolean,
}
