import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ModalComponent} from "./lib/modal.component";
import {ModalService} from "./lib/modal.service";

export * from "./lib/modal.service";
export * from "./lib/modal.config";

@NgModule({
	declarations: [
		ModalComponent
	],
	imports: [
		CommonModule
	],
	providers: [
		ModalService
	],
	exports: [
		ModalComponent
	]
})
export class ModalModule {
}