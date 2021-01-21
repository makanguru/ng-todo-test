import { Component } from "@angular/core";
import { AppSharedService } from "./app.shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  activeTab: number = 1;

  constructor(private appSharedService: AppSharedService) {
    this.appSharedService.getSelectedTab().subscribe((activeTab: number) => {
      this.activeTab = activeTab;
    });
  }
}
