import { Step } from "./step";

export interface StepGroup {
    name: string;
    steps: Step[];
    id: number;
}