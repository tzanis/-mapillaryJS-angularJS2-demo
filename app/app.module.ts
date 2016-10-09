import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule }         from '@angular/router';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { ImageListComponent }   from './image-list.component';
import { ImageViewerComponent } from './image-viewer.component';
import { ImagesService }        from "./images.service";
import { UserService }        from "./user.service";

import 'rxjs/add/operator/toPromise';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ImageListComponent
      },
      {
        path: 'view/:id',
        component: ImageListComponent
      }
    ]),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ImageListComponent,
    ImageViewerComponent
  ],
  providers: [
    ImagesService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
