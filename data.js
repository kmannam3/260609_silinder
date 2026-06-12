/* ==========================================================
   HYDRAULIC PRECIS — Site Data
   ----------------------------------------------------------
   모든 콘텐츠가 이 파일에 모여 있습니다.
   HTML은 디자인/레이아웃만 담고, 텍스트/리스트는 여기서 읽어갑니다.

   다국어 구조:
     문구 값은 { KR: "...", EN: "...", CN: "..." } 형태입니다.
     현재는 KR만 채워져 있고, EN/CN은 빈 문자열로 placeholder만 둡니다.
     백엔드/Admin 연결 시 이 파일의 키/구조를 그대로 사용하시면 됩니다.

   주요 섹션:
     - meta:        사이트 메타정보 (언어, 기본설정)
     - site:        브랜드, 슬로건, 카피라이트, 소셜
     - company:     회사 정보 (주소, 연락처, 영업시간)
     - nav:         상단 메뉴
     - footer:      푸터 (컬럼, 뉴스레터)
     - i18n:        공통 UI 문구 (버튼명, 라벨 등)
     - products:    제품 카탈로그 (4개)
     - certifications: 인증서 (ISO 3건 / 안전 2건 / 산업별 4건)
     - history:     연혁 (현재 비어있음 — 추후 채우기)
     - pages:       각 페이지의 섹션별 문구
   ========================================================== */

