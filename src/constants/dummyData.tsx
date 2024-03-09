import {
  ChevSvg,
  ClassSvg,
  ClassSvg1,
  ClassSvg2,
  Course1,
  Course2,
  CourseSvg1,
  CourseSvg2,
  CourseSvg3,
  CourseSvg4,
  GreenTick,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  LectureDetail,
  MaterialSvg1,
  MaterialSvg2,
  MaterialSvg3,
  MaterialSvg4,
  NotificationImg1,
  NotificationImg2,
  NotificationImg3,
  Person1,
  Person2,
  Result1,
  Result2,
  ResultPer1,
  ResultPer2,
  SessionImg1,
  SessionImg2,
  SessionImg3,
  SessionImg4,
  ShortName1,
  ShortName2,
  WhiteTick,
  avatar1,
  avatar2,
  avatar3,
} from '@Asset/logo';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import {Colors} from '@Theme/Colors';

export const basicList = [
  {
    id: 0,
    label: 'Course',
  },
  {
    id: 1,
    label: 'Class',
  },
  {
    id: 2,
    label: 'Result',
  },
  {
    id: 3,
    label: 'Lorem',
  },
  {
    id: 4,
    label: 'Lorem',
  },
];

export const DUMMY_LIST_FOR_SKELETON = [0, 0];

export const CourseList = [
  {
    id: 0,
    courseName: 'First Class',
    courseImg: <Course1 />,
    teacherIcon: <ShortName1 />,
    teacherName: 'Shehzad',
    noOfLectures: '24 Lectures',
    classesHeading: 'CAF 1 FAR 1 Financial Accounting & Reportin...',
  },
  {
    id: 1,
    courseName: 'First Class',
    courseImg: <ClassSvg2 />,
    teacherIcon: <ShortName1 />,
    teacherName: 'Shehzad',
    noOfLectures: '24 Lectures',
    classesHeading: 'CAF 1 FAR 1 Financial Accounting & Reportin...',
  },
  {
    id: 2,
    courseName: 'First Class',
    courseImg: <Course1 />,
    teacherIcon: <ShortName1 />,
    teacherName: 'Shehzad',
    noOfLectures: '24 Lectures',
    classesHeading: 'CAF 1 FAR 1 Financial Accounting & Reportin...',
  },
  {
    id: 3,
    courseName: 'First Class',
    courseImg: <ClassSvg2 />,
    teacherIcon: <ShortName1 />,
    teacherName: 'Shehzad',
    noOfLectures: '24 Lectures',
    classesHeading: 'CAF 1 FAR 1 Financial Accounting & Reportin...',
  },
];

export const ClassList = [
  {
    id: 0,
    courseName: 'First Class',
    courseImg: <ClassSvg1 />,
    teacherIcon: <ShortName1 />,
    teacherName: 'Shehzad',
    noOfLectures: '24 Lectures',
    classesHeading: 'CAF 1 FAR 1 Financial Accounting & Reportin...',
  },
  {
    id: 1,
    courseName: 'Second Class',
    courseImg: <ClassSvg2 />,
    teacherIcon: <ShortName2 />,
    teacherName: 'Ahmed',
    noOfLectures: '28 Lectures',
    classesHeading: 'CAF Programming Lectures',
  },
  {
    id: 2,
    courseName: 'Third Class',
    courseImg: <ClassSvg1 />,
    teacherIcon: <ShortName1 />,
    teacherName: 'Shehzad',
    noOfLectures: '24 Lectures',
    classesHeading: 'CAF 1 FAR 1 Financial Accounting & Reportin...',
  },
  {
    id: 3,
    courseName: 'Fourth Class',
    courseImg: <ClassSvg2 />,
    teacherIcon: <ShortName2 />,
    teacherName: 'Ahmed',
    noOfLectures: '28 Lectures',
    classesHeading: 'CAF Programming Lectures',
  },
];

