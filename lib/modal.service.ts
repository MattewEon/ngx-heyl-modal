import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ModalConfig} from "./modalConfig";

@Injectable()
export class ModalService {
	public showModal: Subject<any> = new Subject<any>();
	public $showModal: any = this.showModal.asObservable();

	public hideModal: Subject<any> = new Subject<any>();
	public $hideModal: any = this.hideModal.asObservable();

	public configModal: Subject<any> = new Subject<any>();
	public $configModal: any = this.configModal.asObservable();

	public openModal(configuration: ModalConfig, modalBodyComponent: any): void {
		this.configModal.next(configuration);
		this.showModal.next(modalBodyComponent);
	}

	public closeModal(): void {
		this.hideModal.next(undefined);
	}
}