window.siteData = {

  /* ---------- META ---------- */
  meta: {
    defaultLanguage: "KR",
    supportedLanguages: ["KR", "EN", "CN"],
    siteUrl: "https://hydraulic-precis.com",
    siteName: "HYDRAULIC PRECIS"
  },

  /* ---------- SITE (brand / global) ---------- */
  site: {
    brand: "HYDRAULIC PRECIS",
    tagline: {
      KR: "고성능 유압 솔루션과 무결점 시스템으로 산업의 표준을 정립합니다.",
      EN: "Setting the industry standard with high-performance hydraulic solutions and zero-defect systems.",
      CN: "以高性能液压解决方案和零缺陷系统树立行业标准。"
    },
    copyright: "© 2024 Precision Hydraulics Manufacturing Co., Ltd. All Rights Reserved.",
    social: [
      { type: "website", url: "#", label: { KR: "웹사이트", EN: "Website", CN: "网站" } },
      { type: "linkedin", url: "#", label: { KR: "LinkedIn", EN: "LinkedIn", CN: "LinkedIn" } }
    ]
  },

  /* ---------- COMPANY ---------- */
  company: {
    fullName: "Precision Hydraulics Manufacturing Co., Ltd.",
    shortName: "HYDRAULIC PRECIS",
    address: {
      short: { KR: "인천광역시 남동구 가산업단지", EN: "Gasan Industrial Complex, Namdong-gu, Incheon", CN: "仁川广域市南洞区加山工业园区" },
      full:  { KR: "대한민국 인천광역시 남동국가산업단지 프레시스로 123", EN: "", CN: "" },
      mapUrl: "https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EB%8F%99%EA%B5%AC%20%EA%B0%80%EC%82%B0%EC%97%85%EB%8B%A8%EC%A7%80"
    },
    phone: "032-810-5500",
    fax: "",
    email: {
      sales: "sales@hp-precis.com",
      engineering: "engineering@hydraulic-precis.com",
      newsletter: "newsletter@hp-precis.com"
    },
    hours: {
      label:    { KR: "영업 시간",     EN: "", CN: "" },
      statusLabel: { KR: "운영 상태",  EN: "", CN: "" },
      schedule: { KR: "09:00 - 18:00 (KST)", EN: "", CN: "" },
      openLabel:   { KR: "운영 중",    EN: "", CN: "" },
      closedLabel: { KR: "영업 종료",  EN: "", CN: "" }
    },
    region: { KR: "인천 제조 센터", EN: "", CN: "" }
  },

  /* ---------- NAV (top menu) ---------- */
  nav: [
    { id: "home",          label: { KR: "홈",       EN: "Home",          CN: "首页" }, href: "index.html" },
    { id: "products",      label: { KR: "제품소개", EN: "Products",      CN: "产品" }, href: "products.html" },
    { id: "technology",    label: { KR: "핵심기술", EN: "Technology",    CN: "技术" }, href: "technology.html" },
    { id: "certifications",label: { KR: "인증현황", EN: "Certifications",CN: "认证" }, href: "certifications.html" },
    { id: "contact",       label: { KR: "고객문의", EN: "Contact",       CN: "联系" }, href: "contact.html" }
  ],

  /* ---------- FOOTER ---------- */
  footer: {
    columns: [
      {
        title: { KR: "주요 링크", EN: "Quick Links", CN: "主要链接" },
        links: [
          { label: { KR: "개인정보 처리방침", EN: "Privacy Policy", CN: "隐私政策" }, href: "#" },
          { label: { KR: "이용 약관",         EN: "Terms of Use", CN: "使用条款" }, href: "#" },
          { label: { KR: "환경 경영 방침",    EN: "Environmental Policy", CN: "环境管理方针" }, href: "#" },
          { label: { KR: "사이트맵",          EN: "Sitemap", CN: "网站地图" }, href: "#" }
        ]
      },
      {
        title: { KR: "자료실", EN: "Resources", CN: "资料室" },
        links: [
          { label: { KR: "품질 보증 안내",    EN: "Quality Assurance Guide", CN: "质量保证指南" }, href: "#" },
          { label: { KR: "구축 사례 (Case Studies)", EN: "Case Studies", CN: "案例研究" }, href: "products.html" },
          { label: { KR: "파트너 프로그램",   EN: "Partner Program", CN: "合作伙伴计划" }, href: "#" },
          { label: { KR: "기술 문서 센터",    EN: "Technical Document Center", CN: "技术文档中心" }, href: "#" }
        ]
      }
    ],
    newsletter: {
      title:       { KR: "뉴스레터 구독", EN: "Subscribe to Newsletter", CN: "订阅新闻通讯" },
      description: { KR: "최신 기술 백서 소식을 가장 먼저 받아보세요.", EN: "Get the latest technical white paper updates first.", CN: "第一时间获取最新技术白皮书资讯。" },
      placeholder: { KR: "이메일 주소", EN: "Email address", CN: "电子邮箱地址" },
      successMessage: { KR: "구독 신청이 접수되었습니다.", EN: "Your subscription request has been received.", CN: "您的订阅申请已收到。" }
    }
  },

  /* ---------- I18N (공통 UI 문구) ---------- */
  i18n: {
    buttons: {
      productsLearnMore: { KR: "제품 알아보기",     EN: "", CN: "" },
      techSpecs:         { KR: "기술 사양 확인",    EN: "", CN: "" },
      catalogDownload:   { KR: "카탈로그 다운로드", EN: "", CN: "" },
      techInquiry:       { KR: "기술 문의",         EN: "", CN: "" },
      requestData:       { KR: "기술 데이터 요청",  EN: "", CN: "" },
      requestDocs:       { KR: "자료 요청하기",     EN: "", CN: "" },
      downloadQM:        { KR: "품질 매뉴얼 다운로드 (PDF)", EN: "", CN: "" },
      sendInquiry:       { KR: "문의 보내기",       EN: "", CN: "" }
    },
    menuLabel: { KR: "메뉴", EN: "Menu", CN: "菜单" }
  },

  /* ==========================================================
     PRODUCTS — 제품 카탈로그
     ========================================================== */
  products: [
    {
      id: "tie-rod",
      style: "shaft",          // 이미지 영역 클래스
      variant: "light",        // 카드 색상 변형 (light / dark)
      chip: { KR: "표준 시리즈", EN: "Standard Series", CN: "标准系列" },
      name: { KR: "타이로드 실린더", EN: "Tie-Rod Cylinder", CN: "拉杆式液压缸" },
      description: {
        KR: "NFPA 규격을 준수하는 설계로 유지보수가 용이하며, 산업 자동화 분야에서 높은 구조적 안정성을 제공합니다.",
        EN: "Designed to comply with NFPA standards for easy maintenance and high structural stability in industrial automation.", CN: "符合 NFPA 标准的设计，便于维护，并为工业自动化领域提供高结构稳定性。"
      },
      specs: [
        { key: { KR: "보어 사이즈:", EN: "Bore Size:", CN: "缸径尺寸：" }, val: "1.5\" ~ 20\"", icon: "gear" },
        { key: { KR: "최대 압력:",   EN: "Max Pressure:", CN: "最大压力：" }, val: { KR: "최대 3,000 PSI", EN: "Up to 3,000 PSI", CN: "最高 3,000 PSI" }, icon: "clock" }
      ],
      tags: [
        { KR: "일반 제조",   EN: "General Manufacturing", CN: "通用制造" },
        { KR: "자동화 공정", EN: "Automated Processes", CN: "自动化工艺" }
      ]
    },
    {
      id: "welded",
      style: "welded",
      variant: "dark",
      chip: { KR: "헤비 듀티", EN: "Heavy Duty", CN: "重载型" },
      name: { KR: "용접식 실린더", EN: "Welded Cylinder", CN: "焊接式液压缸" },
      description: {
        KR: "극한의 작업 환경과 장시간 사용을 요구하는 건설 기계 및 모바일 장비에 최적화된 컴팩트하고 견고한 설계입니다.",
        EN: "A compact, rugged design optimized for construction machinery and mobile equipment operating in extreme conditions for long duty cycles.", CN: "紧凑且坚固的设计，适用于需要在极端工况下长时间运行的工程机械和移动设备。"
      },
      footerAction: {
        key:   { KR: "주요 적용 분야:",    EN: "Key Applications:", CN: "主要应用领域：" },
        value: { KR: "건설 및 광산 장비",  EN: "Construction and Mining Equipment", CN: "建筑及矿山设备" }
      }
    },
    {
      id: "telescopic",
      style: "telescopic",
      variant: "light",
      chip: null,              // 칩 없는 카드
      name: { KR: "텔레스코픽 실린더", EN: "Telescopic Cylinder", CN: "伸缩式液压缸" },
      description: {
        KR: "제한된 공간에서 최대 스트로크를 구현하는 다단 확장 시스템. 덤프트럭 및 하역 장비에 최적입니다.",
        EN: "A multi-stage extension system that delivers maximum stroke in limited spaces, ideal for dump trucks and unloading equipment.", CN: "多级伸展系统，可在有限空间内实现最大行程，适用于自卸车和装卸设备。"
      },
      stats: [
        { label: { KR: "확장 단계", EN: "Extension Stages", CN: "伸展级数" }, value: { KR: "2 - 5단",    EN: "2 - 5 Stages", CN: "2 - 5 级" } },
        { label: { KR: "허용 하중", EN: "Load Capacity", CN: "允许载荷" }, value: { KR: "최대 50톤",  EN: "Up to 50 tons", CN: "最高 50 吨" } }
      ]
    },
    {
      id: "smart",
      style: "smart",
      variant: "smart-dark",
      chip: { KR: "인더스트리 4.0", EN: "Industry 4.0", CN: "工业 4.0" },
      name: { KR: "스마트 실린더", EN: "Smart Cylinder", CN: "智能液压缸" },
      description: {
        KR: "리니어 트랜스듀서와 압력 센서가 통합되어 실시간 위치 피드백과 예지 보전 기능을 제공합니다.",
        EN: "Integrated linear transducers and pressure sensors provide real-time position feedback and predictive maintenance capabilities.", CN: "集成线性传感器和压力传感器，提供实时位置反馈和预测性维护功能。"
      },
      features: [
        { KR: "IoT 및 PLC 통합 지원",  EN: "IoT and PLC integration support", CN: "支持 IoT 与 PLC 集成" },
        { KR: "±0.1mm 정밀 위치 피드백", EN: "±0.1 mm precision position feedback", CN: "±0.1mm 精密位置反馈" },
        { KR: "디지털 트윈 호환성 확보", EN: "Digital twin compatibility", CN: "支持数字孪生兼容" }
      ],
      cta: { label: { KR: "기술 데이터 요청", EN: "Request Technical Data", CN: "申请技术资料" }, href: "contact.html" }
    }
  ],

  /* 홈페이지 상단 4개 카테고리 타일 (제품 페이지의 product와는 별개) */
  productCategories: [
    {
      id: "construction", style: "t1",
      category: { KR: "건설 분야",   EN: "Construction", CN: "工程建设" },
      name:     { KR: "중장비 굴착기 시리즈", EN: "Heavy Equipment Excavator Series", CN: "重型挖掘机系列" },
      description: { KR: "고압 및 극한의 작업 환경을 견디는 헤비듀티 유압 실린더입니다.", EN: "Heavy-duty hydraulic cylinders built to withstand high pressure and extreme jobsite conditions.", CN: "可承受高压和极端工况的重载液压缸。" },
      imageUrl: "https://res.cloudinary.com/dw5ce5zsh/image/upload/v1781101221/product_excavator_series_wfedqm.png"
    },
    {
      id: "automation", style: "t2",
      category: { KR: "공정 자동화", EN: "Process Automation", CN: "流程自动化" },
      name:     { KR: "오토메이션 로직", EN: "Automation Logic", CN: "自动化逻辑系统" },
      description: { KR: "정밀 반복 제어와 안정적인 생산 흐름을 지원하는 자동화용 유압 솔루션입니다.", EN: "Automation-focused hydraulic solutions that support precise repeat control and stable production flow.", CN: "面向自动化的液压解决方案，支持精密重复控制和稳定生产流程。" },
      imageUrl: "https://res.cloudinary.com/dw5ce5zsh/image/upload/v1781101222/product_automation_logic_moiwr0.png"
    },
    {
      id: "marine", style: "t3",
      category: { KR: "해양 / 플랜트", EN: "Marine / Plant", CN: "海洋 / 工厂" },
      name:     { KR: "코로전 쉴드 내식 시리즈", EN: "Corrosion Shield Series", CN: "防腐蚀保护系列" },
      description: { KR: "염분, 습도, 부식성 환경에서도 장기간 성능을 유지하는 내식 유압 실린더입니다.", EN: "Corrosion-resistant hydraulic cylinders engineered for long-term performance in salt, humidity, and harsh plant environments.", CN: "专为盐雾、潮湿及严苛工厂环境设计，可长期保持性能的耐腐蚀液压缸。" },
      imageUrl: "https://res.cloudinary.com/dw5ce5zsh/image/upload/v1781101221/product_corrosion_shield_u9d4jh.png"
    },
    {
      id: "smart-sensing", style: "t4",
      category: { KR: "스마트 센싱", EN: "Smart Sensing", CN: "智能传感" },
      name:     { KR: "IoT 통합 파워 시스템", EN: "IoT Integrated Power System", CN: "IoT 集成功率系统" },
      description: { KR: "실시간 원격 진단 및 예지 보전을 통해 무중단 가동률을 보장합니다.", EN: "Real-time remote diagnostics and predictive maintenance help sustain uninterrupted uptime.", CN: "通过实时远程诊断和预测性维护，保障持续稳定运行。" },
      imageUrl: "https://res.cloudinary.com/dw5ce5zsh/image/upload/v1781101222/product_iot_pilot_system_kd8kcc.png"
    }
  ],

  /* ==========================================================
     CERTIFICATIONS — 인증서
     ========================================================== */
  certifications: {

    iso: [
      {
        id: "iso-9001",
        title: { KR: "ISO 9001:2015", EN: "", CN: "" },
        description: { KR: "철저한 프로세스 관리를 통해 일관된 제품 품질을 유지하고 고객 만족을 보장하는 품질 경영 시스템 인증입니다.", EN: "", CN: "" },
        footer: { KR: "2026년까지 유효", EN: "", CN: "" }
      },
      {
        id: "iso-3834-2",
        title: { KR: "ISO 3834-2", EN: "", CN: "" },
        description: { KR: "금속 재료의 용융 용접 품질 요구사항으로, 고압 유압 구조용 부품의 무결성을 보장하는 핵심 인증입니다.", EN: "", CN: "" },
        footer: { KR: "용접 품질 우수성", EN: "", CN: "" }
      },
      {
        id: "iso-14001",
        title: { KR: "ISO 14001", EN: "", CN: "" },
        description: { KR: "지속 가능한 제조 환경 구축과 생태계 발자국 감소를 위한 노력을 검증하는 환경 경영 시스템 표준입니다.", EN: "", CN: "" },
        footer: { KR: "친환경 공정 준수", EN: "", CN: "" }
      }
    ],

    safety: [
      {
        id: "ce",
        badge: "CE",
        title: { KR: "CE 적합성 인증", EN: "", CN: "" },
        description: { KR: "유럽 경제 지역(EEA)으로 수출되는 모든 유압 장치가 엄격한 보건, 안전 및 환경 보호 기준을 충족함을 보장합니다.", EN: "", CN: "" }
      },
      {
        id: "kcs",
        badge: "KCs",
        title: { KR: "KCs 자율안전확인신고", EN: "", CN: "" },
        description: { KR: "산업 현장에서 사용되는 기계 및 방호 장치의 구조적 결함이 없음을 증명하고 안전한 작동을 보장하는 한국 국가통합인증입니다.", EN: "", CN: "" }
      }
    ],

    industry: [
      {
        id: "dnv",
        title: { KR: "DNV 선급 인증",   EN: "", CN: "" },
        description: { KR: "해양용 유압 실린더에 대한 형식 승인 획득.", EN: "", CN: "" }
      },
      {
        id: "asme",
        title: { KR: "ASME Section VIII", EN: "", CN: "" },
        description: { KR: "압력용기 설계 및 제작 표준 준수.", EN: "", CN: "" }
      },
      {
        id: "atex",
        title: { KR: "ATEX 방폭 지침",  EN: "", CN: "" },
        description: { KR: "오일 및 가스 장비의 폭발 위험 환경 안전성.", EN: "", CN: "" }
      },
      {
        id: "jis",
        title: { KR: "JIS 산업 표준",   EN: "", CN: "" },
        description: { KR: "일본 공업 규격(JIS) 적합성 준수.", EN: "", CN: "" }
      }
    ]

  },

  /* ==========================================================
     HISTORY — 연혁 (현재 비어있음 — 추후 추가)
     ----------------------------------------------------------
     항목 예시:
       { year: "1994", title: { KR: "...", EN: "" }, description: { KR: "...", EN: "" } }
     ========================================================== */
  history: [],

  /* ==========================================================
     PAGES — 페이지별 콘텐츠
     ========================================================== */
  pages: {

    /* ========== HOME ========== */
    home: {
      hero: {
        title:    { KR: "동력의 정밀함,<br/>움직임의 완벽함", EN: "Precision in Power,<br/>Perfection in Motion", CN: "动力的精密，<br/>运动的完美" },
        subtitle: { KR: "중공업, 해양 플랜트 및 스마트 제조 생태계를 위한 맞춤형 유압 솔루션의 글로벌 리더입니다.", EN: "A global leader in custom hydraulic solutions for heavy industry, offshore plants, and smart manufacturing ecosystems.", CN: "面向重工业、海洋工程和智能制造生态系统的定制液压解决方案全球领导者。" },
        actions: [
          { label: { KR: "제품 알아보기",  EN: "Explore Products", CN: "了解产品" }, href: "products.html",   style: "btn-secondary" },
          { label: { KR: "기술 사양 확인", EN: "View Technical Specs", CN: "查看技术规格" }, href: "technology.html", style: "btn-outline-light" }
        ]
      },
      about: {
        eyebrow: { KR: "ABOUT HYDRAULIC PRECIS", EN: "ABOUT HYDRAULIC PRECIS", CN: "关于 HYDRAULIC PRECIS" },
        title:   { KR: "유체 동력 기술의 미래를 설계합니다", EN: "Engineering the Future of Fluid Power", CN: "设计流体动力技术的未来" },
        body:    { KR: "30년 이상의 제조 전문성을 바탕으로, Hydraulic Precis는 세계 유수의 기간 시설 프로젝트에 핵심이 되는 고성능 실린더를 공급합니다. ISO 인증 품질 관리와 혁신적인 스마트 센싱 기술이 업계 신뢰의 기준이 되고 있습니다.", EN: "With more than 30 years of manufacturing expertise, Hydraulic Precis supplies high-performance cylinders for major infrastructure projects around the world. ISO-certified quality management and innovative smart sensing technology set the benchmark for industry trust.", CN: "凭借 30 多年的制造专业经验，Hydraulic Precis 为全球主要基础设施项目供应高性能油缸。ISO 认证的质量管理和创新的智能传感技术树立了行业信赖标准。" },
        stats: [
          { value: "30+",  label: { KR: "업력 (년)",   EN: "Heritage (Years)", CN: "行业经验（年）" } },
          { value: "500+", label: { KR: "보유 특허",   EN: "Patents Held", CN: "持有专利" } },
          { value: "2K+",  label: { KR: "글로벌 고객", EN: "Global Clients", CN: "全球客户" } }
        ],
        imageUrl: "https://res.cloudinary.com/dw5ce5zsh/image/upload/v1781101221/about_hydraulic_precis_ic3qpm.png"
      },
      productGallery: {
        title:    { KR: "주요 제품군", EN: "Featured Product Lines", CN: "主要产品系列" },
        subtitle: { KR: "산업별 요구사항에 최적화된 전문 엔지니어링 솔루션입니다.", EN: "Specialized engineering solutions optimized for each industry’s requirements.", CN: "针对各行业需求优化的专业工程解决方案。" }
      },
      coreTech: {
        title:    { KR: "핵심 기술 역량", EN: "Core Technology Capabilities", CN: "核心技术能力" },
        subtitle: { KR: "글로벌 산업 리더들이 미래 크리티컬 부품으로 Hydraulic Precis를 선택하는 이유입니다.", EN: "Why global industry leaders choose Hydraulic Precis for future-critical components.", CN: "全球行业领导者选择 Hydraulic Precis 作为未来关键部件合作伙伴的原因。" },
        items: [
          {
            icon: "sun",
            title: { KR: "무결점 품질 관리", EN: "Zero-Defect Quality Control", CN: "零缺陷质量管理" },
            description: { KR: "모든 실린더는 출고 전 압력 변형 다단계 테스트와 초음파 검사를 거칩니다.", EN: "Every cylinder undergoes multi-stage pressure deformation testing and ultrasonic inspection before shipment.", CN: "每支液压缸在出厂前均经过多阶段压力变形测试和超声波检测。" }
          },
          {
            icon: "cube",
            title: { KR: "맞춤형 엔지니어링", EN: "Custom Engineering", CN: "定制化工程设计" },
            description: { KR: "사내 R&D 팀이 특수 어플리케이션을 위한 커스텀 스트로크, 보어 및 마운팅 구성을 설계합니다.", EN: "Our in-house R&D team designs custom strokes, bores, and mounting configurations for specialized applications.", CN: "内部研发团队可针对特殊应用设计定制行程、缸径和安装结构。" }
          },
          {
            icon: "clock",
            title: { KR: "특수 표면 처리", EN: "Specialized Surface Treatment", CN: "特殊表面处理" },
            description: { KR: "독자적인 표면 처리 기술로 해양 환경에서도 1000시간 이상의 염수 분무 내성을 보장합니다.", EN: "Proprietary surface treatment technology delivers more than 1,000 hours of salt-spray resistance in marine environments.", CN: "专有表面处理技术可在海洋环境中提供超过 1000 小时的盐雾耐受能力。" }
          },
          {
            icon: "bolt",
            title: { KR: "신속한 납기 대응", EN: "Rapid Delivery Response", CN: "快速交付响应" },
            description: { KR: "최적화된 린(Lean) 제조 프로세스로 시제품부터 양산까지 업계 최고의 리드 타임을 보장합니다.", EN: "Optimized lean manufacturing processes ensure industry-leading lead times from prototype to mass production.", CN: "优化的精益制造流程确保从样品到量产均具备行业领先的交付周期。" }
          }
        ]
      },
      location: {
        title: { KR: "생산 거점 안내", EN: "Production Hub", CN: "生产基地指南" },
        body:  { KR: "대한민국 최고의 산업 클러스터에 위치한 본사 및 주요 생산 시설을 만나보십시오.", EN: "Explore our headquarters and key production facilities located in one of Korea’s leading industrial clusters.", CN: "了解位于韩国领先产业集群内的总部及主要生产设施。" },
        mapLabel: { KR: "지도 보기", EN: "View map", CN: "查看地图" }
      }
    },

    /* ========== PRODUCTS ========== */
    products: {
      pageTitle: { KR: "제품소개 · HYDRAULIC PRECIS", EN: "Products · HYDRAULIC PRECIS", CN: "产品介绍 · HYDRAULIC PRECIS" },
      hero: {
        title:    { KR: "정밀 엔지니어링.<br/>고성능 솔루션.", EN: "Precision Engineering.<br/>High-Performance Solutions.", CN: "精密工程。<br/>高性能解决方案。" },
        subtitle: { KR: "전 세계 산업 현장에서 극한의 내구성과 미션 크리티컬한 신뢰성을 보장하는 고품질 유압 실린더 라인업을 확인하십시오.", EN: "Explore our premium hydraulic cylinder lineup engineered for extreme durability and mission-critical reliability across industrial sites worldwide.", CN: "探索我们的高品质液压缸产品线，为全球工业现场提供极限耐久性和关键任务级可靠性。" }
      },
      catalogIntro: {
        title: { KR: "유압 시스템 카탈로그", EN: "Hydraulic System Catalog", CN: "液压系统目录" },
        body:  { KR: "심해 탐사부터 중장비 건설 인프라까지, 당사의 컴포넌트는 가장 가혹한 환경에서도 완벽한 성능을 발휘하도록 설계되었습니다.", EN: "From deep-sea exploration to heavy construction infrastructure, our components are engineered to perform flawlessly in the harshest environments.", CN: "从深海勘探到重型工程基础设施，我们的部件专为在最严苛环境中稳定发挥性能而设计。" },
        actions: [
          { label: { KR: "카탈로그 다운로드", EN: "Download Catalog", CN: "下载目录" }, href: "#",            style: "btn-primary" },
          { label: { KR: "기술 문의",         EN: "Technical Inquiry", CN: "技术咨询" }, href: "contact.html", style: "btn-outline"  }
        ]
      },
      features: [
        {
          icon: "shield",
          title: { KR: "ISO 9001:2015", EN: "ISO 9001:2015", CN: "ISO 9001:2015" },
          description: { KR: "인증된 제조 공정과 철저한 품질 관리 시스템을 갖추고 있습니다.", EN: "Certified manufacturing processes and a rigorous quality management system are in place.", CN: "具备认证制造流程和严格的质量管理体系。" }
        },
        {
          icon: "target",
          title: { KR: "제로 톨러런스", EN: "Zero Tolerance", CN: "零公差" },
          description: { KR: "마이크론 단위의 정밀 가공으로 오차 없는 성능을 보장합니다.", EN: "Micron-level precision machining ensures error-free performance.", CN: "微米级精密加工确保无误差性能。" }
        },
        {
          icon: "globe",
          title: { KR: "글로벌 물류", EN: "Global Logistics", CN: "全球物流" },
          description: { KR: "전 세계 주요 항만과 산업 허브로 신속한 배송을 지원합니다.", EN: "Fast delivery is supported to major ports and industrial hubs worldwide.", CN: "支持快速配送至全球主要港口和产业枢纽。" }
        },
        {
          icon: "support",
          title: { KR: "24/7 전문가 지원", EN: "24/7 Expert Support", CN: "24/7 专家支持" },
          description: { KR: "복잡한 설치와 운용을 위한 상시 엔지니어링 상담 서비스를 제공합니다.", EN: "Always-on engineering consulting is available for complex installation and operation needs.", CN: "为复杂安装和运行需求提供全天候工程咨询服务。" }
        }
      ]
    },

    /* ========== TECHNOLOGY ========== */
    technology: {
      pageTitle: { KR: "핵심기술 · HYDRAULIC PRECIS", EN: "Technology · HYDRAULIC PRECIS", CN: "核心技术 · HYDRAULIC PRECIS" },
      hero: {
        eyebrow: { KR: "ENGINEERING EXCELLENCE", EN: "ENGINEERING EXCELLENCE", CN: "工程卓越" },
        title:    { KR: "유압 제어 기술의 미래를 선도하다", EN: "Leading the Future of Hydraulic Control Technology", CN: "引领液压控制技术的未来" },
        subtitle: { KR: "지능형 제조 공정과 엄격한 품질 관리 프로토콜을 통합하여 글로벌 산업 표준을 새롭게 정의합니다.", EN: "We redefine global industrial standards by integrating intelligent manufacturing processes with rigorous quality-control protocols.", CN: "通过融合智能制造工艺与严格的质量管理流程，我们重新定义全球工业标准。" }
      },
      process: {
        title:     { KR: "정밀 제조 공정", EN: "Precision Manufacturing Process", CN: "精密制造工艺" },
        body:      { KR: "본사의 생산 시설은 자동화된 고정밀 용접 및 5축 CNC 가공 센터를 활용하여 모든 부품의 구조적 무결성과 마이크론 단위의 정밀 공차를 보장합니다.", EN: "Our production facilities use automated high-precision welding and 5-axis CNC machining centers to ensure structural integrity and micron-level tolerances for every component.", CN: "我们的生产设施采用自动化高精度焊接和五轴 CNC 加工中心，确保每个部件的结构完整性和微米级精密公差。" },
        cards: [
          {
            id: "welding",
            imageStyle: "welding",
            iconName: "weld",
            title:       { KR: "자동 오비탈 용접", EN: "Automated Orbital Welding", CN: "自动轨道焊接" },
            description: { KR: "클린한 텅스텐 용접 프로토콜을 통해 최대 700bar의 극한 압력 사이클에서도 누설 제로 접합부를 보장합니다.", EN: "Clean tungsten welding protocols ensure leak-free joints even under extreme pressure cycles up to 700 bar.", CN: "洁净钨极焊接流程可在最高 700 bar 的极端压力循环下确保接头零泄漏。" }
          },
          {
            id: "cnc",
            imageStyle: "cnc",
            iconName: "cube",
            title:       { KR: "다축 CNC 정밀 가공", EN: "Multi-Axis CNC Precision Machining", CN: "多轴 CNC 精密加工" },
            description: { KR: "자동 공구 마모 보정 기능을 갖춘 복합 가공기를 통해 배치별 일관된 최상의 정밀도를 유지합니다.", EN: "Integrated machining centers with automatic tool-wear compensation maintain consistent best-in-class precision across every batch.", CN: "配备自动刀具磨损补偿的复合加工设备，可在每个批次中保持一致的高精度。" }
          }
        ]
      },
      quality: {
        eyebrow: { KR: "TOTAL QUALITY MANAGEMENT", EN: "TOTAL QUALITY MANAGEMENT", CN: "全面质量管理" },
        title:   { KR: "무결점 품질 경영 (Zero-Defect)", EN: "Zero-Defect Quality Management", CN: "零缺陷质量管理" },
        items: [
          {
            id: "cmm",
            iconName: "clock",
            title:       { KR: "CMM 정밀 측정", EN: "CMM Precision Measurement", CN: "CMM 精密测量" },
            description: { KR: "항공우주급 3차원 측정기(CMM)를 통해 모든 부품을 마이크론 단위까지 정밀 검증합니다.", EN: "Aerospace-grade coordinate measuring machines verify every component with micron-level precision.", CN: "航空航天级三坐标测量机对每个部件进行微米级精密验证。" },
            bullets: [
              { KR: "3D 표면 매핑",      EN: "3D surface mapping", CN: "3D 表面映射" },
              { KR: "형상 정합도 측정",  EN: "Geometric conformity measurement", CN: "几何符合度测量" }
            ]
          },
          {
            id: "endurance",
            iconName: "plus",
            title:       { KR: "유압 내구 시험", EN: "Hydraulic Endurance Testing", CN: "液压耐久测试" },
            description: { KR: "모든 실린더는 양품 압력의 1.5배까지 정적 및 동적 테스트를 100회 이상 실시합니다.", EN: "Every cylinder undergoes more than 100 static and dynamic tests at up to 1.5 times the qualified pressure.", CN: "每支液压缸均在合格压力 1.5 倍以内进行 100 次以上静态和动态测试。" },
            bullets: [
              { KR: "유압 압력 사이클 테스트", EN: "Hydraulic pressure cycle testing", CN: "液压压力循环测试" },
              { KR: "세부 데이터 로깅",       EN: "Detailed data logging", CN: "详细数据记录" }
            ]
          },
          {
            id: "tracking",
            iconName: "grid",
            title:       { KR: "스마트 추적 시스템", EN: "Smart Traceability System", CN: "智能追溯系统" },
            description: { KR: "레이저 마킹 QR 코드를 통해 개별 유닛별로 전체 생애 주기 데이터와 보증 및 추적성을 확보합니다.", EN: "Laser-marked QR codes secure full lifecycle data, warranty history, and traceability for each individual unit.", CN: "通过激光标刻二维码，为每个单元保留完整生命周期数据、保修信息和可追溯性。" },
            bullets: [
              { KR: "소재 이력 관리",       EN: "Material history management", CN: "材料履历管理" },
              { KR: "프로덕션 실행 체계",   EN: "Production execution system", CN: "生产执行体系" }
            ]
          }
        ]
      },
      innovation: {
        eyebrow: { KR: "INNOVATION HUB", EN: "INNOVATION HUB", CN: "创新中心" },
        title:   { KR: "유체 지능 기술의 고도화", EN: "Advancing Fluid Intelligence Technology", CN: "推进流体智能技术" },
        callout: {
          number: "15%",
          label: { KR: "유압 작동유의 에너지 효율 개선율", EN: "Energy-efficiency improvement in hydraulic fluid operation", CN: "液压油运行能效提升率" }
        },
        items: [
          {
            iconName: "eye",
            title:       { KR: "CFD 전산 유체 역학 시뮬레이션", EN: "CFD Computational Fluid Dynamics Simulation", CN: "CFD 计算流体动力学仿真" },
            description: { KR: "포트 설계 최적화를 통해 난류를 억제하고 에너지 손실을 최소화하는 CFD 분석 기법을 적용합니다.", EN: "CFD analysis optimizes port design to suppress turbulence and minimize energy loss.", CN: "通过 CFD 分析优化油口设计，抑制湍流并最大限度降低能量损失。" }
          },
          {
            iconName: "cube",
            title:       { KR: "스마트 실린더 R&D", EN: "Smart Cylinder R&D", CN: "智能液压缸研发" },
            description: { KR: "IoT 통합 센서를 개발하여 스트로크 위치, 압력, 예지 보전 알림을 실시간으로 제공합니다.", EN: "IoT-integrated sensors provide real-time stroke position, pressure, and predictive-maintenance alerts.", CN: "集成 IoT 的传感器可实时提供行程位置、压力和预测性维护提醒。" }
          },
          {
            iconName: "gear",
            title:       { KR: "트라이볼로지(윤활공학) 연구", EN: "Tribology Research", CN: "摩擦学（润滑工程）研究" },
            description: { KR: "씰(Seal) 수명 연장 및 마찰 계수 절감을 위한 첨단 코팅 및 소재 과학 연구를 지속하고 있습니다.", EN: "Advanced coatings and materials research continue to extend seal life and reduce friction coefficients.", CN: "持续开展先进涂层和材料科学研究，以延长密封件寿命并降低摩擦系数。" }
          }
        ]
      },
      matrix: {
        title:    { KR: "기술 사양 매트릭스", EN: "Technical Specification Matrix", CN: "技术规格矩阵" },
        subtitle: { KR: "표준 제조 역량 및 기술 한계치 수치", EN: "Standard manufacturing capabilities and technical limit values", CN: "标准制造能力及技术极限数值" },
        headers: [
          { KR: "항목",     EN: "Item", CN: "项目" },
          { KR: "가공 범위", EN: "Machining Range", CN: "加工范围" },
          { KR: "정밀 공차", EN: "Precision Tolerance", CN: "精密公差" },
          { KR: "적용 표준", EN: "Applicable Standard", CN: "适用标准" }
        ],
        rows: [
          {
            item:      { KR: "실린더 내경 (Bore)",     EN: "Cylinder Bore", CN: "液压缸内径" },
            range:     { KR: "40mm - 1200mm",           EN: "40 mm - 1200 mm", CN: "40mm - 1200mm" },
            precision: { KR: "H8 - H9",                 EN: "H8 - H9", CN: "H8 - H9" },
            standard:  { KR: "ISO 3320",                EN: "ISO 3320", CN: "ISO 3320" }
          },
          {
            item:      { KR: "최대 행정 (Stroke)",      EN: "Maximum Stroke", CN: "最大行程" },
            range:     { KR: "최대 15,000mm",            EN: "Up to 15,000 mm", CN: "最高 15,000mm" },
            precision: { KR: "±0.5mm / 1000mm",         EN: "±0.5 mm / 1000 mm", CN: "±0.5mm / 1000mm" },
            standard:  { KR: "DIN 24333",               EN: "DIN 24333", CN: "DIN 24333" }
          },
          {
            item:      { KR: "상용 압력 (Working Pressure)", EN: "Working Pressure", CN: "工作压力" },
            range:     { KR: "표준 250 · 맞춤형 700 bar", EN: "Standard 250 · Custom 700 bar", CN: "标准 250 · 定制 700 bar" },
            precision: { KR: "+5 bar",                   EN: "+5 bar", CN: "+5 bar" },
            standard:  { KR: "ASME BPVC",                EN: "ASME BPVC", CN: "ASME BPVC" }
          },
          {
            item:      { KR: "표면 거칠기 (Surface Finish)", EN: "Surface Finish", CN: "表面粗糙度" },
            range:     { KR: "Ra 0.1 - Ra 0.4 μm",        EN: "Ra 0.1 - Ra 0.4 μm", CN: "Ra 0.1 - Ra 0.4 μm" },
            precision: { KR: "Max Ra 0.4",                EN: "Max Ra 0.4", CN: "最大 Ra 0.4" },
            standard:  { KR: "ISO 4287",                  EN: "ISO 4287", CN: "ISO 4287" }
          }
        ]
      }
    },

    /* ========== CERTIFICATIONS ========== */
    certifications: {
      hero: {
        eyebrow:  { KR: "품질 경영에 대한 약속", EN: "", CN: "" },
        title:    { KR: "글로벌 기준의 정밀 공학 우수성", EN: "", CN: "" },
        subtitle: { KR: "우리의 제조 공정은 국제 공인 기관의 검증을 통해 모든 부품의 신뢰성과 안전성을 보장하며, 엄격한 엔지니어링 표준을 준수합니다.", EN: "", CN: "" }
      },
      sections: {
        iso:      { heading: { KR: "경영 시스템 인증",   EN: "", CN: "" }, sublabel: { KR: "ISO 표준",          EN: "", CN: "" } },
        safety:   { heading: { KR: "안전 및 규제 준수",  EN: "", CN: "" }, sublabel: { KR: "글로벌 인증 마크",   EN: "", CN: "" } },
        industry: { heading: { KR: "산업별 특화 승인",   EN: "", CN: "" }, sublabel: { KR: "특수 분야 전문 인증", EN: "", CN: "" } }
      },
      cta: {
        title: { KR: "전체 인증 서류가 필요하십니까?", EN: "", CN: "" },
        body:  { KR: "등록된 고객께서는 기술 데이터 시트, 시험 성적서 및 공식 인증서 사본이 포함된 데이터 센터를 이용하실 수 있습니다.", EN: "", CN: "" },
        actions: [
          { label: { KR: "자료 요청하기",                EN: "", CN: "" }, href: "contact.html", style: "btn-primary" },
          { label: { KR: "품질 매뉴얼 다운로드 (PDF)",   EN: "", CN: "" }, href: "#",            style: "btn-outline" }
        ]
      }
    },

    /* ========== CONTACT ========== */
    contact: {
      intro: {
        eyebrow:  { KR: "고객지원", EN: "", CN: "" },
        title:    { KR: "글로벌 엔지니어링 지원 및 기술 문의", EN: "", CN: "" },
        subtitle: { KR: "전문 유압 엔지니어링 팀이 기술 상담, 제품 사양 확인 및 커스텀 제조 요구 사항에 대해 상세히 안내해 드립니다.", EN: "", CN: "" }
      },
      form: {
        title: { KR: "온라인 문의 신청", EN: "", CN: "" },
        fields: {
          name:     { label: { KR: "성함",       EN: "", CN: "" }, placeholder: { KR: "홍길동", EN: "", CN: "" }, required: true },
          company:  { label: { KR: "업체명",     EN: "", CN: "" }, placeholder: { KR: "주식회사 프레시스", EN: "", CN: "" }, required: false },
          email:    { label: { KR: "이메일 주소", EN: "", CN: "" }, placeholder: { KR: "contact@precision.com", EN: "", CN: "" }, required: true },
          message:  { label: { KR: "문의 내용",  EN: "", CN: "" }, placeholder: { KR: "기술적 요구 사항이나 상세 문의 내용을 입력해 주세요.", EN: "", CN: "" }, required: true }
        },
        consent: { KR: "문의 처리를 위한 개인정보 수집 및 이용에 동의합니다.", EN: "", CN: "" },
        consentLink: { label: { KR: "개인정보처리방침", EN: "", CN: "" }, href: "#" },
        submit: { KR: "문의 보내기", EN: "", CN: "" },
        successMessage: { KR: "문의가 성공적으로 접수되었습니다. 24시간 이내에 답변 드리겠습니다.", EN: "", CN: "" }
      },
      hqCard: {
        title: { KR: "본사 위치", EN: "", CN: "" },
        rows: [
          { iconName: "pin",   label: { KR: "주소",     EN: "", CN: "" }, valueKey: "company.address.full" },
          { iconName: "phone", label: { KR: "대표번호", EN: "", CN: "" }, valueKey: "company.phone" },
          { iconName: "mail",  label: { KR: "이메일",   EN: "", CN: "" }, valueKey: "company.email.engineering" }
        ]
      },
      tiles: [
        { iconName: "doc",  label: { KR: "브로슈어 다운로드", EN: "", CN: "" }, href: "#" },
        { iconName: "user", label: { KR: "기술 사양서",       EN: "", CN: "" }, href: "#" }
      ]
    }
  }
};
