import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Filme } from '../model/filme';
import { FilmeService } from '../model/filme.service';

@Component({
  selector: 'app-busca-filme',
  templateUrl: './busca-filme.component.html',
  styleUrl: './busca-filme.component.css'
})
export class BuscaFilmeComponent {
  formBusca: FormGroup;
  filme: Filme | undefined;

  constructor(private fs: FilmeService, private fb: FormBuilder) {
    this.formBusca = this.fb.group({
      titulo: ['', [Validators.required, 
                    Validators.minLength(2)]]
    })
  }

  buscar() {
    const titulo = this.formBusca.value.titulo;
    this.fs.buscarFilmePorTitulo(titulo).subscribe(
      res => {
        this.filme = res;
      }
    );
    console.log(this.filme);
  }

}
