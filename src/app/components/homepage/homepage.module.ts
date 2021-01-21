import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomepageRoutingModule } from "./homepage-routing.module";

import HomepageComponent from "./homepage.component";
import { TodoHighlighter } from "./todoHighlighter.directive";
import { XxxAppenderPipe } from "./xxxAppender.pipe";

@NgModule({
  imports: [CommonModule, HomepageRoutingModule],
  declarations: [HomepageComponent, TodoHighlighter, XxxAppenderPipe],
})
export class HomepageModule {}
