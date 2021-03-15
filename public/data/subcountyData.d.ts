interface Details {
  male: number
  female: number
  intersex: number
  popDensity: {
    landArea: number
    density: number | null
  }
  total: number
}
export interface SubCounty {
  [key: string]: {
    [key: string]: Details
  }
}
export declare const subCounties: SubCounty
export {}
