
import { Component, OnInit } from '@angular/core';
import { MediaService } from '../Services/media.service';

@Component({
  selector: 'app-media-display',
  templateUrl: './media-display.component.html',
  styleUrl: './media-display.component.css'
})
export class MediaDisplayComponent implements OnInit {
  mediaList: any[] = [];
  isAdmin = true; // Set to `false` for non-admin

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.fetchMedia();
  }

  fetchMedia() {
    this.mediaService.getAllMedia().subscribe(res => this.mediaList = res);
  }

  deleteMedia(id: string) {
    if (confirm('Are you sure?')) {
      this.mediaService.deleteMedia(id).subscribe(() => this.fetchMedia());
    }
  }
}
