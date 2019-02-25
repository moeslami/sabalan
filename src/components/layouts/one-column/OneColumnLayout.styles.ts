import { FormHelperText } from "@material-ui/core";

export default (theme: any) => ({
  root: {
    margin: "auto 2rem",
    maxWidth: "80%",
    "& table": {
      width: "100%",
      margin: "auto",
      borderBottom: `solid 1px ${theme.palette.secondary.light}`,
      "& thead": {
        "& tr": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      }
    }
  }
});
