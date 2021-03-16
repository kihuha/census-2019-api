export interface Details {
  male: number
  female: number
  intersex: number
  households: number
  averageHouseholds: number
  popDensity: {
    landArea: number
    density: number
  }
}
export interface County {
  [key: string]: Details
}
export declare const counties: County
