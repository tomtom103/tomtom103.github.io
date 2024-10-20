import Button, { ButtonProps } from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)<{ active: string }>(({ theme, active }) => [
  {
    ...(active === 'true' && {
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.primary[900],
      // Add any additional styling for the active state
    }),
  } as const,
  theme.applyDarkStyles({
    ...(active && {
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.primary[900],
    }),
  }),
]);

interface LinkButtonProps extends ButtonProps {
  to: string;
  external?: boolean;
}

export default function LinkButton({ to, children, external, ...rest }: LinkButtonProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        <StyledButton {...rest} active={String(isActive)}>
          {children}
        </StyledButton>
      </a>
    );
  }
  return (
    <Link to={to}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledButton {...rest} active={String(isActive)}>
        {children}
      </StyledButton>
    </Link>
  );
}
