/**
 * Maps hobby names (from static data) to icon names in src/icons.
 * Add the corresponding .svg file in src/icons/ if missing.
 */
export function getHobbyIconName(hobby: string): string {
  const map: Record<string, string> = {
    "Reading Books": "book",
    "Coffee": "coffee",
    "Gym": "dumbbell",
    "Music (Pop)": "music",
    "Playing Guitar": "guitar",
    "Movies": "film",
    "Anime": "tv",
    "Chess": "chess",
    "Cooking": "utensils",
  };
  return map[hobby] ?? "heart";
}
