import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { PageHeaderModule } from './../../shared';
import { LoadingModule } from 'ngx-loading';
import { MatTabsModule, MatCardModule, MatSelectModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ProcessRoutingModule,
    FormsModule,
    PageHeaderModule,
    MatTabsModule,
    LoadingModule,
    MatCardModule,
    MatSelectModule,
    NgbModule
  ],
  declarations: [ProcessComponent]
})
export class ProcessModule { }
