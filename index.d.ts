declare module "data/countyData" {
    export interface Details {
        male: number;
        female: number;
        intersex: number;
        households: number;
        averageHouseholds: number;
        popDensity: {
            landArea: number;
            density: number;
        };
    }
    export interface County {
        [key: string]: Details;
    }
    export const counties: County;
}
declare module "data/subcountyData" {
    interface Details {
        male: number;
        female: number;
        intersex: number;
        popDensity: {
            landArea: number;
            density: number | null;
        };
        total: number;
    }
    export interface SubCounty {
        [key: string]: {
            [key: string]: Details;
        };
    }
    export const subCounties: SubCounty;
}
declare module "data/country" {
    export const country: {
        total: number;
        male: number;
        female: number;
        intersex: number;
        populationIn2009: number;
        popChange: number;
        households: number;
        averageHouseholds: number;
        popDensity: {
            landArea: number;
            density: number;
        };
    };
}
declare module "data/index" {
    import { counties } from "data/countyData";
    import { subCounties } from "data/subcountyData";
    import { country } from "data/country";
    export { counties, subCounties, country };
}
declare module "routers/country" {
    const router: import("express-serve-static-core").Router;
    export default router;
}
declare module "routers/counties" {
    const router: import("express-serve-static-core").Router;
    export default router;
}
declare module "app" {
    const app: import("express-serve-static-core").Express;
    export default app;
}
declare module "index" { }
declare module "test/counties.test" { }
declare module "test/country.test" { }
declare module "test/subcounties.test" { }
