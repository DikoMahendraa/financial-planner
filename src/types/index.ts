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

export type TypeAButton = {
  name: string;
  rootStyle: string;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
};

export type TypeButtonNavigation = {
  rootStyle: string;
  parentStyle: string;
  atomStyle: string;
  text: string | boolean;
  active: boolean;
  label: 'home' | 'expands' | 'income' | 'settings' | string;
  onClick: () => void;
};
