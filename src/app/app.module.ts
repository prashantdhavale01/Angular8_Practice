import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './common/left-panel/left-panel.component';
import { TopPanelComponent } from './common/top-panel/top-panel.component';
import { FooterPanelComponent } from './common/footer-panel/footer-panel.component';
import { UserListComponent } from './list/user-list/user-list.component';
import { DepartmentListComponent } from './list/department-list/department-list.component';
import { SalesListComponent } from './list/sales-list/sales-list.component';
import { RouterModule } from '@angular/router';
import { GenderPipe } from './pipes/gender.pipe';
import { UserPrefixPipe } from './pipes/user-prefix.pipe';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { StatusColorPipe } from './pipes/status-color.pipe';
import { SubjectPipe } from './pipes/subject.pipe';
import { SortDataPipe } from './pipes/sort-data.pipe';
import { GenderColorPipe } from './pipes/gender-color.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    TopPanelComponent,
    FooterPanelComponent,
    UserListComponent,
    DepartmentListComponent,
    SalesListComponent,
    GenderPipe,
    UserPrefixPipe,
    CamelCasePipe,
    StatusColorPipe,
    SubjectPipe,
    SortDataPipe,
    GenderColorPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    RouterModule.forRoot([
      { path: 'users', component: UserListComponent },
      { path: 'departments', component: DepartmentListComponent },
      { path: 'sales', component: SalesListComponent },
      { path: '', component: UserListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
