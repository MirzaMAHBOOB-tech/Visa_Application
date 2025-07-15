import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {
  today = new Date();

  policySections = [
    {
      title: '1. Information We Collect',
      content: `We collect personal information including your name, email, contact number, and travel preferences when you fill out a form or contact us through our website. We may also gather anonymous analytics data such as IP address, device type, and browser information to improve our services.`,
      open: false
    },
    {
      title: '2. Use of Collected Data',
      content: `Your data is used to process your travel-related queries, provide personalized visa consultancy, and improve user experience. We do not use your personal data for any purpose other than what is clearly outlined.`,
      open: false
    },
    {
      title: '3. Data Sharing and Disclosure',
      content: `We do not sell or rent your personal data to third parties. Your data may be shared with embassies, consulates, or official visa service partners only when required for application processing. We ensure that all third-party services adhere to strict confidentiality standards.`,
      open: false
    },
    {
      title: '4. Data Storage and Security',
      content: `All your personal information is stored securely in our encrypted databases. We follow industry-standard practices to protect your data against unauthorized access, theft, or alteration.`,
      open: false
    },
    {
      title: '5. Cookies & Tracking Technologies',
      content: `We use cookies to enhance your browsing experience. Cookies help us remember user preferences and gather analytics to understand site traffic. You may disable cookies through your browser settings, but doing so might affect some functionalities.`,
      open: false
    },
    {
      title: '6. User Rights',
      content: `You have the right to request a copy of your stored personal data, ask for corrections, or request deletion of your information at any time. You can contact us at privacy@abglobal.com to exercise these rights.`,
      open: false
    },
    {
      title: '7. Updates to this Policy',
      content: `We may update this Privacy Policy from time to time. When we do, we will revise the "last updated" date. Your continued use of our services constitutes your agreement to the updated policy.`,
      open: false
    }
  ];

  toggleSection(index: number) {
    this.policySections[index].open = !this.policySections[index].open;
  }
}
