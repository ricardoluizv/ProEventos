import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  public filteredEvent: any = [];
  widthImg: number = 150;
  marginImg: number = 2;
  showImage: boolean = false;
  private _listFilter: string = '';

  public get listFilter(): string{
    return this._listFilter;
  }

  public set listFilter(value: string){
    this._listFilter = value;
    this.filteredEvent = this.listFilter ? this.filterEventos(this.listFilter) : this.eventos;
    console.log(this.eventos);
  }

  filterEventos(filterBy: string): any{
    filterBy = filterBy.toLocaleLowerCase();

    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  constructor(private readonly http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  public getEventos(): void{
    this.http.get(`https://localhost:5001/api/Evento`).subscribe(
      response => {
        this.eventos = response;
        this.filteredEvent = response;
      },

      error => console.log(error)
    );
  }

  public showImageOnClick(): void{
    this.showImage = !this.showImage;
  }

}
