import {
	Component,
	ComponentFactoryResolver,
	ComponentRef, HostListener,
	OnDestroy,
	ViewChild,
	ViewContainerRef,
	ViewEncapsulation
} from "@angular/core";
import {ModalService} from "./modal.service";
import {ModalConfig, ModalFade} from "./modal.config";
import "rxjs/add/operator/takeWhile";

@Component({
	selector: "modal",
	templateUrl: "modal.component.html",
	styleUrls: ["css/style.css"],
	encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnDestroy {
	visible: boolean = false;                         // True when visible
	visibleAnimate: boolean = false;
	alive: boolean = false;

	public cfg: ModalConfig = new ModalConfig();    // Modal configuration
	public text: string = "";                       // Modal text value


	@ViewChild("modalBody", {read: ViewContainerRef}) modalBody;
	cmp: ComponentRef<any>;


	constructor(private modalService: ModalService, private cfr: ComponentFactoryResolver) {
		this.alive = true;
		this.cfg.setTitle("Modal title").setFade(ModalFade.BOTTOM).setSize("80%");

		// Update modal configuration
		this.modalService.$configModal.takeWhile(() => this.alive).subscribe(config => {
			this.cfg.apply(config);
		});

		// Show the modal window
		this.modalService.$showModal.takeWhile(() => this.alive).subscribe(() => {
			this.show();
		});

		// Create the component and show the window
		this.modalService.$showModalWithComponent.takeWhile(() => this.alive).subscribe(component => {
			let create: () => void = () => {
				this.text = "";
				this.createComponent(component);
				this.show();
			};

			this.visible ? this.hide(create) : create();
		});


		// Set the text and show the window
		this.modalService.$showModalWithText.takeWhile(() => this.alive).subscribe(text => {
			let create: () => void = () => {
				this.text = text;
				this.destroyComponent();
				this.show();
			};

			this.visible ? this.hide(create) : create();
		});

		// Hide the modal and call the callback
		this.modalService.$hideModal.takeWhile(() => this.alive).subscribe(callback => {
			this.hide(callback);
		});
	}

	ngOnDestroy(): void {
		this.alive = false;
		this.destroyComponent();
	}

	// Destroy body component
	private destroyComponent(): void {
		if (this.cmp) this.cmp.destroy();
	}

	// Create body component
	private createComponent(type): void {
		this.destroyComponent();
		let factory = this.cfr.resolveComponentFactory(type);
		this.cmp = this.modalBody.createComponent(factory);
		this.show();
	}

	// Show the modal
	public show(): void {
		if (this.visible) return;

		this.visible = true;
		setTimeout(() => {
			this.visibleAnimate = true
			// Angular won't update ngClass without setTimeout
		});
	}

	// Hide the modal and call the callback
	public hide(callback?): void {
		if (!this.visible) return;

		this.visibleAnimate = false;
		setTimeout(() => {
			this.visible = false;
			if (this.cfg.deleteOnClose) {
				this.destroyComponent();
				this.text = "";
			}
			if (callback) callback();
		}, 500);
	}

	// Hide on shadow click
	public onContainerClicked(event: MouseEvent): void {
		if ((<HTMLElement>event.target).classList.contains('modal')) {
			this.hide();
		}
	}

	// Hide on escape key pressed
	@HostListener('document:keydown', ['$event'])
	public onDocumentKeyDown(event: KeyboardEvent) {
		if (event.key == "Escape") this.hide();
	}
}