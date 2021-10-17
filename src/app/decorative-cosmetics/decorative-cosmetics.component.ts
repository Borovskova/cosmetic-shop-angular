import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decorative-cosmetics',
  templateUrl: './decorative-cosmetics.component.html',
  styleUrls: ['./decorative-cosmetics.component.css']
})
export class DecorativeCosmeticsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { link: '/mascara', img: 'makeup1.jpg', title: 'Mascara', cols: 1, rows: 1 },
          { link: '/hair-care', img: 'makeup2.jpg', title: 'Pomade', cols: 1, rows: 1 },
          { link: '/body-care', img: 'makeup3.jpg', title: 'Face powder', cols: 1, rows: 1 },
          { link: '/face-care', img: 'makeup4.jpg', title: 'Ink', cols: 1, rows: 1 }
        ];
      }

      return [
        { link: '/mascara', img: 'makeup8.jpg', title: 'Mascara', cols: 1, rows: 1 },
        { link: '/mascara', img: 'makeup1.jpg', title: 'Face powder', cols: 1, rows: 1 },
        { link: '/mascara', img: 'makeup5.jpg', title: 'Tone cream', cols: 1, rows: 1 },
        { link: '/mascara', img: 'makeup3.jpg', title: 'Eyeshadows and Pomade', cols: 1, rows: 1 },
        { link: '/mascara', img: 'makeup4.jpg', title: 'Tassels', cols: 1, rows: 1 },
        { link: '/mascara', img: 'makeup7.jpg', title: 'Eyeliner', cols: 1, rows: 1 },
      ];
    })
  );

  getImage(img: string): string {
    return 'url(' + 'http://localhost:3000/images/' + img + ')';
  }
  goToGroupOfGoods(link: any) {
    this.router.navigateByUrl(link);
  }

  constructor(private breakpointObserver: BreakpointObserver,
    public router: Router) { }
}
