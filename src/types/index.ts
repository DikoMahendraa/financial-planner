export type TypeFormPayload = {
  amount: number;
  date: string;
  id: string;
  uuid: string;
  name: string;
  category: string;
};

export type TypeMCardTarget = {
  label: string;
  amount: string;
  rootStyle?: string;
};

export type TypeMHeaderInEx = {
  title: string;
  amount: string;
};

export type TypeMHeaderProfile = {
  name: string;
};

export type TypeMModal = {
  children: React.ReactNode | JSX.Element;
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

export type TypeButtonNavigation = {
  rootStyle: string;
  parentStyle: string;
  atomStyle: string;
  text: string | boolean;
  active: boolean;
  label: 'home' | 'expands' | 'income' | 'settings' | string;
  onClick: () => void;
};

export type TypeAButton = {
  name: string;
  rootStyle: string;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
};

export type TypeAButtonCreate = {
  onClick: () => void;
};

export type TypeAChips = {
  rootStyle: string;
  name: string;
};

export type TypeAGap = {
  height: string | number;
  width: string | number;
};

export type TypePropsAInput = {
  label: string;
  rootStyle: string;
  placeholder: string;
  suffix: string;
  prefix: string;
  name: string;
  onChange: () => void;
  rest: any;
  type: 'text' | 'date' | 'number';
};
