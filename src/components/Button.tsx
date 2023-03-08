interface ButtonProps {
    text : string;

    className? : string;
}

export function Button (props: ButtonProps) {
  return (
    <button className={`text-primary bg-white text-lg font-bold rounded-md py-2 px-5 ${props.className}`}>
        {props.text}
    </button>
  );
}
