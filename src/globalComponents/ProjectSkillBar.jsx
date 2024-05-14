import './ProjectSkillBar.css';
import PropTypes  from 'prop-types';

function ProjectSkillBar ({skillName, percentaje}) {
    
    return(
        <div className='index-personal-skill'>
            <label>{skillName}</label>
            <div className='index-personal-skill-bar'> <div className={percentaje}> </div></div>
        </div>
    )
}

ProjectSkillBar.propTypes = {
    skillName : PropTypes.string,
    percentaje : PropTypes.string
}

export default ProjectSkillBar;