import React from 'react';
import { FieldErrorsImpl } from 'react-hook-form';

export type TypeFormPayload = {
  amount: number;
  date: string;
  id: string;
  uuid: string;
  name: string;
  category: string;
};

export type TypeFormEdit = {
  data: Partial<TypeFormPayload>;
  visible: boolean;
};

export type TypeMCardTarget = {
  isEmpty?: boolean;
  label: string;
  amount: string;
  type?: 'small' | 'large' | 'medium';
  rootStyle?: string;
  withIcon?: boolean;
  status?: 'increase' | 'decrease';
  children?: React.ReactNode;
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
  disabled: boolean;
  icon: React.ReactNode;
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
  value: any;
  inputRef: any;
  isCurrency: boolean;
  label: string;
  rootStyle: string;
  placeholder: string;
  suffix: string;
  errors: FieldErrorsImpl<{ [x: string]: string }>;
  prefix: string;
  name: string;
  onChange: () => void;
  rest: any;
  type: 'text' | 'date' | 'number' | 'email' | 'password';
};

export type TypeResponse = {
  amount: number;
  date: string;
  name: string;
  category: string;
  createdAt: string;
};

export type TypeEmptyData = {
  title: string;
  onClick: () => void;
  rootStyle: string;
  description: React.ReactNode;
  actionBtn: boolean;
  illustration: Partial<{
    height: number;
    width: number;
  }>;
};
