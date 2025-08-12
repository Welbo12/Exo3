import './../../style/index.css'

const MySkills = () => {
  return (
    <div className="my-skills">
      <div className="my-skills-left">
        <h4>My Skills</h4>
        <h1>Why Hire Me For Your Next <span>Project?</span></h1>
        <p>I'm specialist in UI/UX Design. My passion is designing & solving problems through user experience and research.</p>
        <button>Hire Me</button>
      </div>
      
      <div className="my-skills-right">
        <div className="skill-card">
          <div className="skill-icon">💎</div>
          <h3>Visual Design</h3>
          <p>Create user interface design with unique & modern ideas</p>
        </div>
        
        <div className="skill-card">
          <div className="skill-icon">📊</div>
          <h3>UX Research</h3>
          <p>Create digital user products with updated ideas</p>
        </div>
        
        <div className="skill-card">
          <div className="skill-icon">📈</div>
          <h3>Design Prototype</h3>
          <p>Create advance design prototype with Figma apps</p>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
