import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from '../src/app/app';
import { appConfig } from './app/app.config';
bootstrapApplication(AppModule, appConfig)
  .catch(err => console.error(err));


