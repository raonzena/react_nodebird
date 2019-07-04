import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import { useInput } from '../pages/signup';

const LoginForm = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log({
      id, password
    });
  }, [id, password]);
  return (
    <Form onSubmit={onSubmitForm} style={{ padding: 10 }}>
      <div>
        <label htmlFor="user-id">id</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">password</label>
        <br />
        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>login</Button>
        <a href="/signup"><Button>signup</Button></a>
      </div>
    </Form>
  );
};

export default LoginForm;
