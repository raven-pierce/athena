export type Price = Record<string, number>;

export type Frequency = {
    value: string;
    label: string;
    suffix: string;
};

export type ComparisonSection = {
    name: string;
    features: ComparisonFeature[];
};

export type ComparisonFeature = {
    name: string;
    plans: ComparisonPlans;
};

export type ComparisonPlans = Record<string, boolean | string>;
