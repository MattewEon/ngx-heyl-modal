import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ModalConfig} from "./modalConfig";

@Injectable()
export class ModalService {
	public showModal: Subject<any> = new Subject<any>();
	public $showModal: any = this.showModal.asObservable();

	//TODO : hide
	public closeModal: Subject<any> = new Subject<any>();
	public $closeModal: any = this.closeModal.asObservable();

	public configModal: Subject<any> = new Subject<any>();
	public $configModal: any = this.configModal.asObservable();

	public openModal(configuration: ModalConfig) {
		this.configModal.next(configuration);
		this.showModal.next(undefined);
	}

	constructor() {
		console.log(Date.now());
	}
}