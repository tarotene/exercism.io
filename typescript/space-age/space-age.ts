type Planet =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

const EARTH_YEAR_IN_SECONDS: number = 31557600;

const ORBITAL_PERIODS_IN_SECONDS: { [planet in Planet]: number } = {
  mercury: 0.2408467 * EARTH_YEAR_IN_SECONDS,
  venus: 0.61519726 * EARTH_YEAR_IN_SECONDS,
  earth: 1.0 * EARTH_YEAR_IN_SECONDS,
  mars: 1.8808158 * EARTH_YEAR_IN_SECONDS,
  jupiter: 11.862615 * EARTH_YEAR_IN_SECONDS,
  saturn: 29.447498 * EARTH_YEAR_IN_SECONDS,
  uranus: 84.016846 * EARTH_YEAR_IN_SECONDS,
  neptune: 164.79132 * EARTH_YEAR_IN_SECONDS,
};

export function age(planet: Planet, seconds: number): number {
  // throw new Error("Remove this statement and implement this function");
  return +(seconds / ORBITAL_PERIODS_IN_SECONDS[planet]).toFixed(2);
}
