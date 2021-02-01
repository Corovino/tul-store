import { Observable } from 'rxjs';
export interface ProductInterface {
    id?: string;
    description?: string;
    image?: Observable<string>;
    price?: string;
    tittle?: string;
    tag?:string;
    fileRefProduct?:string;
    quantity?:number
}
