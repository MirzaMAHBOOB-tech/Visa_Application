import { Component } from '@angular/core';

@Component({
 selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrl: './refund.component.css'
})
export class RefundComponent {
  today = new Date();

  refundSections = [
    {
      title: '1. General Refund Policy',
      content: `At Dream Travel, we aim to deliver transparent and reliable services. We provide refunds in accordance with the nature of the service and client request. Refunds are only applicable if the cancellation is made within the permitted timeline and under the conditions described herein.`,
      open: false
    },
    {
      title: '2. Visa Consultancy Services',
      content: `Fees paid for visa consultancy services are non-refundable once processing has begun or documentation has been submitted to the concerned authorities. If you cancel before document submission, a partial refund may be considered.`,
      open: false
    },
    {
      title: '3. Travel Bookings and Package Cancellations',
      content: `Cancellations made within 48 hours of booking are eligible for a full refund, excluding service charges. For cancellations after 48 hours, refunds are based on supplier policies such as airlines, hotels, or embassies.`,
      open: false
    },
    {
      title: '4. Delays and Service Interruptions',
      content: `If any delays are caused due to technical issues or fault from our side, clients will either be refunded in full or given the option to rebook or reschedule the service.`,
      open: false
    },
    {
      title: '5. Refund Process and Timeline',
      content: `Once a refund request is approved, the refund will be processed to the original payment method within 7–10 business days. You will receive an email confirmation once the process has begun.`,
      open: false
    },
    {
      title: '6. No Refund Circumstances',
      content: `We do not offer refunds for change of mind, incomplete documentation provided by the client, or rejection by embassy/consulate due to client-side issues.`,
      open: false
    },
    {
      title: '7. How to Request a Refund',
      content: `To request a refund, please email dreamvisa619@gmail.com  &&  whattsapp contact +44 7878728999 with your full name, payment receipt, service name, and reason for cancellation. Our team will review and respond within 2–4 business days.`,
      open: false
    }
  ];

  toggleSection(index: number) {
    this.refundSections[index].open = !this.refundSections[index].open;
  }
}
