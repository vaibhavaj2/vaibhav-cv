import { NgModule } from "@angular/core";
import { MenubarModule } from 'primeng/menubar';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';



@NgModule({
    exports: [
        MenubarModule,
        ImageModule,
        AvatarModule,
        AvatarGroupModule,
        CardModule,
        ProgressBarModule
        


    ],
    imports: [
        MenubarModule,
        ImageModule,
        AvatarModule,
        AvatarGroupModule,
        CardModule,
        ProgressBarModule
        
    ]
})
export class PrimeNGModule { }