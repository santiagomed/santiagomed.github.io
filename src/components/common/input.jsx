import React from "react";

const Input = ({ name, label, error, input, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {input ? (
        <input {...rest} name={name} id={name} className="form-control" />
      ) : (
        <textarea {...rest} name={name} id={name} className="form-control" />
      )}
      {error && <div className="alert alert-danger m-1">{error}</div>}
    </div>
  );
};

export default Input;
