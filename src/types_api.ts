export interface Country {
    flags:      Flags;
    name:       Name;
    tld:        string[];
    currencies: string[];
    capital:    string[];
    region:     string;
    subregion:  string;
    languages:  string[];
    population: number;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: string[];
}