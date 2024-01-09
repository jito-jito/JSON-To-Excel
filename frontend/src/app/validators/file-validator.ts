import { FormControl } from '@angular/forms';

export function fileValidator(validExtensions: string[]) {
  return (control: FormControl): { [key: string]: any } | null => {
    if (control.value) {
      let fileName = control.value.name;
      let hasValidExtension = validExtensions.some((extension) => fileName.includes(extension));

      if (!hasValidExtension) {
        return { fileValidator: true };
      }

      return null;
    }

    return null;
  };
}
