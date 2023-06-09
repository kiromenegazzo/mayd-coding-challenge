export interface IProps {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  className?: string;
  onClick?: () => void;
}
