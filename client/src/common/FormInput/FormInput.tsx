// Styles
import Style from "./FormInput.module.css";

const FormInput: React.FC<any> = ({ props }): React.ReactNode => {
  return (
    <div className={Style.formInput}>
      <input {...props} />
    </div>
  );
};

export default FormInput;
