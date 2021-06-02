import { VenicleType } from "./venicle-type.enum";

export interface Venicle {
    make: string; /* BMW, Mercedes, Ferrari, etc. */
    model: string; /* 530, X5, C220, Enzo */
    year: number;
    type: VenicleType;
}
