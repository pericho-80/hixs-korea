import React, { useState } from 'react';

const productData = {
  gripbank: {
    name: 'Gripbank 10,000mAh',
    subtitle: '手のひらサイズで大容量',
    description: 'キーリング付きで持ち運びが簡単なコンパクトモバイルバッテリー',
    features: [
      { icon: '⚡', text: 'わずか172g、手のひらサイズ' },
      { icon: '🔌', text: '22.5W急速充電対応（PD 3.0、QC 4+）' },
      { icon: '🔗', text: 'キーリング付きでバッグに簡単装着' },
      { icon: '✈️', text: '機内持ち込み可能（Wh表記あり）' }
    ],
    videoUrl: 'https://youtube.com/shorts/IUOpI728kdQ'
  },
  tourisme: {
    name: 'Tourisme 20,000mAh',
    subtitle: '大容量で旅行に最適',
    description: 'キャリーケースデザインの大容量バッテリー',
    features: [
      { icon: '🔋', text: '大容量20,000mAh' },
      { icon: '📊', text: 'LCD残量表示で一目で確認' },
      { icon: '⚡', text: 'PPS/PD/QC急速充電対応' },
      { icon: '✈️', text: '機内持ち込み可能' }
    ],
    videoUrl: 'https://youtube.com/shorts/sLdzGnYLeA4'
  }
};

