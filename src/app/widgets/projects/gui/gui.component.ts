import { Component, OnInit } from '@angular/core';
import { ProjectsGuiService} from "../projects-gui.service";

@Component({
  selector: 'app-projects-gui',
  templateUrl: './gui.component.html',
  styleUrls: ['./gui.component.scss']
})
export class ProjectsGuiComponent implements OnInit {

  constructor(private projectsGuiService: ProjectsGuiService) { }

  ngOnInit(): void {

  }

  activateButton1 (x: string): void {
      console.log('%c gui-componet: b1 function activated', 'color:orange')
      this.projectsGuiService.activateButton1(x)
  }

}
