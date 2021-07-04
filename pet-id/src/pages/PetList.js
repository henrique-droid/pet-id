import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { Link, useHistory } from "react-router-dom";
function PetList() {

  const history = useHistory();
  function handleAddPetClick() {
    history.push({pathname: "/pet-add"});
  }

  return (
    <div>
      <Grid container direction="column">
        <Grid item xs={12}>
          <List>
            {["Rex", "cao2", "cao3","cao4","cao5","Rex", "cao2", "cao3","cao4","cao5","Rex", "cao2", "cao3","cao4","cao5"].map((item) => (
              <ListItem to={"/pet-add"} component={Link} button>
                <ListItemText primary={item} />
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item>
          <Button onClick={handleAddPetClick} color="primary" variant="contained">
              Adicionar Animal
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}

export default PetList;
