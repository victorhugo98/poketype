export interface PokeProps {
  results: PokeResult[];
  next?: string | null;
  previous?: string | null;
}
export interface PokeResult {
  name: string;
  url: string;
}
interface Front_Default {
  front_default: string;
}
export interface PokeItem {
  base_experience: number;
  name: string;
  sprites: Front_Default;
  setSkeleton: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ResultProps {
  results: PokeResult;
}
