import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const BASE_URL = "/assets/";

@Injectable({
  providedIn: 'root'
})
export class IconRegistrarService {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { }

  registerSVGs(): void{
    this.matIconRegistry.addSvgIcon('thirty-water-drop', 
      this.domSanitizer.bypassSecurityTrustResourceUrl(BASE_URL + "drop.svg"));
    this.matIconRegistry.addSvgIcon('thirty-water-drop-inverted', 
      this.domSanitizer.bypassSecurityTrustResourceUrl(BASE_URL + "dropInverted.svg"));
  }
}
