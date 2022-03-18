import { Component, OnInit,Input } from '@angular/core';
import { TransferenciaService } from '../services/transferencia-service';
import { Transferencia } from '../model/transferencia';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.log(transferencias);
      this.transferencias = transferencias;
    });
  }

}
