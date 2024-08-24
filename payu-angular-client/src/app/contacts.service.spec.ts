import { TestBed } from '@angular/core/testing';
import { ContactService } from './contacts.service';



describe('ContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactService = TestBed.get(ContactService);
    expect(service).toBeTruthy();
  });
});
