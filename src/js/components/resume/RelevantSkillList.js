import React from 'react';
import {Link} from 'react-router-dom';
export default class RelevantSkillList extends React.Component {


  // <img src={require('../../../assets/skills1-technicallangs.png')} />
  // <img src={require('../../../assets/skills1-goodies.png')} />
  // <img src={require('../../../assets/skills1-softskills.png')} />

  render(){
    return (
      <div className="relevant-skill-list">
        <div className="skill-table-title">{this.props.title}</div>
        <table className="skill-table"><tbody>
        {this.props.skills.map((skill, index) => {
          return (
            <tr key={index} className={
              `skill-entry ${!isFinite(skill.proficiency) ? "text-proficiency" : ""}`}>
              <td className="skill-name">
                {(skill.link_portfolio) ?
                  <Link className="skill-link" to={"/portfolio/?filter=" + encodeURIComponent(skill.name)}>{((skill.name) ? skill.name : '\u00A0')}</Link> :
                  ((skill.name) ? skill.name : '\u00A0')
                }
              </td>
              <td className="skill-dots-container">
                {isFinite(skill.proficiency) ?
                  [...Array(skill.proficiency)].map((e, i) =>
                      <span className="skill-dot" key={i}>&nbsp;</span>)
                : <span className="skill-text">{skill.proficiency}</span>
                }
              </td>
            </tr>
          );
        })}
        </tbody>
        </table>
      </div>
    );
  }
}
