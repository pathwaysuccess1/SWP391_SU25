import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/button';
import { Mail, Lock, User } from 'lucide-react';

const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Giả lập đăng ký thành công
    if (fullName && email && password) {
      // Có thể thêm validation đơn giản ở đây
      navigate('/login'); // Chuyển đến trang đăng nhập sau khi đăng ký
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-4">Đăng ký BloodCare</h2>
        <form onSubmit={handleRegister} className="space-y-5">
          {/* ...existing code... */}
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