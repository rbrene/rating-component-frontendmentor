export type ComponentRef = HTMLElement | HTMLDivElement;

export interface ComponentProps {
    id?: string;
    children: React.ReactElement | React.ReactNode | Array<React.ReactElement | React.ReactNode>;
}