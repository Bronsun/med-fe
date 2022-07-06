import { prependOnceListener } from "process";

interface InputComponentProps {
  className?: string;
  type?: string;
  placeholder: string;
  onChange: (e:any)=>void;
  value: any;
}

const InputComponent = ({
  className = "",
  type = "text",
  placeholder,onChange, value
}: InputComponentProps) => {
  return (
    <div className={`field ${className}`}>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder} value={value} onChange={onChange}/>
      </div>
    </div>
  );
};

export default InputComponent;
