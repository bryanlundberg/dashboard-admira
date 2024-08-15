import { GoogleAds, MetaAds } from "../interfaces/api";
import { faker } from "@faker-js/faker";

export const genNewGoogleData = () => {
  const googleAds: GoogleAds = {
    campaigns: [
      {
        name: faker.string.alphanumeric(15),
        impressions: faker.number.int(100000),
        clics: faker.number.int(15000),
        conversions: faker.number.int(5000),
        cost: faker.number.int(10000),
      },
      {
        name: faker.string.alphanumeric(15),
        impressions: faker.number.int(100000),
        clics: faker.number.int(15000),
        conversions: faker.number.int(5000),
        cost: faker.number.int(10000),
      },
      {
        name: faker.string.alphanumeric(15),
        impressions: faker.number.int(100000),
        clics: faker.number.int(15000),
        conversions: faker.number.int(5000),
        cost: faker.number.int(10000),
      },
      {
        name: faker.string.alphanumeric(15),
        impressions: faker.number.int(100000),
        clics: faker.number.int(15000),
        conversions: faker.number.int(5000),
        cost: faker.number.int(10000),
      },
      {
        name: faker.string.alphanumeric(15),
        impressions: faker.number.int(100000),
        clics: faker.number.int(15000),
        conversions: faker.number.int(5000),
        cost: faker.number.int(10000),
      },
    ],
  };

  return googleAds;
};

export const genNewMetaData = () => {
  const metaAds: MetaAds = {
    ads: [
      {
        name: faker.string.alphanumeric(15),
        range: faker.number.int(50000),
        participation: faker.number.int(15000),
        spendingAdvertising: faker.number.int(10000),
        conversions: faker.number.int(14000),
        clics: faker.number.int(15000),
        impressions: faker.number.int(100000),
      },
      {
        name: faker.string.alphanumeric(15),
        range: faker.number.int(50000),
        participation: faker.number.int(15000),
        spendingAdvertising: faker.number.int(10000),
        conversions: faker.number.int(14000),
        clics: faker.number.int(15000),
        impressions: faker.number.int(100000),
      },
      {
        name: faker.string.alphanumeric(15),
        range: faker.number.int(50000),
        participation: faker.number.int(15000),
        spendingAdvertising: faker.number.int(10000),
        conversions: faker.number.int(14000),
        clics: faker.number.int(15000),
        impressions: faker.number.int(100000),
      },
      {
        name: faker.string.alphanumeric(15),
        range: faker.number.int(50000),
        participation: faker.number.int(15000),
        spendingAdvertising: faker.number.int(10000),
        conversions: faker.number.int(14000),
        clics: faker.number.int(15000),
        impressions: faker.number.int(100000),
      },
      {
        name: faker.string.alphanumeric(15),
        range: faker.number.int(50000),
        participation: faker.number.int(15000),
        spendingAdvertising: faker.number.int(10000),
        conversions: faker.number.int(14000),
        clics: faker.number.int(15000),
        impressions: faker.number.int(100000),
      },
    ],
  };

  return metaAds;
};