export const settingList = [
  {
    id: 0,
    icon: <Icon1 />,
    label: 'Personal Information',
    action: () => {
      navigate(NavigationRoutes.APP_STACK.PERSONAL_INFORMATION);
    },
  },
  {
    id: 2,
    icon: <Icon2 />,
    label: 'Devices',
    action: () => {
      navigate(NavigationRoutes.APP_STACK.SESSIONS);
    },
  },
  // {
  //   id: 3,
  //   icon: <Icon3 />,
  //   label: 'Payments',
  //   action: () => {
  //     navigate(NavigationRoutes.APP_STACK.ANNOUNCEMENT);
  //   },
  // },
  {
    id: 4,
    icon: <Icon4 />,
    label: 'Notifications',
    action: () => {
      navigate(NavigationRoutes.APP_STACK.NOTIFICATION);
    },
  },
];

export const supportList = [
  {
    id: 5,
    icon: <Icon5 />,
    label: 'Report an Issue',
    action: () => {
      navigate(NavigationRoutes.APP_STACK.REPORT_ISSUE);
    },
  },
  {
    id: 6,
    icon: <Icon6 />,
    label: 'FAQs',
    action: () => {
      navigate(NavigationRoutes.APP_STACK.WEB_VIEW, {
        webviewUrl: 'https://lms.evolv-systems.com/faq',
      });
    },
  },
];

export const CourseData = [
  {
    id: 0,
    courseName: 'UI/UX Designer Course For Absolute Begginer....',
    courseImg: <CourseSvg1 />,
    img: avatar1,
    noOfChapters: '24 Chapters',
    action: () => {
      navigate(NavigationRoutes.APP_STACK.COURSE_DETAIL);
    },
  },
  {
    id: 1,
    courseName: 'CAF Programming Lectures',
    courseImg: <CourseSvg2 />,
    img: avatar1,
    noOfChapters: '24 Chapters',
    action: () => {
      navigate(NavigationRoutes.APP_STACK.COURSE_DETAIL);
    },
  },
  {
    id: 2,
    courseName: 'CAF 1 FAR 1 Financial Accounting & Reportin...',
    courseImg: <CourseSvg3 />,
    img: avatar1,
    noOfChapters: '24 Chapters',
    action: () => {
      navigate(NavigationRoutes.APP_STACK.COURSE_DETAIL);
    },
  },
];

export const MaterialList = [
  {
    id: 0,
    icon: <MaterialSvg1 />,
    label: 'Messages',
    optionalText: '1 Items',
    chevron: <ChevSvg />,
  },
  {
    id: 1,
    icon: <MaterialSvg2 />,
    label: 'Lectures',
    optionalText: '5 Items',
    chevron: <ChevSvg />,
    action: () => {
      navigate(NavigationRoutes.APP_STACK.LECTURE);
    },
  },
  {
    id: 2,
    icon: <MaterialSvg3 />,
    label: 'Classes',
    optionalText: '7 Items',
    chevron: <ChevSvg />,
    action: () => {
      navigate(NavigationRoutes.APP_STACK.CLASS);
    },
  },
  {
    id: 4,
    icon: <MaterialSvg4 />,
    label: 'Quiz Results',
    optionalText: '10 Items',
    chevron: <ChevSvg />,
    action: () => {
      navigate(NavigationRoutes.APP_STACK.QUIZ_RESULT);
    },
  },
  {
    id: 4,
    icon: <MaterialSvg4 />,
    label: 'Announcements',
    optionalText: '10 Items',
    chevron: <ChevSvg />,
    action: () => {
      navigate(NavigationRoutes.APP_STACK.ANNOUNCEMENT);
    },
  },
];
export const QuizList = [
  {
    id: 0,
    label: `Audit and Assurance: CA's Core Responsibility...`,
    img: <ResultPer1 />,
    result: <Result1 />,
    date: '24 August 2020',
  },
  {
    id: 1,
    label: `Taxation Laws: CA's Critical Expertise Area....`,
    img: <ResultPer2 />,
    result: <Result2 />,
    date: '24 August 2020',
  },
];

export const TeacherList = [
  {
    id: 0,
    img: avatar1,
    teacherName: 'Sir Shehzad Ahmed',
  },
  {
    id: 1,
    img: avatar2,
    teacherName: 'Sir Ghulam Mustafa',
  },
  {
    id: 2,
    img: avatar3,
    teacherName: 'Sir Meer Biburg',
  },
];

