export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const ServiceType = [
  { id: "consult", name: "서비스 도입" },
  { id: "usage", name: "서비스 이용" },
]

export const FaqCategory = {
  consult: [
    {
      "categoryId": "PRODUCT",
      "name": "서비스 상품"
    },
    {
      "categoryId": "COUNSELING",
      "name": "도입 상담"
    },
    {
      "categoryId": "CONTRACT",
      "name": "계약"
    }
  ],
  usage: [
    {
      "categoryId": "SIGN_UP",
      "name": "가입문의"
    },
    {
      "categoryId": "BUSINESS",
      "name": "비즈니스(업무용)"
    },
    {
      "categoryId": "ACCIDENT",
      "name": "사고/보험"
    },
    {
      "categoryId": "RESERVATION",
      "name": "예약/결제"
    },
    {
      "categoryId": "VEHICLE",
      "name": "차량문의"
    },
    {
      "categoryId": "REFUEL",
      "name": "충전"
    },
    {
      "categoryId": "COUPON",
      "name": "쿠폰/기타"
    }
  ]
}

export const faqData: FAQ[] = [
  {
    id: '1',
    category: 'general',
    question: 'KIA Biz 서비스는 어떤 서비스인가요?',
    answer: 'KIA Biz는 기아의 비즈니스 솔루션 서비스입니다. 기업 고객을 위한 맞춤형 모빌리티 서비스를 제공하며, 차량 관리부터 운영까지 통합 솔루션을 제공합니다.'
  },
  {
    id: '2',
    category: 'service',
    question: '서비스 이용 신청은 어떻게 하나요?',
    answer: '서비스 이용 신청은 홈페이지 상단의 \"상담문의\" 메뉴를 통해 가능합니다. 상담 신청 후 담당자가 순차적으로 연락드립니다.'
  },
  {
    id: '3',
    category: 'payment',
    question: '서비스 요금은 어떻게 되나요?',
    answer: '서비스 요금은 이용하시는 서비스 종류와 규모에 따라 다르게 책정됩니다. 자세한 요금 안내는 상담문의를 통해 확인하실 수 있습니다.'
  },
  {
    id: '4',
    category: 'technical',
    question: '기술적인 문제가 발생했을 때 어떻게 해야 하나요?',
    answer: '기술 지원이 필요하신 경우 고객센터(1234-5678)로 연락주시거나, 홈페이지 내 상담문의를 통해 문의해 주시면 신속하게 도움을 드리도록 하겠습니다.'
  },
  {
    id: '5',
    category: 'general',
    question: '서비스 이용 가능 지역은 어디인가요?',
    answer: '현재 전국 주요 도시에서 서비스 이용이 가능합니다. 구체적인 서비스 가능 지역은 상담 시 안내해 드립니다.'
  }
];
