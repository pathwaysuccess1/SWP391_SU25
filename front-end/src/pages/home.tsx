import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from "../components/sections/hero.tsx";
import WrapperSection from "../components/sections/wrapperSection.tsx";
import GroupedHeading from "../components/sections/GroupedHeading.tsx";
import TwoCta from "../components/sections/twoCta.tsx";
import ThreeStepProcess from "../components/sections/threeStepProcess.tsx";
// import SearchBloodStock from "../components/sections/searchBloodStock.tsx";
import ContactDetails from "../components/sections/contactDetails.tsx";


const Home: React.FC = () => {
    const navigate = useNavigate();

    // Simple data for homepage
    const heroData = {
        title: "Kết Nối Sự Sống Qua Hiến Máu",
        subtitle: "Tham gia mạng lưới hiến máu tại TP.HCM. Mỗi giọt máu của bạn là một cơ hội cứu sống.",
        primaryButtonText: "Đăng ký hiến máu",
        secondaryButtonText: "Tìm hiểu thêm",
        backgroundImage: "/images/hero-blood-donation.jpg"
    };

    const statsData = [
        { label: "Người hiến máu", value: "25,847", icon: "👥" },
        { label: "Đơn vị máu đã thu", value: "89,234", icon: "🩸" },
        { label: "Bệnh nhân được cứu", value: "156,789", icon: "💚" },
        { label: "Bệnh viện liên kết", value: "47", icon: "🏥" }
    ];

    const processSteps = [
        {
            step: 1,
            title: "Đăng ký",
            description: "Điền thông tin và đặt lịch hiến máu phù hợp"
        },
        {
            step: 2,
            title: "Khám sàng lọc",
            description: "Kiểm tra sức khỏe và xét nghiệm máu cơ bản"
        },
        {
            step: 3,
            title: "Hiến máu",
            description: "Quá trình hiến máu an toàn trong 10-15 phút"
        }
    ];

    const urgentBloodTypes = [
        { type: "O-", stock: "Thấp", urgency: "Cực kỳ cần", color: "bg-red-500" },
        { type: "AB-", stock: "Rất thấp", urgency: "Cần gấp", color: "bg-orange-500" },
        { type: "A-", stock: "Thấp", urgency: "Cần thiết", color: "bg-yellow-500" }
    ];

    const handlePrimaryAction = () => {
        navigate('/donate-blood');
    };

    const handleSecondaryAction = () => {
        navigate('/blood-types');
    };

    const handleNeedBlood = () => {
        navigate('/need-blood');
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <Hero
                title={heroData.title}
                subtitle={heroData.subtitle}
                primaryButtonText={heroData.primaryButtonText}
                secondaryButtonText={heroData.secondaryButtonText}
                onPrimaryClick={handlePrimaryAction}
                onSecondaryClick={handleSecondaryAction}
                backgroundImage={heroData.backgroundImage}
            />

            {/* Stats Section */}
            <WrapperSection className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <GroupedHeading
                        title="Tác động của chúng ta"
                        description="Những con số ý nghĩa từ cộng đồng hiến máu"
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                        {statsData.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-2">{stat.icon}</div>
                                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </WrapperSection>

            {/* Urgent Blood Need Alert */}
            <WrapperSection className="py-12 bg-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-red-100 border border-red-200 rounded-lg p-6">
                        <div className="flex items-center">
                            <div className="text-red-600 text-xl mr-3">🚨</div>
                            <div>
                                <h3 className="text-lg font-semibold text-red-800">
                                    Cần gấp các nhóm máu hiếm
                                </h3>
                                <p className="text-red-700">
                                    Các nhóm máu O-, AB-, A- đang ở mức tồn kho thấp
                                </p>
                            </div>
                            <button
                                onClick={handlePrimaryAction}
                                className="ml-auto bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Hiến máu ngay
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {urgentBloodTypes.map((blood, index) => (
                                <div key={index} className="bg-white p-3 rounded border">
                                    <div className="flex items-center">
                                        <div className={`w-3 h-3 rounded-full ${blood.color} mr-2`}></div>
                                        <div>
                                            <div className="font-semibold">{blood.type}</div>
                                            <div className="text-sm text-gray-600">{blood.stock}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </WrapperSection>

            {/* How It Works */}
            <WrapperSection className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <GroupedHeading
                        title="Quy trình hiến máu"
                        description="3 bước đơn giản để trở thành người hiến máu"
                    />

                    <ThreeStepProcess steps={processSteps} />
                </div>
            </WrapperSection>

            {/*/!* Blood Stock Search *!/*/}
            {/*<WrapperSection className="py-16 bg-gray-100">*/}
            {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
            {/*        <GroupedHeading*/}
            {/*            title="Tìm kiếm tình trạng máu"*/}
            {/*            description="Kiểm tra tồn kho máu tại các bệnh viện"*/}
            {/*        />*/}

            {/*        <SearchBloodStock />*/}
            {/*    </div>*/}
            {/*</WrapperSection>*/}

            {/* Call to Action Section */}
            <WrapperSection className="py-16 bg-gradient-to-r from-red-600 to-pink-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <TwoCta
                        title="Bạn cần máu hay muốn hiến máu?"
                        subtitle="Chúng tôi kết nối những người cần máu với những người sẵn sàng hiến máu"
                        primaryText="Tôi muốn hiến máu"
                        secondaryText="Tôi cần máu"
                        onPrimaryClick={handlePrimaryAction}
                        onSecondaryClick={handleNeedBlood}
                        theme="dark"
                    />
                </div>
            </WrapperSection>

            {/* Blood Types Information */}
            <WrapperSection className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <GroupedHeading
                        title="Thông tin nhóm máu"
                        description="Tìm hiểu về các nhóm máu và tính tương thích"
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bloodType) => (
                            <div key={bloodType} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                                <div className="text-2xl font-bold text-red-600 mb-2">{bloodType}</div>
                                <div className="text-sm text-gray-600">Nhóm máu {bloodType}</div>
                                <button
                                    onClick={() => navigate(`/blood-types?type=${bloodType}`)}
                                    className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium"
                                >
                                    Xem chi tiết →
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button
                            onClick={() => navigate('/blood-types')}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Xem tất cả thông tin nhóm máu
                        </button>
                    </div>
                </div>
            </WrapperSection>

            {/* Recent Blog Posts */}
            <WrapperSection className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <GroupedHeading
                        title="Tin tức & Kiến thức"
                        description="Cập nhật thông tin mới nhất về hiến máu"
                    />

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {[
                            {
                                title: "5 Điều Cần Biết Trước Khi Hiến Máu Lần Đầu",
                                excerpt: "Hướng dẫn chi tiết cho người hiến máu lần đầu...",
                                date: "25/05/2024",
                                category: "Hướng dẫn"
                            },
                            {
                                title: "Tầm Quan Trọng Của Máu Hiếm Trong Y Tế",
                                excerpt: "Tìm hiểu về các nhóm máu hiếm và vai trò của chúng...",
                                date: "22/05/2024",
                                category: "Y học"
                            },
                            {
                                title: "Lịch Sự Kiện Hiến Máu Tháng 6",
                                excerpt: "Danh sách các điểm hiến máu lưu động trong tháng...",
                                date: "20/05/2024",
                                category: "Sự kiện"
                            }
                        ].map((blog, index) => (
                            <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                <div className="h-48 bg-gray-200"></div>
                                <div className="p-6">
                                    <div className="text-sm text-blue-600 font-medium mb-2">{blog.category}</div>
                                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{blog.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                                    <div className="flex justify-between items-center text-sm text-gray-500">
                                        <span>{blog.date}</span>
                                        <button
                                            onClick={() => navigate('/blogs')}
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            Đọc thêm →
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button
                            onClick={() => navigate('/blogs')}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Xem tất cả bài viết
                        </button>
                    </div>
                </div>
            </WrapperSection>

            {/* Contact Section */}
            <ContactDetails />

        </div>
    );
};

export default Home;