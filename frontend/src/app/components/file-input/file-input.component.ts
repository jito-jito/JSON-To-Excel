import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-input',
  standalone: true,
  imports: [],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FileInputComponent),
    multi: true
  }]
})
export class FileInputComponent implements ControlValueAccessor {
  file: any

  onChange = (_:any) => {}
  onTouch = () => {}

  onChangeFile($event: Event) {
    this.onTouch()
    const inputElement = $event.target as HTMLInputElement
    if(inputElement.files && inputElement.files.length > 0) {
      this.file = inputElement.files[0]
      this.onChange(this.file)
    }

  }

  writeValue(file: any): void {
    if(file) {
      this.file = file
    } else {
      this.file = null
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

}
