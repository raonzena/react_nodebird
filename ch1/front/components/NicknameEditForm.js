import React from 'react';
import { Form, Input, Button } from 'antd'

const dummyUser = {
  name: 'raonzena'
}

const NicknameEditForm = () => {
  return (
    <Form style={{ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px'}}>
      <Input value={dummyUser.name} addonBefore="nickname" />
      <Button type="primary">modify</Button>
    </Form>
  )
}

export default NicknameEditForm;