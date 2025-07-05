import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

export default function ListComponent() {
  return (
    <>
      <List>
        {[].map((item) => (
          <ListItem key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      {/* /////////////// */}
      <List>
        {[].map((item) => (
          <ListItem
            key={item.text}
            button
            onClick={() => history.push(item.path)}
            // className={
            //   location.pathname === item.path ? classes.active : undefined
            // }
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      {/* /////////////// */}
      <List>
        {[].map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            // className={
            //   location.pathname === item.path ? classes.active : undefined
            // }
          >
            <ListItemButton onClick={() => history.push(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
