import { Button, Flex, Form, Input } from 'antd';
import trello from '@/assets/images/trello.svg';
import Google from '@/assets/images/google.svg';
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
      label='Mật khẩu'
      name='password'
      rules={[{ required: true, message: 'Please input your password!' }]}
      className='!mb-2'
    >
      <Input.Password className='w-full' style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item className='!mb-2'>
      <Flex justify='space-between' align='center'>
        <Link to='/register'>Chưa có tài khoản</Link>
        <a href=''>Quên mật khẩu</a>
      </Flex>
    </Form.Item>

    <Form.Item className='!mb-2'>
      <Button block type='primary' htmlType='submit' className='border border-gray-100 py-2 px-4'>
        Đăng nhập
      </Button>
    </Form.Item>
    <Form.Item className='!mb-2'>
      <Flex justify='center' align='center'>
        <span>or</span>
      </Flex>
    </Form.Item>
    <Form.Item className='!mb-2'>
      <button className='hover:bg-primary border border-gray-100 w-full py-2 px-4 rounded-md font-bold cursor-pointer'>
        <Flex justify='center' align='center' gap={10}>
          <img src={Google} alt='Google' width={20} height={20} />
          <span>Google</span>
        </Flex>
      </button>
    </Form.Item>
  </Form>
);
export default Login;
