import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReliabilityButtonsComponent, ReliabilityTextfieldComponent } from 'reliability-design';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReliabilityTextfieldComponent, ReliabilityButtonsComponent],
  template: `
    <main>
      <h1>Angular 18 - Form</h1>
      <p>Single-column form using reliability-design components:</p>

      <section class="form-wrap">
        <rel-textfield label="First name" placeholder="Enter first name" [(ngModel)]="model.firstName"></rel-textfield>
        <rel-textfield label="Last name" placeholder="Enter last name" [(ngModel)]="model.lastName"></rel-textfield>
        <rel-textfield label="Email" placeholder="you@company.com" type="email" [(ngModel)]="model.email"></rel-textfield>
        <rel-textfield label="Company" placeholder="Company name" [(ngModel)]="model.company"></rel-textfield>

        <div class="actions">
          <rel-buttons
            variant="primary"
            tone="default"
            size="large"
            border="corner-radius"
          >
            Test Rel
          </rel-buttons>
        </div>
      </section>
    </main>
  `,
  styles: [
    `main { padding: 20px; font-family: Arial, sans-serif; }
     h1 { font-size: 24px; margin-bottom: 8px }
     p { margin-bottom: 12px }
     .form-wrap { display: flex; flex-direction: column; gap: 12px; max-width: 420px; }
     .actions { margin-top: 8px; display:flex; justify-content:flex-end; }
    `,
  ],
})
export class AppComponent {
  title = 'angular-app-18';

  model = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
  };

  onSubmit() {
    // Basic feedback — replace with app logic as needed
    // eslint-disable-next-line no-alert
    alert('Form submitted:\n' + JSON.stringify(this.model, null, 2));
    console.log('Form model', this.model);
  }
}
