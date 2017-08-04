import {Component, HostBinding, HostListener, Input, ViewChild, ViewEncapsulation} from "@angular/core";
import {ModalConfig, ModalFade} from "../modal.config";

@Component({
	selector: "modal",
	templateUrl: "modal.component.html",
	styleUrls: ["../css/style.css"],
	encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
	@HostBinding("class.in") visible: boolean = false;
	public cfg: ModalConfig = new ModalConfig();    // Modal configuration

	@Input()
	set fade(fade: ModalFade) {
		this.cfg.setFade(fade);
	}

	@Input()
	set size(size: string) {
		this.cfg.setSize(size);
	}

	@Input()
	set closeButton(closeButton: boolean) {
		this.cfg.setCloseButton(closeButton);
	}

	@Input()
	set config(config: ModalConfig) {
		this.cfg = config;
	}

	// Show the modal and call the callback
	public show(callback?): void {
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

	// Hide on shadow click
	@HostListener("click", ["$event"])
	private onContainerClicked(event: MouseEvent): void {
		this.hide();
	}

	// Hide on escape key pressed
	@HostListener('document:keydown', ['$event'])
	private onDocumentKeyDown(event: KeyboardEvent) {
		if (event.key == "Escape") this.hide();
	}
}