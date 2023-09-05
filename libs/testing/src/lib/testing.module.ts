import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { testingRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(testingRoutes), RouterModule],
})
export class TestingModule {}
