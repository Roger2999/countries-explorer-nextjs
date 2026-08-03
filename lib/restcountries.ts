const API_BASE_URL = "https://api.restcountries.com/countries/v5";
const REVALIDATE = 3600;

export const restcountriesApiKey =
  process.env.RESTCOUNTRIES_API_KEY ?? "rc_live_demo";

export interface V5Native {
  common: string;
  official: string;
}

export interface V5Country {
  names?: {
    common?: string;
    official?: string;
    native?: Record<string, V5Native>;
  };
  codes?: {
    alpha_2?: string;
    alpha_3?: string;
    ccn3?: string;
    cioc?: string;
    fifa?: string;
  };
  capitals?: { name: string; coordinates?: { lat: number; lng: number } }[];
  flag?: {
    emoji?: string;
    url_svg?: string;
    url_png?: string;
    description?: string;
  };
  region?: string;
  subregion?: string;
  area?: { kilometers: number; miles: number };
  borders?: string[];
  currencies?: { code: string; name: string; symbol: string }[];
  cars?: { signs: string[]; driving_side: string };
  classification?: {
    sovereign?: boolean;
    un_member?: boolean;
    status?: string;
  };
  coordinates?: { lat: number; lng: number };
  date?: { start_of_week?: string };
  demonyms?: Record<string, { f: string; m: string }>;
  landlocked?: boolean;
  continents?: string[];
  languages?: {
    iso639_3?: string;
    name?: string;
  }[];
  links?: { google_maps?: string; open_street_maps?: string };
  postal_code?: { format?: string; regex?: string };
  population?: number;
  timezones?: string[];
  tlds?: string[];
}

interface V5Page {
  objects: V5Country[];
  total: number;
}

async function requestV5(url: string): Promise<V5Page> {
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${restcountriesApiKey}` },
    next: { revalidate: REVALIDATE },
  });
  if (!response.ok) {
    throw new Error(
      `Error in response: ${response.status}, ${response.statusText}`,
    );
  }
  const body: unknown = await response.json();
  const data = (
    body as {
      data?: { objects?: V5Country[]; meta?: { total?: number }; _demo?: unknown };
    }
  )?.data;
  if (data?._demo) {
    throw new Error(
      "La API respondió con datos demo: configura RESTCOUNTRIES_API_KEY con una key real (https://restcountries.com/sign-up) para obtener datos completos",
    );
  }
  const objects = data?.objects;
  if (!Array.isArray(objects)) {
    throw new Error("Unexpected API response format");
  }
  const total = data?.meta?.total ?? objects.length;
  return { objects, total };
}

export const fetchCountries = async (
  params: Record<string, string | number | undefined> = {},
): Promise<V5Page> => {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") query.set(key, String(value));
  }
  const queryString = query.toString();
  const url = `${API_BASE_URL}${queryString ? `?${queryString}` : ""}`;
  return requestV5(url);
};

export const fetchCountriesByProperty = async (
  property: string,
  value: string,
): Promise<V5Page> => {
  const url = `${API_BASE_URL}/${encodeURIComponent(property)}/${encodeURIComponent(
    value,
  )}`;
  return requestV5(url);
};