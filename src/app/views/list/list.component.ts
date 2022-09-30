import { Component, OnInit } from '@angular/core';
import { Entree } from 'src/app/shared/interfaces/entree';
import { EntreeService } from 'src/app/shared/services/entree.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public entryList: any;

  constructor(private entreeService: EntreeService) {

  }

  ngOnInit(): void {
    this.retrieveEntry();
  }

  public showTitle(title: string): void {
    alert(`Entrada seleccionada: ${title}.`);
  }

  private retrieveEntry(): void {
    this.entreeService.retrieveEntry().subscribe(
      (data) => {
        this.entryList = data;
      },
      (error: Error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }


}
