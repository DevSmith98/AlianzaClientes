import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { GetClientsService } from './services/clients.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  formClient: FormGroup;
  formSearchAdvance: FormGroup;
  formSearch: FormGroup;
  clients: any[] = []
  showAdvancedSearch = false
  constructor(private getClientsService: GetClientsService, private formBuilder: FormBuilder, private render: Renderer2, private element: ElementRef) {
    this.formClient = this.formBuilder.group({
      alBusinessId: ['', Validators.required],
      alEmail: ['', Validators.required],
      alPhone: ['', Validators.required],
      alDateAdded: ['', Validators.required]
    })
    this.formSearchAdvance = this.formBuilder.group({
      alSharedKey: [''],
      alBusinessId: [''],
      alEmail: [''],
      alPhone: [''],
      alDateAdded: ['']
    })
    this.formSearch = this.formBuilder.group({
      alSharedKey: [''],
    })
  }

  ngOnInit(): void {
    this.getClients()
  }

  getClients() {
    this.getClientsService.getClients(this.formSearch.value).subscribe((repons) => {
      this.clients = repons
    })
  }

  handleAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch
  }

  onSubmit() {
    if (this.formClient.valid) {
      const formData = this.formClient.value;

      this.getClientsService.creatClients(formData).subscribe(
        (respuesta) => {
          console.log('Datos enviados con éxito:', respuesta);
          this.getClients()
        },
        (error) => {
          console.error('Error al enviar datos:', error);
        }
      );
    } else {
      console.log('Formulario inválido. Por favor, completa los campos correctamente.');
    }
  }
}
