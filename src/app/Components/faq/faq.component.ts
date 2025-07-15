
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: 'What services does Dream Travel provide for travelers?',
      answer: 'Dream Travel provides tourist visa services for multiple countries including Germany, Canada, USA, and more. We assist with visa applications, document preparation, interview guidance, and travel consultation.',
      isOpen: false
    },
    {
      question: 'How long does it take to process a tourist visa?',
      answer: 'Visa processing time varies by country. Typically, it takes 10 to 15 working days after submission. We ensure your application is complete and correctly filled to minimize delays.',
      isOpen: false
    },
    {
      question: 'Can I get support outside working hours?',
      answer: 'Yes! We provide 24/7 customer support through WhatsApp, email, and our hotline. Our team is always ready to help you with updates or urgent queries.',
      isOpen: false
    },
    {
      question: 'Why should I choose Dream Travel?',
      answer: 'We are a trusted and registered agency with hundreds of successful visa clients. Our expert team ensures transparency, timely responses, and customized solutions for your travel dreams.',
      isOpen: false
    },
    {
      question: 'How can I track my visa application?',
      answer: 'Once your application is submitted, you will receive a tracking number via email and SMS. You can track updates through our portal or directly contact our support team.',
      isOpen: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
