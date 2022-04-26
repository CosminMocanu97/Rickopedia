import { CharacterInterface } from "./characterProps";
import { EpisodeInterface } from "./episodeProps";

export interface CharacterStateInterface { 
    data?: CharacterInterface;
    episodes: Array<EpisodeInterface>;
    loading: boolean;
}