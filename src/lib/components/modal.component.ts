import {Component, HostBinding, HostListener, Input, ViewEncapsulation} from "@angular/core";
import {ModalFade} from "../modal-fade.config";

@Component({
  selector: "modal",
  templateUrl: "modal.component.html",
  styleUrls: ["../css/style.css"],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  @HostBinding("class.in") visible: boolean = false;

  public _fade: ModalFade = ModalFade.BOTTOM;
  public _size: string = "70%";
  public _closeButton: boolean = true;

  @Input()
  set fade(fade: ModalFade) {
    this._fade = fade;
  }
  get fade(): ModalFade {
    return this._fade;
  }

  @Input()
  set size(size: string) {
    this._size = size;
  }
  get size(): string {
    return this._size;
  }

  @Input()
  set closeButton(closeButton: boolean) {
    this._closeButton = closeButton;
  }
  get closeButton(): boolean {
    return this._closeButton;
  }

  // ===================================================================================================================

  // Show the modal and call the callback
  public show(callback?): void {
    if (this.visible) return;

    this.visible = true;

    setTimeout(() => {
      if (callback) callback();
    }, 500);
  }

  // Hide the modal and call the callback
  public hide(callback?): void {
    if (!this.visible) return;

    this.visible = false;

    setTimeout(() => {
      if (callback) callback();
    }, 500);
  }

  // ===================================================================================================================

  // Hide on shadow click
  @HostListener("click", ["$event"])
  public onContainerClicked(event: MouseEvent): void {
    if (event.srcElement.localName == "modal") this.hide();
  }

  // Hide on escape key pressed
  @HostListener('document:keydown', ['$event'])
  public onDocumentKeyDown(event: KeyboardEvent) {
    if (event.key == "Escape") this.hide();
  }
}
