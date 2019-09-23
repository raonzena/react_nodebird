import React from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';

const PostForm = () => {
  const { imagePaths } = useSelector(state => state.post);
  return (
    <Form style={{ margin: '10px 0px 20px' }} encType="multipart/form-data">
      <Input.TextArea maxLength={140} placeholder="What's up today?"/>
      <div>
        <input type="file" multiple hidden/>
        <Button>image upload</Button>
        <Button type="primary" style={{ float: 'right'}} htmlType="submit">twit</Button>
      </div>
      <div>
        {imagePaths.map((v, i) => {
          return (
            <div key={v} style={{ display: 'inline-block'}}>
              <img src={'http://localhost:3065/' + v} style={{ width: '200px'}} alt={v} />
              <div>
                <Button>remove</Button>
              </div>
            </div>
          )
        })}
      </div>
    </Form>
  )
}

export default PostForm;