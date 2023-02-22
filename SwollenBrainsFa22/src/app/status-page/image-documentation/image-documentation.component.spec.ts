import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDocumentationComponent } from './image-documentation.component';

describe('ImageDocumentationComponent', () => {
  let component: ImageDocumentationComponent;
  let fixture: ComponentFixture<ImageDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageDocumentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
