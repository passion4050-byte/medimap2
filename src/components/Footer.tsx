import { Mail, ChevronRight } from 'lucide-react';
import medimapLogo from 'figma:asset/a6c80232d4df17f8ab5946119c49d275a8471d33.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 lg:pt-24 pb-24 lg:pb-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 pb-12 lg:pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={medimapLogo} 
                alt="MEDIMAP" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed" style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7 }}>
              <strong style={{ fontWeight: 700 }}>제휴 파트너</strong>를 위한<br className="sm:hidden" /> <strong style={{ fontWeight: 700 }}>프리미엄 메디컬 케어</strong>,<br />
              MEDIMAP에서 <strong style={{ fontWeight: 700 }}>건강한 변화</strong>를 시작하세요.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6" style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.5px' }}>
              빠른 메뉴
            </h3>
            <ul className="space-y-4">
              {[
                { label: '안과', href: '#ophthalmology' },
                { label: '피부과', href: '#dermatology' },
                { label: '모발이식', href: '#hair' },
                { label: '의료진 소개', href: '#doctors' },
                { label: '상담 신청', href: 'https://pf.kakao.com/_xnWQkG/chat', external: true }
              ].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-white/70 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white mb-6" style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '0.5px' }}>
              연락처
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white/50 mb-1" style={{ fontSize: '12px', fontWeight: 500 }}>고객 문의</p>
                  <a href="mailto:cs@medimap.team" className="text-white hover:text-blue-400 transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
                    cs@medimap.team
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white/50 mb-1" style={{ fontSize: '12px', fontWeight: 500 }}>제휴 문의</p>
                  <a href="mailto:sales@medimap.team" className="text-white hover:text-blue-400 transition-colors" style={{ fontSize: '16px', fontWeight: 600 }}>
                    sales@medimap.team
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 lg:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Business Info */}
            <div className="text-white/50 space-y-2" style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.6 }}>
              <p><strong className="text-white/70">메디맵 주식회사</strong></p>
              <p>대표자: 박성호</p>
              <p>사업자등록번호: 833-87-02831</p>
              <p>주소: 서울특별시 강남구 봉은사로 215(논현동) KTS빌딩 11층</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 lg:justify-end">
              <a href="#" className="text-white/50 hover:text-white transition-colors" style={{ fontSize: '13px', fontWeight: 500 }}>
                서비스 이용 약관
              </a>
              <span className="text-white/30">|</span>
              <a href="#" className="text-white/50 hover:text-white transition-colors" style={{ fontSize: '13px', fontWeight: 500 }}>
                개인정보 처리 방침
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-white/40 text-center" style={{ fontSize: '13px', fontWeight: 400 }}>
              © 2024 MEDIMAP. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </footer>
  );
}
