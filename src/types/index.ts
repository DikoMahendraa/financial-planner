export type TypeFormPayload = {
  amount: number;
  date: string;
  id: string;
  uuid: string;
  name: string;
  category: string;
};

export type TypeMCardInEx = {
  label: string;
  name: string;
  date: string;
  amount: string;
  type: string;
  showLabel: boolean;
  variant: 'small' | 'medium' | 'large';
  category: string;
  onRemove: () => void;
  onEdit: () => void;
};
