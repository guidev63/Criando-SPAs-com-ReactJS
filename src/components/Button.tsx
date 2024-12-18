import { ButtonContainer } from './Button.styles';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}

