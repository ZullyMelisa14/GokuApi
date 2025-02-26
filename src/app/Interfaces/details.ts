export interface Details {
    id: number;
    image: string;
    name: string;
    race: string;
    gender: string;
    description: string;
    affiliation: string;
    ki: string;
    maxKi: string;
    originPlanet: OriginPlanet;
    transformations: Transformation[];
}

export interface OriginPlanet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
}

export interface Transformation {
    id: number;
    name: string;
    image: string;
    ki: string;
}
