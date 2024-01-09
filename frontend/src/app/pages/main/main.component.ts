import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FileInputComponent } from '../../components/file-input/file-input.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { fileValidator } from '../../validators/file-validator';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonComponent, FileInputComponent, ReactiveFormsModule, HttpClientModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  form = this.fb.group({
    file: [null, { validators: [fileValidator(['json'])] }]
  })

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
    ) {
  }

  ngOnInit() {
  }

  submitData() {
    const reader = new FileReader()

    reader.onload = (e: any) => {
      const fileContent = e.target.result

      this.http.post('http://localhost:9000/api/v1/json-to-excel', JSON.parse(fileContent), { responseType: 'blob' })
      .subscribe({
        next(response) {
          const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

          // Crea un enlace temporal
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'nombre_del_archivo.xlsx'; // Establece el nombre del archivo
          link.style.display = 'none';

          // Agrega el enlace al DOM y simula un clic para iniciar la descarga
          document.body.appendChild(link);
          link.click();

          // Elimina el enlace del DOM después de la descarga
          document.body.removeChild(link);

        },
        error(err) {
          console.log(err);

        },
      })
    }

    const file: any = this.form.value.file

    reader.readAsText(file)
  }
}
