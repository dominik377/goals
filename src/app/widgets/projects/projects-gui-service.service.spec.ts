import { TestBed } from '@angular/core/testing';

import { ProjectsGuiService } from './projects-gui.service';

describe('ProjectsGuiServiceService', () => {
  let service: ProjectsGuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsGuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
