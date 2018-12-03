# ngx-heyl-modal

This package allows you to use a modal window in AngularX (2+) projects.  

#### Please don't hesitate to ask for new features or report a bug on Github! Thanks

# Summary

- [1. Features](#1)
- [2. Wiki](#2)
  - [2.1 Inputs & Functions](#2.1)
- [3. How to use](#3)
  

# Updates

- 10 Jun. 2018
  - Re-created library with Angular 6
  - Fix closeButton not working
  - Review CSS
  - Removed ModalConfig class

# 1. <a name="1"></a>Features

- Modal component
  - Easily usable
  - Minimal CSS to be easily customizable
  - Fade animation from top, bottom, left and right

# 2. <a name="2"></a>Wiki

## 2.1 <a name="2.1"></a>Inputs & Functions

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


# 3. <a name="3"></a>How to use

1. Install npm module : 

   `npm i ngx-heyl-module`

2. Import the module :

   Open your `app.module.ts` file and import the module :
   
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
