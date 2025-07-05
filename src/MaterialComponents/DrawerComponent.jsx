import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";

export default function DrawerComponent() {
  return (
    <>
      <Drawer
        // className={classes.drawer}
        variant="permanent"
        anchor="left"
        // classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5">Osama Notes</Typography>
        </div>

        {/* list / links */}
        <List>
          {[].map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              //   className={
              //     location.pathname === item.path ? classes.active : undefined
              //   }
            >
              <ListItemButton onClick={() => history.push(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* /////////////// */}
    </>
  );
}
