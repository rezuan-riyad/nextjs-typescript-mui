import Box from '@mui/material/Box';

type PropType = {
  active: boolean,
  height?: number
}

export default function Bar({ active, height }: PropType) {
  return (
    <Box
      sx={{
        width: "4px",
        height: "inherit",
        borderEndEndRadius: "8px",
        borderStartEndRadius: "8px",
        bgcolor: active ? "primary.main" : "transparent"
      }} />
  )
}