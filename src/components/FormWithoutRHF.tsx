import { useState } from "react";

export interface JoinForm {
  email: string;
  name: string;
  phone: string;
  password: string;
  password2: string;
}

export default function FormWithoutRHF() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [password2Error, setPassword2Error] = useState<string>("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError("");
    // TO DO: 이메일 형식 체크
    setEmail(e.target.value);
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameError("");
    setName(e.target.value);
  };
  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneError("");
    // TO DO: 이름 형식 체크
    setPhone(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordError("");
    // TO DO: 비밀번호 형식 검증
    setPassword(e.target.value);
  };
  const onChangePassword2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2Error("");
    setPassword2(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "") {
      setEmailError("이메일을 입력해주세요.");
    }
    if (name === "") {
      setNameError("이름을 입력해주세요.");
    }
    if (phone === "") {
      setPhoneError("전화번호를 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (password2 === "") {
      setPassword2Error("비밀번호를 한번 더 입력해주세요.");
    }
    if (password !== password2) {
      setPassword2Error("비밀번호가 일치하지 않습니다.");
    }
    console.log(e);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>React Hook Form을 사용 X</h1>

      <div>
        <label>이메일</label>
        <input type="email" name="email" onChange={onChangeEmail} />
        <p>{emailError}</p>
      </div>

      <div>
        <label>이름</label>
        <input type="text" name="name" onChange={onChangeName} />
        <p>{nameError}</p>
      </div>

      <div>
        <label>전화번호</label>
        <input type="text" name="phone" onChange={onChangePhone} />
        <p>{phoneError}</p>
      </div>

      <div>
        <label>비밀번호</label>
        <input type="password" name="password" onChange={onChangePassword} />
        <p>{passwordError}</p>
      </div>

      <div>
        <label>비밀번호 확인</label>
        <input type="password" name="password2" onChange={onChangePassword2} />
        <p>{password2Error}</p>
      </div>
      <div>
        <button type="submit">회원가입</button>
      </div>
    </form>
  );
}
