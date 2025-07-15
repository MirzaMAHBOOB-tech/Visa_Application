import { Component } from '@angular/core';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private contactService: ContactService) {}

  submitContact(form: any) {
    this.successMessage = '';
    this.errorMessage = '';

    if (form.invalid) {
      this.errorMessage = 'Please fill out all fields correctly.';
      return;
    }

    this.contactService.addContact(this.contact).subscribe(
      (res) => {
        this.successMessage = 'Message sent successfully!';
        form.resetForm();
      },
      (err) => {
        this.errorMessage = 'Failed to send message. Please try again.';
        console.error(err);
      }
    );
  }
}
