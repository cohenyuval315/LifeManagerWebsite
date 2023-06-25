import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faMagnifyingGlass, faAtom, faBars, faTimes, faChartColumn, faPen, faCalendar, faBookOpen, faChessBoard, faHome, faList, faPersonRunning, faDice,faGear,faGears } from '@fortawesome/free-solid-svg-icons';

const GetIcon = (icon) => {
  return (
    <>
      <FontAwesomeIcon icon={icon} />
    </>
  );
};

const Icons = {
  ChevronDown: GetIcon(faChevronDown),
  ChevronRight: GetIcon(faChevronRight),
  MagnifyingGlass: GetIcon(faMagnifyingGlass),
  Atom: GetIcon(faAtom),
  Bars: GetIcon(faBars),
  Xmark: GetIcon(faTimes),
  BarChart: GetIcon(faChartColumn),
  Pen: GetIcon(faPen),
  Calendar: GetIcon(faCalendar),
  BookOpen: GetIcon(faBookOpen),
  Dashboard: GetIcon(faChessBoard),
  Home: GetIcon(faHome),
  List: GetIcon(faList),
  PersonRunning: GetIcon(faPersonRunning),
  Gear: GetIcon(faGear),
  Gears: GetIcon(faGears),
  Dice: GetIcon(faDice),
};

export default Icons;
