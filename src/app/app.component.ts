import { Component } from '@angular/core';
import { AdviceService } from 'shared/services/advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adviceGeneratorApp';

  quote: any

  constructor(private advice: AdviceService) {

  }

  ngOnInit() {
    this.getList()
  }

  getList() {
    this.advice.getAdvice().subscribe(
      (data: any) => {
        this.quote = data.slip
        console.log(this.quote)
      }
    )
  }
}
