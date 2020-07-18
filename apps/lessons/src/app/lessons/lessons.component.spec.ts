import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { LessonService } from '@thirty/core-data';
import { MaterialModule } from '@thirty/material';
import { of } from 'rxjs';
import { LessonComponent } from './lesson.component';
import { Lesson } from '@thirty/api-interfaces';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';

const mockEmptyLesson: Lesson = {
  id: null,
  name: 'Mock Empty Lesson',
  description: '',
  type: '',
  price: 0,
  stars: 1,
};

const mockLesson = {
  id: 1,
  name: 'Mock Lesson',
  description: 'Mock descr',
  type: 'sit-com',
  price: 0,
  stars: 1,
};

const mockLessonService = {
  getLessons: () => of([]),
  createLesson: () => of({}),
  updateLesson: () => of({}),
  deleteLesson: () => of({})
}

describe('LessonComponent', () => {
  let component: LessonComponent;
  let fixture: ComponentFixture<LessonComponent>;
  let de: DebugElement;
  let lessonService: LessonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: LessonService, useValue: mockLessonService }
      ],
      declarations: [
        LessonComponent,
        LessonDetailComponent,
        LessonListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    lessonService = de.injector.get(LessonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a lesson', () => {
    component.selectLesson(mockLesson);
    expect(component.lessonForm.value).toMatchSnapshot();
  });
});
