export type ServicePackage = {
  slug: string;
  category: "landing" | "marketing";
  name: string;
  priceMxn: string;
  subtitle: string;
  includes: string[];
  notIncludes: string[];
  benefits: string[];
  maintenance: string;
};

