type propsType = {
  degreeName: string;
  instituteName: string;
  mark: string;
  duration: string;
};


export default function EducationCard(props: propsType) {
  const { degreeName, instituteName, mark, duration } = props;

  return (
    <div
      className="educationCard"
    >
      <p className="degreeName">{degreeName}</p>
      <p className="instituteName">{instituteName}</p>
      <div className="bottomContainer">
        <p className="mark">{mark}</p>
        <p className="duration">{duration}</p>
      </div>
    </div>
  );
}
