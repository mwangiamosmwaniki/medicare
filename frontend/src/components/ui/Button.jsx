import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons(props) {
  return (
    <Stack direction="row" spacing={5}>
      <Button
        variant={props.variant}
        className={props.className}
        onClick={props.onClick}
        sx={props.sx}
      >
        {props.children}
      </Button>
    </Stack>
  );
}
