import { TestBed } from "@angular/core/testing";
import HomepageComponent from "./homepage.component";
import { HttpClientModule } from "@angular/common/http";

describe("Homepage tests", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HomepageComponent],
      providers: [],
    }).compileComponents();
  });

  it("should create the Homepage component", () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should get the list of todos", () => {
    // Write test here
  });
});
