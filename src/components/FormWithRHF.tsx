import { useForm } from "react-hook-form";

export interface JoinForm {
  email: string;
  name: string;
  phone: string;
  password: string;
  password2: string;
}

export default function FormWithRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<JoinForm>({
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      password2: "",
    },
  });

  const onSubmit = (data: JoinForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>React Hook Form을 사용 O</h1>

      <div>
        <label htmlFor="email">이메일</label>
        <input
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
        />
        <p>{errors?.email?.message}</p>
      </div>

      <div>
        <label htmlFor="name">이름</label>
        <input
          {...register("name", {
            required: "이름을 입력해주세요.",
          })}
        />
        <p>{errors?.name?.message}</p>
      </div>

      <div>
        <label htmlFor="phone">전화번호</label>
        <input
          {...register("phone", {
            required: "전화번호을 입력해주세요.",
            pattern: {
              value:
                /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
              message: "올바른 전화번호 형식이 아닙니다.",
            },
          })}
        />
        <p>{errors?.phone?.message}</p>
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
          })}
        />
        <p>{errors?.password?.message}</p>
      </div>

      <div>
        <label htmlFor="password2">비밀번호 확인</label>
        <input
          type="password"
          {...register("password2", {
            required: "비밀번호를 한번 더 입력해주세요.",
            validate: {
              correct: (value) =>
                value === getValues("password")
                  ? true
                  : "비밀번호가 일치하지 않습니다.",
            },
          })}
        />
        <p>{errors?.password2?.message}</p>
      </div>
      <div>
        <button type="submit">회원가입</button>
      </div>
    </form>
  );
}
