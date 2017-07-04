/*export * from "./lib/modal.component";
 export * from "./lib/modal.service";
 export * from "./lib/modalConfig";*/


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
/*	static forRoot() {
		return {
			ngModule : ModalModule,
			providers: [ ModalService ]
		}
	}
*/}