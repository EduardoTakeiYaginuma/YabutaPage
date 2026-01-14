
export interface ProductVariation {
  photo: string;
  primaryPackaging: string;
  quantity: string;
  availableTypes: string;
  colors: ('branco' | 'vermelho')[];
}

export interface Product {
  id: string;
  name: string;
  image: string;
  generalDescription: string;
  variations: ProductVariation[];
}

export interface LocationInfo {
  state: string;
  cities: string[];
}