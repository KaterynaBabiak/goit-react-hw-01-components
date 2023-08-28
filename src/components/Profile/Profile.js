import { ProfCard } from "./ProfCard";
import { ProfStats } from "./ProfStats";
import PropTypes from 'prop-types';

export const Profile = ({ user }) => {
    return (
    <section>
        <ProfCard 
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
        />  
        <ProfStats
        stats={user.stats} 
        /> 
    </section>
    );
};

Profile.propTypes = {
    user: PropTypes.object,
  };