import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { MaterialUIModule } from './material-ui.module';
import { PrimeNGModule } from './primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutMeComponent } from './aboutme/aboutme/aboutme.component';
import { ProfilePhotoComponent } from './aboutme/profilephoto/profilephoto/profilephoto.component';
import { ProfileDetailsComponent } from './aboutme/profile-details/profile-details/profile-details.component';
import { HeaderTitleComponent } from './shared/header-title/header-title.component';
import { ProgressBarComponent } from './skills/skills-container/skills-progress-bar/skills-progress-bar/progress-bar/progress-bar/progress-bar.component';
import { SkillsProgressBarComponent } from './skills/skills-container/skills-progress-bar/skills-progress-bar/skills-progress-bar.component';
import { SkillsContainerComponent } from './skills/skills-container/skills-container.component';
import { EducationComponent } from './educationcontainer/education/education.component';
import { EducationcontainerComponent } from './educationcontainer/educationcontainer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ProfilePhotoComponent,
    ProfileDetailsComponent,
    HeaderTitleComponent,
    ProgressBarComponent,
    SkillsContainerComponent,
    SkillsProgressBarComponent,
    EducationcontainerComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNGModule,
    MaterialUIModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
