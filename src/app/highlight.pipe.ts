import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(value: String, name: string): any {
    console.log(name);

    if (name === 'Laptop') {
      return this.sanitizer.bypassSecurityTrustHtml(' <div style="background-color:yellow; color:transparent;">' + name + '</div>');
    } else if (name === 'Mobile') {
      return this.sanitizer.bypassSecurityTrustHtml(' <div style="background-color:yellow">' + name + '</div>');
    } else if (name === 'Shoes') {
      return this.sanitizer.bypassSecurityTrustHtml(' <div style="background-color:yellow">' + name + '</div>');
    } else if (name === 'Books') {
      return this.sanitizer.bypassSecurityTrustHtml(' <div style="background-color:yellow">' + name + '</div>');
    } else if (name === 'Bags') {
      return this.sanitizer.bypassSecurityTrustHtml(' <div style="background-color:yellow">' + name + '</div>');
    } else {
      return this.sanitizer.bypassSecurityTrustHtml(' <div style="background-color:lightgreen">' + name + '</div>');
    }
  }
}
