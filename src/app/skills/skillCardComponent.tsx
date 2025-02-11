import Image from "next/image";

type propsType = {
  name: string;
  icon: string;
};
export default function SkillCardComponent(props: propsType) {
  return (
    <div className="skillCardComponent">
      <Image src={props.icon} alt={props.name} width={50} height={50} />
      <p>{props.name}</p>
    </div>
  );
}
