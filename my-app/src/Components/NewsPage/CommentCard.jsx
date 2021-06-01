import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styles from "../../Styles/Comments.module.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    textAlign: "left",
    marginTop: 15,
    padding: 0
  },
  avatar: {
    backgroundColor: red[500]
  },
  header: {
      padding: 0,
      paddingLeft: 15
  },
  footer: {
      padding: 5,
      paddingLeft: 15,
      height:45
  },
  topo: {
      padding: 3,
      paddingTop: 6,
      paddingLeft: 25
  }
}));

export default function CommentCard({id,date, name, comment, user, handleDelete}) {
  
  const classes = useStyles();
  const [colour, setColour] = useState("");

  const changeStyle = () => {
      setColour("red")
  }
  
  return (
    <Card className={classes.root}>
      <CardHeader className = {classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            U
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardContent className = {classes.topo}>
        <Typography className = {styles.comment_card} variant="body2" color="textSecondary" component="p">
          {comment}
        </Typography>
      </CardContent>
      <CardActions className = {classes.footer} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick = {changeStyle} style = {{color : colour}}/>
        </IconButton>
        <IconButton aria-label="share">
          {user === name && <DeleteIcon onClick = {() => handleDelete(id)}/>}
        </IconButton>
      </CardActions>
    </Card>
  );
}