const commonFeatures = [
  { icon: '🛡️', title: 'KC認証 & 安全保証', desc: '難燃素材使用、製造物責任保険1億円加入' },
  { icon: '✈️', title: '機内持ち込み可能', desc: 'Wh表記あり、旅行に最適' },
  { icon: '⚡', title: '急速充電対応', desc: '最新の充電規格をサポート' },
  { icon: '🏆', title: '信頼のブランド', desc: 'カカオ選物1位獲得' }
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('gripbank');

  return (
    <div style={{ minHeight: '100vh', background: '#111827', color: 'white' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #111827)', 
        padding: '40px 8px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ 
              fontSize: '30px', 
              fontWeight: 'bold',
              fontFamily: 'cursive',
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              StyleSeller
            </div>
          </div>
          <div style={{ fontSize: '30px', color: '#9ca3af', margin: '16px 0' }}>×</div>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
            HIXS KOREA
          </h1>
          <p style={{ fontSize: '24px', color: '#d1d5db', marginBottom: '8px' }}>
            モバイルバッテリー モニター募集
          </p>
          <p style={{ fontSize: '18px', color: '#9ca3af' }}>
            韓国で人気No.1のモバイルバッテリーブランド
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '8px' }}>
        {/* Monitor Program Introduction */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ 
            maxWidth: '768px', 
            margin: '24px auto',
            background: 'rgba(31, 41, 55, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            padding: '24px 12px',
            textAlign: 'center',
            border: '2px solid rgba(96, 165, 250, 0.3)'
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#60a5fa' }}>
              モニタープログラムのご案内
            </h2>
            <p style={{ fontSize: '16px', color: '#d1d5db', marginBottom: '8px' }}>
              StyleSellerでは、
            </p>
            <p style={{ fontSize: '16px', color: '#d1d5db', marginBottom: '8px' }}>
              品質の高い製品を実際に体験いただける
            </p>
            <p style={{ fontSize: '16px', color: '#d1d5db', marginBottom: '16px' }}>
              モニター様を募集しております。
            </p>
            <p style={{ fontSize: '14px', color: '#9ca3af' }}>
              ご興味のある方は、以下の製品ラインナップをご覧ください。
            </p>
          </div>
        </div>

        <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>
          製品ラインナップ
        </h2>
        
        {/* Product Selection */}
        <div style={{ marginBottom: '24px' }}>
          {Object.entries(productData).map(([key, product]) => (
            <div key={key} style={{ marginBottom: '16px' }}>
              <div
                onClick={() => setSelectedProduct(selectedProduct === key ? '' : key)}
                style={{
                  padding: '20px',
                  borderRadius: '16px',
                  background: selectedProduct === key 
                    ? 'linear-gradient(to bottom right, #475569, #64748b)'
                    : '#1f2937',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  border: selectedProduct === key ? '2px solid #60a5fa' : '2px solid transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '8px' }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '16px', marginBottom: '4px' }}>{product.subtitle}</p>
                    <p style={{ fontSize: '14px', color: '#d1d5db' }}>{product.description}</p>
                  </div>
                  <span style={{ 
                    fontSize: '24px', 
                    transform: selectedProduct === key ? 'rotate(90deg)' : 'rotate(0)', 
                    transition: 'transform 0.3s' 
                  }}>
                    ›
                  </span>
                </div>
              </div>
              
              {/* Product Details - 바로 아래 표시 */}
              {selectedProduct === key && (
                <div style={{ 
                  marginTop: '12px',
                  background: 'linear-gradient(to bottom right, #334155, #475569)',
                  borderRadius: '16px',
                  padding: '20px 16px',
                  animation: 'slideDown 0.3s ease-out'
                }}>
                  <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>特徴</h4>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {product.features.map((feature, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        padding: '12px'
                      }}>
                        <span style={{ fontSize: '24px' }}>{feature.icon}</span>
                        <p style={{ fontSize: '15px' }}>{feature.text}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* 유튜브 영상 썸네일 */}
                  <div style={{ marginTop: '20px' }}>
                    <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px', textAlign: 'center' }}>
                      📹 使用レビュー動画
                    </p>
                    <a
                      href={product.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        position: 'relative',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                      }}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${product.videoUrl.split('/').pop()}/maxresdefault.jpg`}
                        alt={`${product.name} 使用レビュー`}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          aspectRatio: '16/9'
                        }}
                      />
                      {/* 재생 버튼 오버레이 */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0, 0, 0, 0.3)',
                        transition: 'background 0.3s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)'}
                      onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)'}
                      >
                        <div style={{
                          width: '70px',
                          height: '70px',
                          background: 'rgba(220, 38, 38, 0.95)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.3s',
                          transform: 'scale(1)'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          <svg style={{ width: '35px', height: '35px', marginLeft: '4px' }} viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Common Features */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>
            共通の特徴
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            {commonFeatures.map((feature, idx) => (
              <div key={idx} style={{ 
                background: '#1f2937',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                transition: 'background 0.3s'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feature.icon}</div>
                <h4 style={{ fontWeight: 'bold', marginBottom: '8px' }}>{feature.title}</h4>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Monitor Conditions */}
        <div style={{ 
          background: 'linear-gradient(to bottom right, #059669, #10b981)',
          borderRadius: '20px',
          padding: '20px 12px',
          marginBottom: '24px'
        }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>
            モニター条件
          </h2>
          <div style={{ maxWidth: '768px', margin: '0 auto' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '24px', flexShrink: 0, color: '#fef08a', display: 'block', paddingTop: '2px' }}>✓</span>
                <div style={{ margin: 0 }}>
                  <p style={{ fontSize: '18px', margin: 0, marginBottom: '4px' }}>製品無償提供（各シリーズから1つずつ、計2個お選びいただけます）</p>
                  <p style={{ fontSize: '13px', color: '#d1fae5', margin: 0 }}>Gripbank と Tourisme から、それぞれお好きなデザインを1つずつ</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '24px', flexShrink: 0, color: '#fef08a', display: 'block', paddingTop: '2px' }}>✓</span>
                <div style={{ margin: 0 }}>
                  <p style={{ fontSize: '18px', marginBottom: '4px', marginTop: 0, letterSpacing: '-1px' }}>Instagram リールで使用レビューを投稿</p>
                  <p style={{ fontSize: '13px', color: '#d1fae5', margin: 0 }}>実際に使用した感想を15〜60秒のリール動画で共有</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ fontSize: '24px', flexShrink: 0, color: '#fef08a', display: 'block', paddingTop: '2px' }}>✓</span>
                <div style={{ margin: 0 }}>
                  <p style={{ fontSize: '18px', margin: 0, marginBottom: '4px' }}>プロフィールに商品リンクを掲載</p>
                  <p style={{ fontSize: '13px', color: '#d1fae5', margin: 0 }}>リンク掲載は1週間</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ 
            background: 'linear-gradient(to right, #2563eb, #9333ea, #2563eb)',
            borderRadius: '20px',
            padding: '24px 12px'
          }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>
              お問い合わせ
            </h2>
            <p style={{ fontSize: '20px', marginBottom: '32px' }}>
              ご興味がございましたら、StyleSeller公式LINEまでお気軽にご連絡ください
            </p>
            <a 
              href="https://lin.ee/jbUjTau"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'white',
                color: '#2563eb',
                padding: '16px 48px',
                borderRadius: '9999px',
                fontSize: '20px',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.target.style.background = '#f3f4f6'}
              onMouseOut={(e) => e.target.style.background = 'white'}
            >
              公式LINEで相談
            </a>
            <p style={{ fontSize: '14px', marginTop: '16px' }}>StyleSeller ペリ</p>
          </div>
        </div>

        {/* App Download Section */}
        <div style={{ 
          background: '#1f2937',
          borderRadius: '20px',
          padding: '24px 12px',
          marginBottom: '24px'
        }}>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>
            StyleSeller 日本公式アプリ
          </h2>
          <p style={{ textAlign: 'center', color: '#9ca3af', marginBottom: '32px' }}>
            アプリで簡単に商品を管理・販売できます
          </p>
          <div style={{ 
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <a 
              href="https://apps.apple.com/kr/app/%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%BB%E3%83%A9%E3%83%BC/id6478187308"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'block',
                textDecoration: 'none',
                marginBottom: '20px',
                transition: 'transform 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ 
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <svg style={{ width: '56px', height: '56px', flexShrink: 0 }} viewBox="0 0 24 24" fill="black">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>iOS</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>App Store</div>
                </div>
              </div>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=jp.styleseller&hl=ko"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'block',
                textDecoration: 'none',
                transition: 'transform 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ 
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <svg style={{ width: '56px', height: '56px', flexShrink: 0 }} viewBox="0 0 24 24" fill="#3DDC84">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>android</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Google Play</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '24px', marginBottom: '12px', color: '#6b7280' }}>
          <p style={{ fontSize: '14px' }}>カカオ選物1位の信頼できるブランド</p>
          <p style={{ fontSize: '12px' }}>KC認証 · 難燃素材 · 製造物責任保険加入済み</p>
        </div>
      </div>
    </div>
  );
}
