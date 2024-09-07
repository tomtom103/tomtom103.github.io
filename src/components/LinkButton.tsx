import Button, { ButtonProps } from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)<{ active: boolean }>(({ theme, active }) => [
  {
    ...(active && {
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.primary[900],
      // Add any additional styling for the active state
    }),
  } as const,
  theme.applyDarkStyles({
    ...(active && {
      backgroundColor: theme.palette.grey[700],
      color: theme.palette.primary[900],
    }),
  }),
]);

interface LinkButtonProps extends ButtonProps {
  to: string;
}

export default function LinkButton({ to, children, ...rest }: LinkButtonProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledButton {...rest} active={isActive}>
        {children}
      </StyledButton>
    </Link>
  );
}
