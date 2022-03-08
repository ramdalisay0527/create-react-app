import { Paper, Typography } from "@material-ui/core";
import { mergeClasses } from "@material-ui/core/node_modules/@material-ui/styles";
import React from "react";
import { getDefaultUser } from "../../data";
import { useFeedSideSuggestionsStyles } from "../../styles";
import UserCard from "../shared/UserCard";
import FollowButton from "../shared/FollowButton"
import { LoadingIcon } from "../../icons";

function FeedSideSuggestions() {
  const classes = useFeedSideSuggestionsStyles();
  


  let loading = false;

  return (
    <article className={mergeClasses.article}>
      <Paper className={mergeClasses.paper}>
        <Typography 
          color="textSecondary" 
          variant="subtitle2" 
          component="h2" 
          align="left" 
          gutterBottom
          className={classes.typography}>

        </Typography>
        {loading? (
          <LoadingIcon />
        ) : (
          Array.from({length: 5}, () => getDefaultUser()).map(user => (
          <div key={user.id} className={classes.card}> 
            <UserCard user={user} />
            <FollowButton side />
           </div>
        )))}
      </Paper>

    </article>
  )
}

export default FeedSideSuggestions;
