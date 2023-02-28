export interface RatingContextProps {
    rate: 0 | 1 | 2 | 3 | 4 | 5;
    success: {
        state: boolean,
        dispatch: React.Dispatch<React.SetStateAction<boolean>>;
    };
    dispatch: React.Dispatch<React.SetStateAction<HTMLButtonElement | any>>;
};