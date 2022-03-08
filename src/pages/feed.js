import React from "react";
import { useFeedPageStyles } from "../styles";
import Layout from '../components/shared/Layout';
import { getDefaultPost } from '../data';
//import FeedPost from '../components/feed/FeedPost'
import {Hidden} from '@material-ui/core';
import FeedSideSuggestions from '../components/feed/FeedSideSuggestions'
import UserCard from '../components/shared/UserCard'
import LoadingScreen from "../components/shared/LoadingScreen";
import { LoadingLargeIcon } from "../icons";
import FeedPostSkeleton from "../components/feed/FeedPostSkeleton";
//lazy loading must be written after all the imports
const FeedPost = React.lazy(() => import('../components/feed/FeedPost'))


function FeedPage() {
  const classes = useFeedPageStyles();
  //variable for infinite scrolling
  const [isEndOfFeed] = React.useState(false)
  //variable for page loading
  let loading = false;
  if(loading) return <LoadingScreen />
  return <Layout>
    <div className={classes.container}>
      <div>
      {/* Feed Posts div */}
      {Array.from({ length: 5}, () => getDefaultPost()).map((post, index) => (
        <React.Suspense key={post.id} fallback={<FeedPostSkeleton/>}>
          <FeedPost index={index} post={post} />
        </React.Suspense>
      ))}
      </div>
    {/* SideBar */}
        <Hidden smDown>
          <div className={classes.sidebarContainer}>
            <div className={classes.sidebarWrapper}>
              <UserCard avatarSize={50}/>
              <FeedSideSuggestions/>
            </div>

          </div>
        </Hidden>
        {!isEndOfFeed && <LoadingLargeIcon />}

    </div>
  </Layout>;
}

export default FeedPage;
