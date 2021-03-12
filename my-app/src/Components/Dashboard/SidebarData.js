import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

export const SidebarData = [
    {
        title: "My Stories",
        icon: <NewReleasesIcon/>,
    },
    {
        title: "Briefing",
        icon: <BusinessCenterIcon/>,
        
    },
    {
        title: "Suggested",
        icon: <QuestionAnswerIcon/>,
    },
    {
        title: "Trending",
        icon: <TrendingUpIcon />,
    },
    {
        title: "Bookmarks",
        icon: <BookmarkIcon />,
    },
    {
        title: "Personalise",
        icon: <AccountCircleIcon />,
    }
]