export const ChapterList = [
  {
    id: 0,
    label: 'Chapter 1',
    desc: 'Navigating the CA Exam Journey Successfully',
    img: <GreenTick />,
  },
  {
    id: 1,
    label: 'Chapter 2',
    desc: 'Financial Reporting: A Core CA Skill',
    img: <GreenTick />,
  },
  {
    id: 2,
    label: 'Chapter 3',
    desc: '"Ethics and Integrity in CA Practice"',
    img: <WhiteTick />,
  },
  {
    id: 3,
    label: 'Chapter 4',
    desc: `Taxation Laws: CA's Critical Expertise Area`,
    img: <WhiteTick />,
  },
  {
    id: 4,
    label: 'Chapter 5',
    desc: `Audit and Assurance: CA's Core Responsibility`,
    img: <WhiteTick />,
  },
];

export const AnnouncementList = [
  {
    id: 0,
    label: 'Sir Haris Malik',
    msg: `Dear Students,
We regret to inform you that due to unforeseen circumstances, there has been a change in the schedule of your upcoming class. Please take note of the new date and time: 28th August 2023 at 2:00 PM.`,
    img: <Person1 />,
    date: '01:23 pm Tuesday 2023',
  },
  {
    id: 1,
    label: 'Sir Meer Biburg',
    msg: `Dear Students,
We kindly request you to update your calendars and set a reminder to ensure you don't miss this`,
    img: <Person2 />,
    date: '01:23 pm Tuesday 2023',
  },
  {
    id: 2,
    label: 'Sir Haris Malik',
    msg: `Dear Students,
We regret to inform you that due to unforeseen circumstances, there has been a change in the schedule of your upcoming class. Please take note of the new date and time: 28th August 2023 at 2:00 PM.`,
    img: <Person1 />,
    date: '01:23 pm Tuesday 2023',
  },
];

export const LectureDetailList = [
  {
    id: 0,
    label: 'Lecture 1',
    img: <LectureDetail />,
    desc: 'Financial Reporting: A Core CA Skill',
    time: '12:08 Hours',
  },
  {
    id: 1,
    label: 'Lecture 2',
    img: <LectureDetail />,
    desc: 'Financial Reporting: A Core CA Skill',
    time: '12:08 Hours',
  },
  {
    id: 2,
    label: 'Lecture 3',
    img: <LectureDetail />,
    desc: 'Financial Reporting: A Core CA Skill',
    time: '12:08 Hours',
  },
  {
    id: 3,
    label: 'Lecture 4',
    img: <LectureDetail />,
    desc: 'Financial Reporting: A Core CA Skill',
    time: '12:08 Hours',
  },
  {
    id: 4,
    label: 'Lecture 5',
    img: <LectureDetail />,
    desc: 'Financial Reporting: A Core CA Skill',
    time: '12:08 Hours',
  },
];
// export const ZoomClassList = [
//   {
//     id: 0,
//     label: 'Financial Reporting: A Core CA Skill',
//     date: '26 August 2023',
//     time: '02:43 Hours',
//     img: <ClassSvg />,
//     people: avatar1,
//   },
//   {
//     id: 1,
//     label: 'Financial Reporting: A Core CA Skill',
//     date: '26 August 2023',
//     time: '02:43 Hours',
//     img: <ClassSvg />,
//     people: avatar1,
//   },
//   {
//     id: 2,
//     label: 'Financial Reporting: A Core CA Skill',
//     date: '26 August 2023',
//     time: '02:43 Hours',
//     img: <ClassSvg />,
//     people: avatar1,
//   },
//   {
//     id: 3,
//     label: 'Financial Reporting: A Core CA Skill',
//     date: '26 August 2023',
//     time: '02:43 Hours',
//     img: <ClassSvg />,
//     people: avatar1,
//   },
//   {
//     id: 4,
//     label: 'Financial Reporting: A Core CA Skill',
//     date: '26 August 2023',
//     time: '02:43 Hours',
//     img: <ClassSvg />,
//     people: avatar1,
//   },
// ];

