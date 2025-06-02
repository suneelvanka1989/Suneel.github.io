export interface Place {
  name: string;
  type?: 'city' | 'place';
  coordinates: Coordinates;
  address: string;
  placeId?: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface searchData {
  type: string;
  values: [];
}

export interface searchValueData {
  name: string;
  id: string;
}

export interface searchDropdownOptions {
    name:string;
    values:Value[];
}

export interface Value {
    type : string;
    id : number;
    name: string;
    specializationName?: string;
    specializationID?: string;
    hospitalName?: string;
}