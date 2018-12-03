import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ModalComponent} from "./components/modal.component";

export * from "./components/modal.component";
export * from "./modal-fade.config";

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
