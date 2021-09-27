import  { FC } from 'react'
import { Card, Layout, Row, Button } from 'antd';
import { LoginForm } from '../components/LoginForm';

export const Login:FC = () => {
    return (
        <Layout>
            <Row justify='center' align='middle' className='h100'>
                <Card>
                  <LoginForm />
                </Card>
            </Row>
        </Layout>
    )
}
