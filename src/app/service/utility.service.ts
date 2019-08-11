import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  //utiltiy service containing pre-made configuration constants

  BUTTON_CLASS_SUBMIT: String = "btn btn-primary";
  // BUTTON_CLASS_CANCEL: String = "btn btn-default";
  BUTTON_CLASS_CANCEL: String = "btn btn-secondary";
  BUTTON_CLASS_DELETE: String = "btn btn-danger";
  BUTTON_DISPLAY_NAME_SUBMIT: String = "Save";
  BUTTON_DISPLAY_NAME_CANCEL: String = "Cancel";
  BUTTON_DISPLAY_NAME_DELETE: String = "Delete";

  constructor() { }
}
