import { FAQInquiryItem, FAQProcessItem } from '@/type'

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

export const FAQInquiry: FAQInquiryItem[] = [
  {
    id: 'download',
    title: '서비스 제안서 다운로드',
    icon: '/img/ic_download.svg',
    link: '/기아 비즈 서비스 제안서.pdf',
  },
  {
    id: 'request',
    title: '상담문의 등록하기',
    icon: '/img/ic_write.svg',
    link: 'https://wiblebiz.kia.com/Counsel',
  },
  {
    id: 'kakao',
    title: '카톡으로 문의하기',
    subTitle: "ID: 기아 비즈",
    icon: '/img/ic_talk.svg',
    link: 'https://pf.kakao.com/_xfLxjdb',
  },
]

export const FAQProcessItems: FAQProcessItem[] = [
  {
    id: 1,
    title: "문의 등록",
    desc: "상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.",
    icon: "/img/ic_process01.svg",
  },
  {
    id: 2,
    title: "관리자 등록",
    desc: "관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.",
    icon: "/img/ic_process02.svg",
  },
  {
    id: 3,
    title: "임직원 가입",
    desc: "이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.",
    icon: "/img/ic_process03.svg",
  },
  {
    id: 4,
    title: "서비스 이용",
    desc: "이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!",
    icon: "/img/ic_process04.svg",
  }
]
