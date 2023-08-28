import { ProfCard } from "./ProfCard";
import { ProfStats } from "./ProfStats";
import PropTypes from 'prop-types';
import { ProfWrapper } from "./Profile.styled";

export const Profile = ({ user }) => {
    return (
    <ProfWrapper>
        <ProfCard 
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
        />  
        <ProfStats
        stats={user.stats} 
        /> 
    </ProfWrapper>
    );
};

Profile.propTypes = {
    user: PropTypes.object,
  };