export const ZoomClassList = [
  [
    {
      id: 0,
      label: 'Financial Reporting: A Core CA Skill',
      date: '26 August 2023',
      time: '02:43 Hours',
      // img: <ClassSvg />,
      // people: avatar1,
    },
    {
      id: 1,
      label: 'Financial Reporting: A Core CA Skill',
      date: '26 August 2023',
      time: '02:43 Hours',
      // img: <ClassSvg />,
      // people: avatar1,
    },
    {
      id: 2,
      label: 'Financial Reporting: A Core CA Skill',
      date: '26 August 2023',
      time: '02:43 Hours',
      // img: <ClassSvg />,
      // people: avatar1,
    },
  ],
  [
    {
      id: 0,
      label: 'Financial Reporting: A Core CA Skill',
      date: '26 August 2023',
      time: '02:43 Hours',
      // img: <ClassSvg />,
      // people: avatar1,
    },
    {
      id: 1,
      label: 'Financial Reporting: A Core CA Skill',
      date: '26 August 2023',
      time: '02:43 Hours',
      // img: <ClassSvg />,
      // people: avatar1,
    },
    {
      id: 2,
      label: 'Financial Reporting: A Core CA Skill',
      date: '26 August 2023',
      time: '02:43 Hours',
      // img: <ClassSvg />,
      // people: avatar1,
    },
    {
      id: 3,
      label: 'Financial Reporting: A Core CA Skill',
      date: '26 August 2023',
      time: '02:43 Hours',
      // img: <ClassSvg />,
      // people: avatar1,
    },
  ],
  [
    {
      id: 0,
      label: 'Financial Reporting: A Core CA Skill',
      date: '26 August 2023',
      time: '02:43 Hours',
      // img: <ClassSvg />,
      // people: avatar1,
    },
    {
      id: 1,
      label: 'Financial Reporting: A Core CA Skill',
      date: '26 August 2023',
      time: '02:43 Hours',
      // img: <ClassSvg />,
      // people: avatar1,
    },
  ],
];

export const SessionList = [
  {
    id: 0,
    label: 'Karachi, Pakistan',
    img: <SessionImg1 />,
    time: 'Active Now',
    deviceName: 'Pixel 7 Pro Ultra Super Best',
  },
  {
    id: 1,
    label: 'Karachi, Pakistan',
    img: <SessionImg2 />,
    time: 'Active Now',
    deviceName: 'Pixel 7 Pro Ultra Super Best',
  },
  {
    id: 2,
    label: 'Karachi, Pakistan',
    img: <SessionImg3 />,
    time: 'Active Now',
    deviceName: 'Pixel 7 Pro Ultra Super Best',
  },
  {
    id: 3,
    label: 'Karachi, Pakistan',
    img: <SessionImg4 />,
    time: 'Active Now',
    deviceName: 'Pixel 7 Pro Ultra Super Best',
  },
];

export const NotificationList = [
  {
    id: 0,
    label: 'Carmen Parksouth',
    img: <NotificationImg1 />,
    time: '1 day',
    desc: 'Hey, can you check the latest documents posted in the group? PFA .FIG file with the documents containing... This is a test Notification Which can be customized',
  },
  {
    id: 1,
    label: 'Maryam Haider',
    img: <NotificationImg2 />,
    time: '1 day',
    desc: 'Hey, can you check the latest documents posted in the group? PFA .FIG file with the documents containing... This is a test Notification Which can be customized',
  },
  {
    id: 2,
    label: 'Heidi Turner',
    img: <NotificationImg3 />,
    time: '2 day',
    desc: 'Hey, can you check the latest documents posted in the group? PFA .FIG file with the documents containing... This is a test Notification Which can be customized',
  },
];

export const FaqsList = [
  {
    id: 0,
    label: 'Why is Evolv the best nocode tool?',
    desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor  consequat aute irure dolor',
  },
  {
    id: 1,
    label: 'When did Evolv was founded?',
    desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor  consequat aute irure dolor',
  },
  {
    id: 2,
    label: 'Is NoCode the future of the web?',
    desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor  consequat aute irure dolor',
  },
  {
    id: 3,
    label: 'How to Login Into LMS',
    desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor  consequat aute irure dolor',
  },
];
