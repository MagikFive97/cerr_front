export interface ParteTrabajo {
    Cliente: String,
    Fecha: String,
    Horas_montaje: Number,
    Horas_totales: Number,
    Descripcion:string,
    Materiales:string,
    Observaciones:string,
    Firma_trabajador:boolean | undefined,
    Firma_cliente:boolean | undefined,
    id: Number,
  }
  