import { DetalleVenta } from "./detalle-venta";

export interface Venta {
    id?: number,
    numeroDocumento: string,
    fechaRegistro: string,
    total: string,
    detalleVenta: DetalleVenta[]
}
