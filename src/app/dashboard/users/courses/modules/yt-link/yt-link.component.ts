import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-yt-link',
  standalone: true,
  imports: [],
  templateUrl: './yt-link.component.html',
  styleUrls: ['./yt-link.component.scss']
})
export class YtLinkComponent {
  videoLinks: SafeResourceUrl[];

  constructor(private sanitizer: DomSanitizer) {
    const links: string[] = [
      'https://www.youtube.com/watch?v=wufUX5P2Ds8',
      'https://www.youtube.com/watch?v=KyndoXN4_ns',
      'https://www.youtube.com/watch?v=QNV2DmBxChQ'
    ];

    this.videoLinks = links.map(link => this.sanitizeUrl(this.convertToEmbedUrl(link)));
  }

  convertToEmbedUrl(url: string): string {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    return `https://www.youtube.com/embed/${ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId}`;
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
