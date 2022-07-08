import { IoMdColorPalette, IoIosBook } from "react-icons/io";
import { BsFillLaptopFill, BsEmojiLaughingFill } from "react-icons/bs";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { FaCanadianMapleLeaf, FaMusic } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
export const categories = [
  {
    id: 1,
    name: "Games",
    icon: <IoGameController />,
  },
  {
    id: 2,
    name: "Technology",
    icon: <BsFillLaptopFill />,
  },
  {
    id: 3,
    name: "Nature",
    icon: <FaCanadianMapleLeaf />,
  },
 
  {
    id: 4,
    name: "Sports",
    icon: <MdOutlineSportsVolleyball />,
  },
  {
    id: 5,
    name: "Funny",
    icon: <BsEmojiLaughingFill />,
  },
  {
    id: 6,
    name: "Educational",
    icon: <IoIosBook />,
  },

  {
    id: 7,
    name: "Music",
    icon: <FaMusic />,
  },
  {
    id: 8,
    name: "Art",
    icon: <IoMdColorPalette />,
  },
 
];
