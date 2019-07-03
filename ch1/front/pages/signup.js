import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';

const Signup = () => {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(
      id,
      nick,
      password,
      passwordCheck,
      term
    );
  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeNick = (e) => {
    setNick(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordChk = (e) => {
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = (e) => {
    setTerm(e.target.value);
  };
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
      </Head>
      <AppLayout>
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
          </div>
          <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>개인정보 수집에 동의합니다.</Checkbox>
          </div>
          <div>
            <Button type="primary" htmlType="submit">signup</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  )
}

export default Signup;