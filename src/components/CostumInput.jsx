const CostumInput = ({
  onInputChangeCallBack,
  value,
  name,
  type,
  label,
  id,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onInputChangeCallBack}
      />
    </div>
  );
};

export default CostumInput;
