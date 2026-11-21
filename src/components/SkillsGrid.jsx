export default function SkillsGrid({ categories }) {
  return (
    <div className="skills-grid">
      {categories.map((group) => (
        <div className="skills-group" key={group.category}>
          <h3>{group.category}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item.name}>
                <span className="skill-name">{item.name}</span>
                <span className="skill-detail">{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
