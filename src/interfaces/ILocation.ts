export type LocationType = "TOURIST_SPOT" | "DRINK_AND_FOOD" | "EVENT";

export default interface ICity {
  id: number;
  name: string;
  imageUrl: string;
  type: LocationType;
  rating: number;
}
