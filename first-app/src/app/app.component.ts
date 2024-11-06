import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { SliderComponent } from './slider/slider.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { StudentiComponent } from './studenti/studenti.component';
import { SignalComponent } from './signal/signal.component';
import { SongsComponent } from './songs/songs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingsComponent, SliderComponent,
    StructuralDirectivesComponent, StudentiComponent, SignalComponent, SongsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
