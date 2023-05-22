import getImageUrl from "@/app/utils";

export default function Avatar(props) {
  let person = props.person,
    size = props.size;
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      height={size}
    />
  );
}