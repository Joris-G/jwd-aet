import { Measure } from "./measure.model";
import { Workorder } from "./workorder";

export type ProcessInitialization = { processName: string, targetTime: number, partNumber?: string }

export type Process = {
    id: number;
    targetTime: number;
    processName: string;
    partNumber: string | undefined;
    measures: Measure[];
}

