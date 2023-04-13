// Main type Beer
export type Beer = {
  id: string;
  name: string;
  tagline?: string;
  first_brewed?: string;
  description?: string;
  image_url?: string;
  abv?: number;
  ibu?: number;
  target_fg?: number;
  target_og?: number;
  ebc?: number;
  srm?: number;
  ph?: number;
  attenuation_level?: number;
  volume?: Volume;
  boil_volume?: BoilVolume;
  method?: Method;
  ingredients?: Ingredients;
  food_pairing?: string[];
  brewers_tips: string;
  contributed_by: string;
};

// Secondary types
export type Volume = {
  value?: number;
  unit?: string;
};

export type BoilVolume = {
  value?: number;
  unit?: string;
};

export type Method = {
  mash_temp?: MashTemp[];
  fermentation?: {
    temp?: Temp;
  };
  twist?: string;
};

export type Ingredients = {
  malt?: Ingredient[];
  hops?: Ingredient[];
  yeast?: string;
};

// Third types
export type MashTemp = {
  temp?: Temp;
  duration?: number;
};

export type Temp = {
  value?: number;
  unit?: string;
};

export type Ingredient = {
  name?: string;
  amount?: Amount;
};

export type Amount = {
  value?: number;
  unit?: string;
};

// Misc
export type Data = {
  id: number;
  name: string;
  linkId: number | null;
};

export type Family = {
  parentName?: string;
  childNames: (string | undefined)[];
};
