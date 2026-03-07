import { Button, Form, Input } from 'antd';
import trello from '@/assets/images/trello.svg';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <Form
    name='basic'
    labelCol={{ span: 24 }}
    wrapperCol={{ span: 24 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete='off'
    layout='vertical'
  >
    <div className='flex justify-center p-2 gap-2 items-center'>
      <img src={trello} alt='' />
      <h2 className='font-bold text-2xl'>Trello</h2>
    </div>
    <Form.Item
      label='Tên đăng nhập'
      name='name'
      rules={[{ required: true, message: 'Please input your name!' }]}
      className='!mb-2'
    >
      <Input className='w-full' style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label='Email'
      name='email'
      rules={[{ required: true, message: 'Please input your email!' }]}
      className='!mb-2'
    >
      <Input className='w-full' style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label='Mật khẩu'
      name='password'
      rules={[{ required: true, message: 'Please input your password!' }]}
      className='!mb-4'
    >
      <Input.Password className='w-full' style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label='Nhập lại mật khẩu'
      name='password'
      rules={[{ required: true, message: 'Please input your re-password!' }]}
      className='!mb-2'
    >
      <Input.Password className='w-full' style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item className='!mb-2 flex justify-center'>
      <Link to='/login'>Đã có tài khoản!</Link>
    </Form.Item>

    <Form.Item className='!mb-2'>
      <Button block type='primary' htmlType='submit' className='border border-gray-100 py-2 px-4'>
        Đăng ký
      </Button>
    </Form.Item>
  </Form>
);
export default Login;
