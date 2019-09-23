import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

const UserProfile = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutAction);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">twit<br />{user.Post.length}</div>,
        <div key="following">following<br />{user.Followings.length}</div>,
        <div key="follower">follower<br />{user.Followers.length}</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickname[0]}</Avatar>}
        title={user.nickname}
      />
      <Button onClick={onLogout}>logout</Button>
    </Card>
  )
};

export default UserProfile;