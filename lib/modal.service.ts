import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ModalConfig} from "./modal.config";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ModalService {
	private configModal: Subject<ModalConfig> = new Subject<ModalConfig>();
	public $configModal: Observable<ModalConfig> = this.configModal.asObservable();

	private showModal: Subject<void> = new Subject<void>();
	public $showModal: Observable<void> = this.showModal.asObservable();

	private showModalWithComponent: Subject<Function> = new Subject<Function>();
	public $showModalWithComponent: Observable<Function> = this.showModalWithComponent.asObservable();

	private showModalWithText: Subject<string> = new Subject<string>();
	public $showModalWithText: Observable<string> = this.showModalWithText.asObservable();

	private hideModal: Subject<Function> = new Subject<Function>();
	public $hideModal: Observable<Function> = this.hideModal.asObservable();


	public configureModal(configuration: ModalConfig): void {
		this.configModal.next(configuration);
	}

	public openModal(configuration?: ModalConfig, modalContent?: Function | string): void {
		if (configuration) this.configureModal(configuration);
		if (modalContent) {
			if (modalContent.constructor.name == "Function") this.setModalComponent(<Function> modalContent);
			if (modalContent.constructor.name == "String") this.setModalText(<string>modalContent);
		}
		this.showModal.next();
	}
	
	public setModalComponent(modalBodyComponent: Function): void {
		this.showModalWithComponent.next(modalBodyComponent);
	}
	public setModalText(textValue: string): void {
		this.showModalWithText.next(textValue);
	}

	public closeModal(callback?: Function): void {
		this.hideModal.next(callback);
	}
}