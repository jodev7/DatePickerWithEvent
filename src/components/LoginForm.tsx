import { FC, useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import { rules } from '../utils/rules';
import { useTypedSelector } from '../hooks/useTypedselector';
import { useActions } from '../hooks/useActions';

export const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassord] = useState('')
    const [modal, setModal] = useState(false)
    const {login} = useActions()


    const submit = () => {
        login(username, password)
    }

    const showModal = () => {
      setModal(true)
    }

  return (
    <Form
        onFinish={submit}
    >
      {error && <div style={{color: 'red'}}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required('Please input your username!')]}
      >
        <Input value={username} onChange={e => setUsername(e.target.value)}/>
      </Form.Item>
      <Form.Item
        label="Password"
        name="passord"
        rules={[rules.required('Please input your password!')]}
      >
        <Input value={password} onChange={e => setPassord(e.target.value)} type={'password'}/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
      <Button onClick={showModal} style={{marginLeft: 250, marginTop: -55, position: 'absolute'}}>!</Button>
      <Modal title='Users List' visible={modal} footer={null} onCancel={() => setModal(false)}>
          <p><strong>username:</strong> admin , <strong>passord:</strong> 123</p>
          <p><strong>username:</strong> yusuf , <strong>passord:</strong> yusuf</p>
          <p><strong>username:</strong> client , <strong>passord:</strong> 123</p>
      </Modal>
    </Form>
  );
};
