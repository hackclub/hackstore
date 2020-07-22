/**@jsx jsx*/
import { jsx } from "theme-ui";
import store from "../../State/store/index";
import { activetabchanged } from "../../State/actions/index";

export default ({ imgsrc, section }) => (
  <div
    sx={{
      pt: 3,
      display: "flex",
      flexDirection: "column",
      //  borderBottom: '1px solid',
      // borderColor: 'muted',
      width: "100%",
      alignItems: "center",
      ":hover": {
        transform: "scale(1.1)",
        cursor: "pointer",
      },
    }}
    onClick={() => {
      store.dispatch(activetabchanged(section));
    }}
  >
    <div sx={{ textAlign: "center" }}>
      <img sx={{ width: "70px" }} src={imgsrc} />
    </div>{" "}
    <h2 sx={{ mt: 0 }}>{section}</h2>
  </div>
);
