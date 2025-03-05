/* eslint-disable @typescript-eslint/no-namespace */
export type ChangedPropertiesParam = Map<string | number | symbol, unknown>;

export interface JwButtonClickedEvent extends CustomEvent<MouseEvent> {
  type: 'jw-button-clicked';
}

export interface JwButtonProps {
  id?: string;
  type: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  form?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'jw-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

