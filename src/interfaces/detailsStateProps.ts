import { CharacterInterface } from "./characterProps";
import { EpisodeInterface } from "./episodeProps";

export interface CharacterStateInterface { 
    data: CharacterInterface | undefined;
    episodes: Array<EpisodeInterface>;
}