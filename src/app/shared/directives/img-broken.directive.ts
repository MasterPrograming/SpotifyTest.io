import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
// Se permite un decorador para especificar una url de una imagen
@Input() customImg: string = '';
@HostListener('error') handleError(): void{
  // El siguiente codigo hace referencia al elemento nativo objeto que almacena  atributos
  const elNative = this.elHost.nativeElement;
  console.log('Esta imagen Revento ---> ', this.elHost);
  let strSrc = (this.customImg != '') ? this.customImg :  '../../../assets/images/default.jpg';
  elNative.src = strSrc;
}

  constructor(private elHost: ElementRef) {}

}
