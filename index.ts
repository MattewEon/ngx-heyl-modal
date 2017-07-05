import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ModalComponent} from "./lib/modal.component";
import {ModalService} from "./lib/modal.service";


@NgModule({
	imports: [
		CommonModule
	],
	providers: [
		ModalService
	],
	declarations: [
		ModalComponent
	],
	exports: [
		ModalComponent
	]
})
export class ModalModule {
}