import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ModalComponent} from "./lib/components/modal.component";

export * from "./lib/components/modal.component";
export * from "./lib/modal.config";

@NgModule({
	declarations: [
		ModalComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		ModalComponent
	]
})
export class ModalModule {
}