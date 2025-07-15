import { Component } from '@angular/core';
import { MediaService } from '../Services/media.service';

@Component({
  selector: 'app-media-upload',
  templateUrl: './media-upload.component.html',
  styleUrls: ['./media-upload.component.css']
})
export class MediaUploadComponent {
  file: any;
  message: string = '';
  successMessage = '';
  errorMessage = '';

  constructor(private mediaService: MediaService) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
    this.successMessage = '';
    this.errorMessage = '';
  }

  upload() {
    this.successMessage = '';
    this.errorMessage = '';

    if (!this.file || !this.message) {
      this.errorMessage = 'Please select a file and write a message.';
      return;
    }

    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('message', this.message);

    this.mediaService.uploadMedia(formData).subscribe({
      next: () => {
        this.successMessage = 'Post uploaded successfully!';
        this.file = null;
        this.message = '';
        // Optional: Clear file input field
        (document.querySelector('input[type="file"]') as HTMLInputElement).value = '';
      },
      error: (err) => {
        this.errorMessage = 'Upload failed. Please try again.';
        console.error(err);
      }
    });
  }
}
