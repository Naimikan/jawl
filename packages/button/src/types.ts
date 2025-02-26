export type ChangedPropertiesParam = Map<string | number | symbol, unknown>;

export interface JwButtonProps {
  id?: string;
  type: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  form?: string;
}
