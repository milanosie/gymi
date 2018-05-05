import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SocialItemComponent } from './social-item/social-item';
import { RegistrationFormComponent } from './registration-form/registration-form';
import { ErrorNotificationComponent } from './error-notification/error-notification';
import { InfoNotificationComponent } from './info-notification/info-notification';
import { LoginFormComponent } from './login-form/login-form';

@NgModule({
    declarations: [SocialItemComponent,
        RegistrationFormComponent,
        ErrorNotificationComponent,
        InfoNotificationComponent,
        LoginFormComponent],
    imports: [IonicModule],
    exports: [SocialItemComponent,
        RegistrationFormComponent,
        ErrorNotificationComponent,
        InfoNotificationComponent,
        LoginFormComponent]

})
export class ComponentsModule {
}