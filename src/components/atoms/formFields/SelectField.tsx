import Select from "react-select";
import { Option } from "../../../types/utils";

interface IProps {
  options: Option[];
}

const SelectField: React.FC<IProps> = ({ options }) => {
  return <Select options={options} />;
};

export default SelectField;
