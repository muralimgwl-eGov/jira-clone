import React from "react";
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {
  Link
} from "react-router-dom";



// const useStyles = makeStyles({
//   list: {
//     width: 250
//   },
//   fullList: {
//     width: "auto"
//   }
// });

/*


*/
export default function TemporaryDrawer({hasDrawerOpen,toggeMenu}) {
  // const classes = useStyles();



  const list = () => (
    <div>
      <List>
        {/*{["Active Sprint", "Backlog"].map((text, index) => (}*/}

          <ListItem button >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/"><ListItemText primary={"Acive Sprint"} /></Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <Link to="/backlog"><ListItemText primary={"Backllog"} /></Link>
          </ListItem>
        {/*))}*/}
      </List>
    </div>
  );

  return (
    <div>
        <Drawer
          open={hasDrawerOpen}
          onClose={(e)=>toggeMenu()}
        >
          {list()}
        </Drawer>
    </div>
  );
}
