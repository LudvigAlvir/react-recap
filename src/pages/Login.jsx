import { useForm } from "react-hook-form";
export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      action=""
      className="flex flex-col gap-1 max-w-md mx-auto"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <label htmlFor="">Email</label>
      <input
        className="border"
        type="text"
        {...register("email", {
          required: true,
          pattern: {
            value: /noroff\.no$/,
            message: "Email must include @student.noroff.no",
          },
        })}
      />
      {errors.email &&
        (errors.email.message ? (
          <p className="text-red-600">{errors.email.message}</p>
        ) : (
          <p className="text-red-600">Unexpected error</p>
        ))}
      <label htmlFor="">Password</label>
      {/* password need to be at least 6 characters and give error message*/}
      {/* Optional: require one uppercase and one lowercase letter*/}
      <input className="border" type="password" {...register("password")} />
      <button className="border p-1 rounded bg-blue-800 text-white">
        Login
      </button>
    </form>
  );
}
