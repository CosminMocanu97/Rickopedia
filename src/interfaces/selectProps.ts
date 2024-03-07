export interface SelectProps {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  value: string;
}
