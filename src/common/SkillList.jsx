function SkillList({ src, skill,src1 }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
      <img src={src1} alt="Checkmark icon"></img>
    </span>
  );
}

export default SkillList;
