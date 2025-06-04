import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/sections/button';
import { Mail, Lock, User } from 'lucide-react';

const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Gọi API đăng ký
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-4">Đăng ký BloodCare</h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Họ và tên</label>
            <div className="flex items-center border rounded-lg px-3">
              <User className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                className="w-full py-2 outline-none"
                placeholder="Nhập họ và tên"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <div className="flex items-center border rounded-lg px-3">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="email"
                className="w-full py-2 outline-none"
                placeholder="Nhập email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Mật khẩu</label>
            <div className="flex items-center border rounded-lg px-3">
              <Lock className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="password"
                className="w-full py-2 outline-none"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-red-600 text-white hover:bg-red-700">
            Đăng ký
          </Button>
          <p className="text-center text-gray-500 mt-2">
            Đã có tài khoản?{' '}
            <button
              type="button"
              className="text-red-600 hover:underline"
              onClick={() => navigate('/login')}
            >
              Đăng nhập
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;