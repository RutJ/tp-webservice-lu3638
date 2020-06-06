export class Estadistica {
    pais:string;
    casosConfirmados:string;
    curados:string;
    fallecidos:string;
    public Estadistica(pais?:string,casosConfirmados?:string,curados?:string,fallecidos?:string){
        this.pais=pais;
        this.casosConfirmados=casosConfirmados;
        this.curados=curados;
        this.fallecidos=fallecidos;
    }
}
