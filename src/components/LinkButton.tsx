import Link, { LinkProps } from '@mui/material/Link';
import Button, { ButtonProps } from '@mui/material/Button';

type LinkButtonProps = LinkProps & ButtonProps & {to: string};

export default function LinkButton(props: LinkButtonProps) {
    const { to, ...rest } = props;
    return (
        <Button
            component={Link}
            to={to}
            {...rest}
        >
            
        </Button>
    )
}
