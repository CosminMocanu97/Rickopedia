import { CharacterInterface } from '../interfaces/characterProps'

export interface StateInterface {
    data: Array<CharacterInterface>;
    name: string;
    status: string;
    currentPage: number;
    totalPages: number,
    error: boolean,
    errorMessage: string,
    loading:boolean,
}