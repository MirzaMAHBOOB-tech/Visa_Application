import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrl: './terms-condition.component.css'
})
export class TermsConditionComponent {
  today = new Date();
  sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using the Dream Travel Travel platform, you agree to abide by these terms and conditions. These terms govern your use of our services, and if you disagree with any part, please do not use the site.`,
      open: false
    },
    {
      title: '2. Services Overview',
      content: `Dream Travel offers tourist visa consultancy, documentation support, and advisory services. While we guide and prepare your application, visa approval is at the discretion of the relevant embassy/consulate.`,
      open: false
    },
    {
      title: '3. Eligibility & Responsibilities',
      content: `You must be 18 years or older to use our services. You are responsible for providing accurate, truthful information. False documentation or misrepresentation can lead to application rejection and legal action.`,
      open: false
    },
    {
      title: '4. Payment & Refund Policy',
      content: `All fees paid for visa consultation are non-refundable once services are initiated. In case of cancellation before the documentation stage, a partial refund may be considered on a case-by-case basis.`,
      open: false
    },
    {
      title: '5. Privacy & Data Security',
      content: `Your data is stored securely and used solely for the purpose of your travel process. We do not sell or share your personal information with third parties unless required by law or for visa processing.`,
      open: false
    },
    {
      title: '6. Limitation of Liability',
      content: `Dream Travel is not liable for delays, embassy decisions, or losses resulting from third-party actions. We strive for accuracy but do not guarantee visa issuance.`,
      open: false
    },
    {
      title: '7. Modification of Terms',
      content: `We reserve the right to modify these terms at any time. Changes will be posted on this page, and continued use after modifications indicates acceptance of the revised terms.`,
      open: false
    }
  ];

  toggleSection(index: number) {
    this.sections[index].open = !this.sections[index].open;
  }
}
