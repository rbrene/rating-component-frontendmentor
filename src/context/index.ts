import { createContext } from 'react';
import { RatingContextProps } from '../types/context';


export const RatingContext = createContext<RatingContextProps | null>(null);