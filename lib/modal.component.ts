import {Component, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild, ViewContainerRef} from "@angular/core";
import {ModalService} from "./modal.service";
import {ModalConfig, ModalFade} from "./modalConfig";
import "rxjs/add/operator/takeWhile";

@Component({
	selector: "modal",
	templateUrl: "./modal.component.html"
})
export class ModalComponent implements OnDestroy {
	public visible = false;
	public visibleAnimate = false;
	public cfg: ModalConfig = new ModalConfig();

	@ViewChild("modalBody", {read: ViewContainerRef}) modalBody;
	cmp: ComponentRef<any>;

	alive: boolean = false;

	constructor(private modalService: ModalService, private cfr: ComponentFactoryResolver) {
		this.cfg.setTitle("Modal title").setFade(ModalFade.BOTTOM).setSize("80%");
		this.alive = true;

		this.modalService.showModal.takeWhile(() => this.alive).subscribe(type => {
			if (this.visible) {
				this.hide(() => this.createComponent(type));
			} else {
				this.createComponent(type);
			}
		});

		this.modalService.closeModal.takeWhile(() => this.alive).subscribe((callback) => {
			this.hide(callback);
		});

		this.modalService.configModal.takeWhile(() => this.alive).subscribe(config => {
			this.cfg.apply(config);
		});
	}

	ngOnDestroy() {
		this.alive = false;
	}

	private createComponent(type) {
		if (this.cmp) this.cmp.destroy();
		let factory = this.cfr.resolveComponentFactory(type);
		this.cmp = this.modalBody.createComponent(factory);
		this.show();
	}

	public show(): void {
		this.visible = true;
		setTimeout(() => { this.visibleAnimate = true});
	}

	public hide(callback = undefined): void {
		if (!this.visible) return;
		this.visibleAnimate = false;
		setTimeout(() => {
			this.visible = false;
			this.cmp.destroy();
			this.cmp = null;
			if (callback) callback();
		}, 500);
	}

	public onContainerClicked(event: MouseEvent): void {
		if ((<HTMLElement>event.target).classList.contains('modal')) {
			this.hide();
		}
	}
}