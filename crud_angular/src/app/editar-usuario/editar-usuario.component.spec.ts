import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsuarioComponent } from './editar-usuario.component';

describe('EditarTareaComponent', () => {
  let component: EditarUsuarioComponent;
  let fixture: ComponentFixture<EditarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
