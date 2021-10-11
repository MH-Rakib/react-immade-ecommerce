import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "./../../App";
import classes from "./Shipment.module.css";

const Shipment = () => {
  const [logedInUser, setLogedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        {...register("name", { required: true })}
        defaultValue={logedInUser.name}
      />
      {errors.name && (
        <span className={classes.error}>This field is required</span>
      )}
      <br />

      <input
        name="email"
        {...register("email", { required: true })}
        defaultValue={logedInUser.email}
      />
      {errors.email && (
        <span className={classes.error}>This field is required</span>
      )}
      <br />

      <input
        name="address"
        {...register("address", { required: true })}
        placeholder="Your address"
      />
      {errors.address && (
        <span className={classes.error}>This field is required</span>
      )}
      <br />

      <input
        name="zip"
        {...register("zip", { required: true })}
        placeholder="Your Zip code"
      />
      {errors.zip && (
        <span className={classes.error}>This field is required</span>
      )}
      <br />

      <input type="submit" />
    </form>
  );
};

export default Shipment;
