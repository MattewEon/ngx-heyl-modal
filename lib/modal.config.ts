export enum ModalFade {
	BOTTOM = <any>"bottom",
	TOP = <any>"top",
	RIGHT = <any>"right",
	LEFT = <any>"left"
}

export class ModalConfig {
	title: string = "Modal title";
	fade: ModalFade = ModalFade.BOTTOM;
	size: string = "70%";
	closeButton: boolean = true;

	constructor() {
	}

	apply(config: ModalConfig) {
		for(let attribute in config) {
			if (typeof config[attribute] != "function") this[attribute] = config[attribute];
		}
	}

	setTitle(title: string): ModalConfig {
		this.title = title;
		return this;
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