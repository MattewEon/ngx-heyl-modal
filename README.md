# ngx-heyl-modal

This package allows you to use a modal window in AngularX (2+) projects.
This package is designed to define the modal only on the `app.component` template and use a component to define all bodies you'll need.
#### Please don't hesitate to ask for new features or report a bug on Github! Thanks
## Small wiki

Inputs available :

| @Input() | Default value | Description |
| -------| --------------| ----------- |
| `size` | `"70%"` | Width of the modal |
| `fade` | `ModalFade.BOTTOM` | Position from where the modal fade : `"top"` / `"bottom"` / `"left"` / `"right"` |
| `closeButton` | `true` | Display or not the &times; button in the header |

ModalComponent's functions available :

| functions | Description |
| -------| --------------|
| `show([callback])` | Show the modal, and call the callback if not undefined |
| `hide([callback])` | Hide the modal, and call the callback if not undefined |


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
 
3. Use `<modal>` component :

   Declare a modal in an html file
   ```html  
   <modal #modal fade="top" size="50%">
      <div class="modal-header">
         This is my header
      </div>
      <div class="modal-body">
         Here you can type some long text and html
      </div>
      <div class="modal-footer">
         <button (click)="modal.hide()">Close</button>
      </div>
   </modal>
   ```
         
4. Styling modal component

   If you want to change background colors and text-color, you can do it using scss !
   
   ```scss
   @import "../[ .... ]../node_modules/ngx-heyl-modal/lib/css/modal.mixin";
   // modalColor(header_background, body_background, footer_background, text_color);
   @include modalColor(#ed5400, #2b3135, #005590, #fff);
   ```