import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '@thirty/api-interfaces';
import { Observable, BehaviorSubject} from 'rxjs';
import * as Rx from "rxjs";

export const BASE_URL = 'https://thirtyxthirty-lessons.herokuapp.com/lessons';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  private blankLesson:Lesson = {
    id: null,
    name: '',
    description: '',
    percentComplete: 0,
    favorite: false

  }

  private m_lesson$ = new Rx.BehaviorSubject<Lesson>(this.blankLesson);

  get lesson$(): Observable<Lesson> {
    return this.m_lesson$.asObservable();
  }

  constructor(private http: HttpClient) { }

  getLessons(): Observable<[Lesson]> {
    return this.http.get<[Lesson]>(BASE_URL);
  }

  getLessonById(id: number): Observable<Lesson> {
    return this.http.get<Lesson>(BASE_URL + "/" + id);
  }

  setLessonBlank(){
    this.m_lesson$.next(this.blankLesson);
  }

  setLessonById(id: number) {
    this.getLessonById(id).subscribe(lesson => {
      this.m_lesson$.next(lesson);
    });
  }

  deleteLesson(lesson: Lesson) {
    return this.http.delete(BASE_URL + "/" + lesson.id);
  }

  createLesson(lesson: Lesson) {
    return this.http.post(BASE_URL, lesson);
  }

  updateLesson(lesson: Lesson){
    return this.http.put(BASE_URL + "/" + lesson.id, lesson);
  }
}
