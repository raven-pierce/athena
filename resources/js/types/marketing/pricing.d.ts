export interface Price {
    [key: string]: number;
}

export interface Frequency {
    value: string;
    label: string;
    suffix: string;
}

export interface ComparisonSection {
    name: string;
    features: ComparisonFeature[];
}

export interface ComparisonFeature {
    name: string;
    plans: ComparisonPlans;
}

export interface ComparisonPlans {
    [key: string]: boolean | string;
}
