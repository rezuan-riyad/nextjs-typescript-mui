import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)<ToolbarProps>(() => ({
  minHeight: "2rem"
}))

export default function CustomToolbar(props: ToolbarProps) {
  return <StyledToolbar { ...props }/>
}