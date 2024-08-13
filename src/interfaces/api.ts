// MAIN API RESPONSES

export interface CRMSystem {
  leads: Lead[];
  rateConversion: number;
}

export interface GoogleAds {
  campaigns: Campaign[];
}

export interface GoogleAnalytics {
  viewsPage: ViewsPage[];
  sessions: Session[];
  demography: Demography;
}

export interface MetaAds {
  ads: Ad[];
}

// Atomic types

export interface Lead {
  name: string;
  acquisitionCost: number;
  valueOfLife: number;
}

export interface Campaign {
  name: string;
  impressions: number;
  clics: number;
  conversions: number;
  cost: number;
}

export interface ViewsPage {
  date: string;
  vistas: number;
}

export interface Session {
  date: string;
  sessions: number;
  tasaRebound: number;
}

export interface Demography {
  age: Age[];
  gender: Gender[];
}

export interface Age {
  rango: string;
  percentage: number;
}

export interface Gender {
  type: string;
  percentage: number;
}

export interface Ad {
  name: string;
  range: number;
  participation: number;
  spendingAdvertising: number;
  conversions: number;
  clics: number;
  impressions: number;
}
