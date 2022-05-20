import Home from "../../pages/index"
import {data} from './dummyData'

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = () => <Home me={data} />
