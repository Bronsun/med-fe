interface InputComponentProps {
  className?: string;
  type?: string;
  placeholder: string;
}

const InputComponent = ({
  className = "",
  type = "text",
  placeholder,
}: InputComponentProps) => {
  return (
    <div className={`field ${className}`}>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default InputComponent;
