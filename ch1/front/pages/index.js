import React from 'react';
import { Input, Form, Button, Card, Avatar, Icon } from 'antd';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'raonzena',
    },
    content: 'first post',
    img: 'https://newsimg.sedaily.com/2019/01/23/1VE5F3W5WP_18.png',
  }]
}

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <Form style={{ marginBottom: 20 }} encType="multipart/form-data">
        <Input.TextArea maxLength={140} placeholder="What's up today?"/>
        <div>
          <input type="file" multiple hidden/>
          <Button>image upload</Button>
          <Button type="primary" style={{ float: 'right'}} htmlType="submit">twit</Button>
        </div>
        <div>
          {dummy.imagePaths.map((v, i) => {
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
      </Form>}
      {dummy.mainPosts.map((c) => {
        return (
          <Card
            key={+c.createdAt}
            cover={c.img && <img alt="example" src={c.img} />}
            actions={[
              <Icon type="retweet" key="retweet"/>,
              <Icon type="heart" key="heart"/>,
              <Icon type="message" key="message"/>,
              <Icon type="ellipsis" key="ellipsis"/>,
            ]}
            extra={<Button>follow</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            />
          </Card>
        )
      })}
    </div>
  );
};

export default Home;
