import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../reducers/user';

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if(password !== passwordCheck) {
      return setPasswordError(true);
    }
    if(!term) {
      return setTermError(true);
    }
    dispatch(signUpAction({
      id,
      password,
      nick
    }))
  }, [password, passwordCheck, term]);

  const onChangePasswordChk = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">id</label>
          <br/>
          <Input name="user-id" value={id} required onChange={onChangeId}/>
        </div>
        <div>
          <label htmlFor="user-nick">nickname</label>
          <br/>
          <Input name="user-nick" value={nick} required onChange={onChangeNick}/>
        </div>
        <div>
          <label htmlFor="user-password">password</label>
          <br/>
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword}/>
        </div>
        <div>
          <label htmlFor="user-password-check">password check</label>
          <br/>
          <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk}/>
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name="user-term" value={term} onChange={onChangeTerm}>개인정보 수집에 동의합니다.</Checkbox>
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div sttyle={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">signup</Button>
        </div>
      </Form>
    </>
  )
}

export default Signup;