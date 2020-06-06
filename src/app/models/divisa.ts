export class Divisa {
    cantidad:string;
    origen: string;
    destino:string;
    resultado:string;
    public Divisa(cantidad?:string,origen?:string,destino?:string,resultado?:string){
        this.cantidad=cantidad;
        this.origen=origen;
        this.destino=destino;
        this.resultado=resultado;
    }
}
