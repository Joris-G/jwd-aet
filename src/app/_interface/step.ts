import { TypeTemps } from "./typeTemps";

export interface Step {
    id: number;
    name: string;
    category: TypeTemps;
    startTime: Date;
    endTime: Date;
    personCount: number;
}