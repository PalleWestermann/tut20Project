import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from "./components/user/user";
import { Admin } from "./components/admin/admin";
import { GetApi } from './components/get-api/get-api';

@Component({
  selector: 'app-root',
  imports: [GetApi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tut20Project');
}
