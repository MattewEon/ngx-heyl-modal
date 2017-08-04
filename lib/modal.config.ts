export enum ModalFade {
	BOTTOM = <any>"bottom",
	TOP = <any>"top",
	RIGHT = <any>"right",
	LEFT = <any>"left"
}

export class ModalConfig {
	fade: ModalFade = ModalFade.BOTTOM;
	size: string = "70%";
	closeButton: boolean = true;

	constructor() {
	}

	setFade(fade: ModalFade): ModalConfig {
		this.fade = fade;
		return this;
	}

	setSize(size: string): ModalConfig {
		this.size = size;
		return this;
	}

	setCloseButton(closeButton: boolean): ModalConfig {
		this.closeButton = closeButton;
		return this;
	}
}