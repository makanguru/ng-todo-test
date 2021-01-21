import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppSharedService {
  private selectedTab = new BehaviorSubject(1);
  private selectedTabObservable = this.selectedTab.asObservable();

  setSelectedTab(selectedTab: number): void {
    this.selectedTab.next(selectedTab);
  }

  getSelectedTab(): Observable<number> {
    return this.selectedTabObservable;
  }
}
