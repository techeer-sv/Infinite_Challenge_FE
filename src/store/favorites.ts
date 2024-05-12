import { atom } from "jotai";
import { SearchDataType } from "../types";

export const favoriteResultsAtom = atom(new Map<string, SearchDataType>());
