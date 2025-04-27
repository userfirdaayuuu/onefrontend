import logo from './logo.png';
import bghome from './bghome.png';
import tutor from './tutor.png';
import logobaru from './logobaru.png';
import course from './course.png'
import coipa from './coipa.png';
// import { BiMath, FaPaperPlane, FaHeadphones, FaDesktop, FaBullhorn, FaCog } from "react-icons/fa";
import { BiMath } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";

export const assets = {
    logo,
    bghome,
    logobaru
}

export const list_course = [
    {
        course_name: "matematika",
        course_image: course
    },
    {
        course_name: "ipa",
        course_image: course
    },
    {
        course_name: "komputer",
        course_image: course
    },
    {
        course_name: "inggris",
        course_image: course
    },
]

export const course_list = [
    {
        _id: "1",
        name: "materi matematika 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "matematika"
    },
    {
        _id: "2",
        name: "materi matematika 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "matematika"
    },
    {
        _id: "3",
        name: "materi matematika 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "matematika"
    },
    {
        _id: "4",
        name: "materi matematika 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "matematika"
    },
    {
        _id: "5",
        name: "materi matematika 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "matematika"
    },
    {
        _id: "6",
        name: "materi ipa 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "ipa"
    },
    {
        _id: "7",
        name: "materi ipa 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "ipa"
    },
    {
        _id: "8",
        name: "materi ipa 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "ipa"
    },
    {
        _id: "9",
        name: "materi ipa 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "ipa"
    },
    {
        _id: "10",
        name: "materi ipa 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "ipa"
    },
    {
        _id: "11",
        name: "materi inggris 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "inggris"
    },
    {
        _id: "12",
        name: "materi inggris 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "inggris"
    },
    {
        _id: "13",
        name: "materi inggris 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "inggris"
    },
    {
        _id: "14",
        name: "materi inggris 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "inggris"
    },
    {
        _id: "15",
        name: "materi inggris 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "inggris"
    },
    {
        _id: "16",
        name: "materi tik 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "komputer"
    },
    {
        _id: "17",
        name: "materi tik 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "komputer"
    },
    {
        _id: "18",
        name: "materi tik 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "komputer"
    },
    {
        _id: "19",
        name: "materi tik 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "komputer"
    },
    {
        _id: "20",
        name: "materi tik 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        course_name: "komputer"
    }
]

export const tutor_course =[
    {
        _id: "1",
        name: "Lorem",
        image: tutor,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        mapel: "matematika"
    },
    {
        _id: "2",
        name: "Ipsum",
        image: tutor,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        mapel: "ipa"
    },
    {
        _id: "3",
        name: "dolor",
        image: tutor,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        mapel: "inggris"
    },
    {
        _id: "4",
        name: "sit",
        image: tutor,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        mapel: "tik"
    }
]

export const quiz_list = [
    {
        _id: "1",
        name: "quiz matematika 1",
        course_name: "matematika"
    },
    {
        _id: "2",
        name: "quiz matematika 2",
        course_name: "matematika"
    }
]

export const list_quiz = [
    {
        course_name: "matematika",
        course_image: course
    },
    {
        course_name: "ipa",
        course_image: course
    },
    {
        course_name: "komputer",
        course_image: course
    },
    {
        course_name: "inggris",
        course_image: course
    },
]


export const cards_new = [
  {
    icon: <BiMath size={30} />,
    course_name: "matematika",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Explore",
    buttonColor: "danger",
  },
  {
    icon: <FaComputer size={30} />,
    course_name: "komputer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Start Now",
    buttonColor: "primary",
  },
  {
    icon: <GiMaterialsScience size={30} />,
    course_name: "ipa",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Contact Us",
    buttonColor: "warning",
  },
  {
    icon: <MdLanguage size={30} />,
    course_name: "inggris",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Read More",
    buttonColor: "success",
  },
//   {
//     icon: <FaBullhorn size={30} />,
//     course_name: "komputer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     buttonText: "Stay Tuned",
//     buttonColor: "purple",
//   },
//   {
//     icon: <FaCog size={30} />,
//     course_name: "komputer",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     buttonText: "Configure",
//     buttonColor: "danger",
//   },
];

export const dummy_course = [
    {
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    tutor_name: "Lorem",
    tutor_image: tutor,
    course_name: "matematika", 
    siswa: [
        "Siswa 1",
        "Siswa 2",
        "Siswa 3",
        "Siswa 4",
        "Siswa 5",
        "Siswa 6",
        "Siswa 7",
        "Siswa 8",
        "Siswa 9",
        "Siswa 10"
    ]
    },
    {
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        tutor_name: "Lorem",
        tutor_image: tutor,
        course_name: "ipa", 
        siswa: [
            "Siswa 1",
            "Siswa 2",
            "Siswa 3",
            "Siswa 4",
            "Siswa 5",
            "Siswa 6",
            "Siswa 7",
            "Siswa 8",
            "Siswa 9",
            "Siswa 10"
        ]
        }
];

// dummyStudent.js
export const student = {
    avatar: coipa, // sementara gambar placeholder
    nama: "John Doe",
    noHp: "081234567890",
    kelas: "9 SMP",
    kursus: ["Matematika", "IPA"]
};


