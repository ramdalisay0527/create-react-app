import React from "react";
import { useProfilePictureStyles } from "../../styles";
import { Person } from "@material-ui/icons";

function ProfilePicture({ 
  size,
  image = 'https://media-exp1.licdn.com/dms/image/C4D03AQENNpi0niXsuw/profile-displayphoto-shrink_200_200/0/1639436354955?e=1649894400&v=beta&t=6tewPetPoKHfKBT-AHvLn-LadWy4edOW2SQ9oOE_kEI',
  isOwner
}) {
  const classes = useProfilePictureStyles({size, isOwner});

  return (
    <section className={classes.section}>
      {image ? (
        <div className={classes.wrapper}>
          <img src={image} alt="user profile" className={classes.image} />
        </div>
      ): (
        <div className={classes.wrapper}>
          <Person className={classes.person} />
        </div>
      )}
    </section>
  )
}

export default ProfilePicture;
