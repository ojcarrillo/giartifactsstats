import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  /* tipos de artefacto */
  artefactos = new Map()
    .set('flower', 'Flor')
    .set('feather', 'Pluma')
    .set('sands', 'Reloj')
    .set('goblet', 'Cáliz')
    .set('circlet', 'Casco');

  /* stats principal por artefacto */
  statPrincipalByArtefacto = new Map()
    .set('flower', [
      new Stat(-1, 'vida', null, null, true, true)
    ])
    .set('feather', [
      new Stat(-1, 'ataque', null, null, true, true)
    ])
    .set('sands', [
      new Stat(3, 'vida %', null, null, null, true),
      new Stat(5, 'defensa %', null, null, null, true),
      new Stat(4, 'ataque %', null, null, null, true),
      new Stat(6, 'maestria elemental', null, null, null, true),
      new Stat(8, 'recarga de energia %', null, null, null, true)
    ])
    .set('goblet', [
      new Stat(-1, 'daño elemental %', null, null, true, true),
      new Stat(5, 'ataque %', null, null, null, true),
      new Stat(3, 'defensa %', null, null, null, true),
      new Stat(4, 'vida %', null, null, null, true),
      new Stat(-1, 'daño fisico %', null, null, true, true),
      new Stat(6, 'maestria elemental', null, null, null, true)
    ])
    .set('circlet', [
      new Stat(6, 'defensa %', null, null, null, true),
      new Stat(3, 'vida %', null, null, null, true),
      new Stat(5, 'ataque %', null, null, null, true),
      new Stat(8, 'probabilidad de critico', null, null, true, true),
      new Stat(9, 'daño critico', null, null, true, true),
      new Stat(-1, 'bono de curacion', null, null, null, true),
      new Stat(7, 'maestria elemental', null, null, null, true)
    ]);

  /* configuracion de stats por tipo de artefacto */
  statsByArtefacto = new Map()
    .set('flower', [
      new Stat(0, 'ataque', 19, '14-19', false),
      new Stat(1, 'defensa', 23, '16-23', false),
      new Stat(2, 'defensa %', 7.3, '5.1-7.3 %', false),
      new Stat(3, 'maestria elemental', 23, '16-23', false),
      new Stat(4, 'ataque %', 5.8, '4.1-5.8 %', false),
      new Stat(5, 'vida %', 5.8, '4.1-5.8 %', false),
      new Stat(6, 'recarga de energia %', 6.5, '4.5-6.5 %', false),
      new Stat(7, 'probabilidad de critico', 3.9, '2.7-3.9 %', false),
      new Stat(8, 'daño critico', 7.8, '5.4-7.8 %', false)
    ])
    .set('feather', [
      new Stat(0, 'defensa', 23, '16-23', false),
      new Stat(1, 'vida', 299, '209-299', false),
      new Stat(2, 'ataque %', 5.8, '4.1-5.8 %', false),
      new Stat(3, 'maestria elemental', 23, '16-23', false),
      new Stat(4, 'defensa %', 7.3, '5.1-7.3 %', false),
      new Stat(5, 'recarga de energia %', 6.5, '4.5-6.5 %', false),
      new Stat(6, 'vida %', 5.8, '4.1-5.8 %', false),
      new Stat(7, 'daño critico', 7.8, '5.4-7.8 %', false),
      new Stat(8, 'probabilidad de critico', 3.9, '2.7-3.9 %', false),
    ])
    .set('sands', [
      new Stat(0, 'defensa', 23, '16-23', false),
      new Stat(1, 'ataque', 19, '14-19', false),
      new Stat(2, 'vida', 299, '209-299', false),
      new Stat(3, 'vida %', 5.8, '4.1-5.8 %', false),
      new Stat(4, 'ataque %', 5.8, '4.1-5.8 %', false),
      new Stat(5, 'defensa %', 7.3, '5.1-7.3 %', false),
      new Stat(6, 'maestria elemental', 23, '16-23', false),
      new Stat(7, 'probabilidad de critico', 3.9, '2.7-3.9 %', false),
      new Stat(8, 'recarga de energia %', 6.5, '4.5-6.5 %', false),
      new Stat(9, 'daño critico', 7.8, '5.4-7.8 %', false)
    ])
    .set('goblet', [
      new Stat(0, 'ataque', 19, '14-19', false),
      new Stat(1, 'defensa', 23, '16-23', false),
      new Stat(2, 'vida', 299, '209-299', false),
      new Stat(3, 'defensa %', 7.3, '5.1-7.3 %', false),
      new Stat(4, 'vida %', 5.8, '4.1-5.8 %', false),
      new Stat(5, 'ataque %', 5.8, '4.1-5.8 %', false),
      new Stat(6, 'maestria elemental', 23, '16-23', false),
      new Stat(7, 'recarga de energia %', 6.5, '4.5-6.5 %', false),
      new Stat(8, 'probabilidad de critico', 3.9, '2.7-3.9 %', false),
      new Stat(9, 'daño critico', 7.8, '5.4-7.8 %', false)
    ])
    .set('circlet', [
      new Stat(0, 'ataque', 19, '14-19', false),
      new Stat(1, 'defensa', 23, '16-23', false),
      new Stat(2, 'vida', 299, '209-299', false),
      new Stat(3, 'vida %', 5.8, '4.1-5.8 %', false),
      new Stat(4, 'recarga de energia %', 6.5, '4.5-6.5 %', false),
      new Stat(5, 'ataque %', 5.8, '4.1-5.8 %', false),
      new Stat(6, 'defensa %', 7.3, '5.1-7.3 %', false),
      new Stat(7, 'maestria elemental', 23, '16-23', false),
      new Stat(8, 'probabilidad de critico', 3.9, '2.7-3.9 %', false),
      new Stat(9, 'daño critico', 7.8, '5.4-7.8 %', false)
    ]);

  /* stats principal */
  tiposStatsPrincipal = [
  ];

  /* stats seleccionado del tipo de artefacto */
  tiposStats = [
  ];

  statPrincipal = new Stat();

  /* stats de entrada para predecir el 4to stat */
  statsArtefacto = {
    uno: new StatArtefacto(),
    dos: new StatArtefacto(),
    tres: new StatArtefacto(),
    cuatro: new StatArtefacto(),
    ruptura: new StatArtefacto()
  };

  artefactoSel;

  statsPred = {
  };

  ngOnInit(): void {
  }

  compareObjectsId(object1: any, object2: any) {
    return object1 && object2 && object1.id === object2.id;
  }

  seleccionarArtefacto(obj: any) {
    this.statsPred = {};
    this.limpiar();
    this.tiposStats = this.statsByArtefacto.get(obj.key);
    this.tiposStatsPrincipal = this.statPrincipalByArtefacto.get(obj.key);
  }

  filterStats(statPrincipal: any) {
    return this.tiposStats.filter(p => p.pos !== statPrincipal.pos);
  }

  filterSubStats(statPrincipal: any, stat1: any, stat2: any) {
    return this.tiposStats.filter(p => p.pos !== statPrincipal?.pos && p.pos !== stat1?.pos && p.pos !== stat2?.pos);
  }

  limpiar() {
    this.statsArtefacto = {
      uno: new StatArtefacto(),
      dos: new StatArtefacto(),
      tres: new StatArtefacto(),
      cuatro: new StatArtefacto(),
      ruptura: new StatArtefacto()
    };
    this.statPrincipal = new Stat();
  }

  calcular() {
    /* limpia valores previos */
    this.statsArtefacto.cuatro = new StatArtefacto();
    this.statsArtefacto.ruptura = new StatArtefacto();
    /* pendiente validaciones */
    /* calculo porcentaje de aproximación al max cap por stat */
    for (const key of Object.keys(this.statsArtefacto)) {
      // console.log(key, this.statsArtefacto[key], this.statsArtefacto[key].tipo);
      this.statsArtefacto[key].calc = this.obtenerCap(this.statsArtefacto[key].tipo?.maxcap, this.statsArtefacto[key].valor);
      this.statsArtefacto[key].diff = 100 - this.statsArtefacto[key].calc;
    }
    const statMandatory = this.arrayMinDiff(this.statsArtefactoToList());
    const statCalculado = this.minimoCercanoAl100(statMandatory);
    console.log(statCalculado[0]);
    const statRuptura = this.rompePatronArtefactos(statMandatory.tipo.pos);
    console.log(statRuptura[0]);
    this.statsArtefacto.cuatro.tipo = statCalculado[0];
    this.statsArtefacto.ruptura.tipo = statRuptura[0];
  }

  /* regla de 3 simple en porcentaje */
  obtenerCap(maxcap: number = 0, valor: number = 0) {
    return maxcap === 0 ? 0 : (valor > maxcap ? 0 : (valor * 100) / maxcap);
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  minimoCercanoAl100(statMandatory: any) {
    // console.log('el primero mas cercano', statMandatory);
    // console.log('el stat calculado', this.hallarStat(statMandatory.tipo.pos + 1, this.statsArtefactoToList()));
    return this.hallarStat(statMandatory.tipo.pos + 1, this.statsArtefactoToList());
  }

  rompePatronArtefactos(pos: number) {
    const skip = this.statPrincipal.isElemental ? 4 : 3;
    return this.hallarStat(pos + skip, this.statsArtefactoToList());
  }

  arrayMinDiff(arr: any) {
    return arr.reduce((p: any, v: any) => {
      return (p.diff < v.diff ? p : v);
    });
  }

  hallarStat(pos: number, lista: any[]) {
    // console.log('pos---->', pos);
    if (pos > this.filterStats(this.statPrincipal).length) {
      // console.log('mas alla del final');
      return this.hallarStat(0, lista);
    }
    if (pos === this.statPrincipal.pos) {
      // console.log('es stat principal');
      return this.hallarStat(pos + 1, lista);
    }
    const stat = this.filterStats(this.statPrincipal).filter(p => p.pos === pos);
    // console.log('stat', stat[0]);
    // console.log('ll', lista.find(p => p.tipo.pos === stat[0].pos));
    if (lista.find(p => p.tipo === stat[0]) !== undefined) {
      // console.log('existe en los substats');
      return this.hallarStat(pos + 1, lista);
    }
    console.log('salida');
    return stat;

  }

  /* convertimos stats del artefacto a una lista */
  statsArtefactoToList() {
    const listaStatsArtefacto = [];
    for (const key of Object.keys(this.statsArtefacto)) {
      if (this.statsArtefacto[key].tipo !== null) {
        listaStatsArtefacto.push(this.statsArtefacto[key]);
      }
    }
    return listaStatsArtefacto;
  }
}

export class Stat {

  constructor(
    public pos?: number,
    public nombre?: string,
    public maxcap?: number,
    public cap?: string,
    public isElemental?: boolean,
    public isPrincipal?: boolean
  ) {

  }
}

export class StatArtefacto {

  constructor(
    public tipo?: Stat,
    public valor?: number,
    public calc?: number,
    public diff?: number
  ) {

  }
}


