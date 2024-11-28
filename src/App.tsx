import { BusinessCard3D } from './components/BusinessCard3D'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8 p-4">
      {/* Light theme card with auto-rotate */}
      <BusinessCard3D
        name="山田 太郎"
        title="シニアエンジニア"
        company="テクノロジー株式会社"
        department="開発部"
        email="taro.yamada@example.com"
        phone="03-1234-5678"
        address="〒100-0001 東京都千代田区千代田1-1"
        website="www.example.com"
        logo="/company-logo.svg"
        theme="light"
        config={{
          autoRotateSpeed: 0.5,
          rotationSensitivity: 1,
        }}
      />

      {/* Dark theme card with enhanced swipe sensitivity */}
      <BusinessCard3D
        name="鈴木 花子"
        title="プロダクトマネージャー"
        company="イノベーション株式会社"
        department="製品開発部"
        email="hanako.suzuki@example.com"
        phone="03-9876-5432"
        address="〒150-0002 東京都渋谷区渋谷2-2"
        website="www.innovation-example.com"
        logo="/innovation-logo.svg"
        theme="dark"
        config={{
          rotationSensitivity: 2,
          maxRotation: 150,
          dampingFactor: 0.9,
        }}
      />
    </div>
  )
}

export default App
