import s from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return <p className={s.errorTxt}>Ooops... Something went wrong!</p>;
};

export default ErrorMessage;
