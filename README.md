# ngx-heyl-modal

This package allows you to use a modal window in AngularX (2+) projects.
This package is designed to define the modal only on the `app.component` template and use a component to define all bodies you'll need.

## Installation

1. Install npm module : 

   `npm install ngx-heyl-module`

2. Import the module :

   Open your `app.module.ts` file and import the module like this :
   
   ```typescript
   import { ModalModule } from "ngx-heyl-modal";
   @NgModule({
      imports: [ 
         ...,
         ModalModule
      ]
   })
   ```
 
3. Use `<modal>` component and `ModalService` service :

   Open your `app.component.html` and use the component
   ```html
   <div>App component html here</div>
   <div>Another content in your app component</div>
   <modal></modal>
   ```
   And use the service to open the modal dialog and set the configuration / content. You can use it in
    a sharedService used all along your app :
   
   ```typescript
   import {ModalService} from "ngx-heyl-modal/lib/modal.service";
   import {ModalConfig, ModalFade} from "ngx-heyl-modal/lib/modalConfig";

   export var modalOneConfig: ModalConfig =  new ModalConfig().setFade(ModalFade.RIGHT).setSize("70%").setTitle("Modal One");
   export var modalTwoConfig: ModalConfig =  new ModalConfig().setFade(ModalFade.LEFT).setSize("50%").setTitle("Modal Two");

   @Injectable()
   export class SharedService {
   
      constructor(private modalService: ModalService) {}
             
      openModalOne() {
           this.modalService.openModal(this.modalOneConfig, ModalBodyOneComponent)
       }

      openModalTwo() {
           this.modalService.openModal(this.modalTwoConfig, ModalBodyTwoComponent)
       }
   }
   ```
   
   Then, you'll have to declare your modal bodies components in the NgModule like this :
      ```typescript
      import { ModalModule } from "ngx-heyl-modal";
      @NgModule({
         imports: [ 
            ...,
            ModalModule
         ],
         declarations: [
            ModalBodyOneComponent,
            ModalBodyTwoComponent
         ],
         entryComponents: [
            ModalBodyOneComponent,
            ModalBodyTwoComponent
         ]
      })
      ```
      
4. Styling modal component

   If you want to change background colors and text-color, you can do it using scss !
   
   ```scss
   @import "../[ .... ]../node_modules/ngx-heyl-modal/lib/modal.mixin";
   // modalColor(header_background, body_background, footer_background, text_color);
   @include modalColor(#ed5400, #2b3135, #005590, #fff);
   ```