import { AbstractControl, Validators } from "@angular/forms";

export type Workorder = {
    affaire: Affaire,
    rang: Rang
};

export type Affaire = number;
export type Rang = {
    numero: number,
    position: number
};

export function ParseWorkorder(workorderStr: string): Workorder | null {
    const regex = /^(\d{5}|\d{7}) - (\d+)\/(\d+)$/;; // Expression régulière pour valider le format
    const match = workorderStr.match(regex);

    if (match) {
        const affaire: Affaire = parseInt(match[1]);
        const rang: Rang = {
            numero: parseInt(match[2]),
            position: parseInt(match[3])
        };

        return {
            affaire,
            rang
        };
    } else {
        return null; // Retourne null si le format n'est pas valide
    }
}

export function workorderValid(control: AbstractControl) {
    const inputWorkorder = control.value;
    if (inputWorkorder) {
        const regex = /^(\d{5}|\d{7}) - (\d+)\/(\d+)$/;; // Expression régulière pour valider le format
        const match = inputWorkorder.match(regex);
        if (match) {
            return null;
        }
        return {
            invalidWorkorder: true
        }

    }
    return {
        noWorkorder: true
    };
}