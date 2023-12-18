import {Routes,Route} from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding/Onboarding";
import Onboarding1 from "./pages/Onboarding/Onboarding1/Onboarding1";
import Onboarding2 from "./pages/Onboarding/Onboarding2/Onboarding2";
import Start from "./pages/Start/Start";
import UpdatePassword from "./pages/UpdatePassword/UpdatePassword";
import Verification from "./pages/Verification/Verification";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import RegisterAccount from "./pages/RegisterAccount/RegisterAccount";
import SignIn from "./pages/Signin/SignIn";
import IPhone13Mini139 from "./pages/IPhone13Mini139/IPhone13Mini139";
import IPhone13Mini138 from "./pages/IPhone13Mini138/IPhone13Mini138";
import SpecialContractors from "./pages/AllSpecialContractors/SpecialContractors/SpecialContractors";
import SpecialContractors1 from "./pages/AllSpecialContractors/SpecialContractors1/SpecialContractors1";
import AfterTapItem from "./pages/AfterTapItem/AfterTapItem";
import JobVacancies from "./pages/JobVacancy/JobVacancies";
import RequestForAdvertisement from "./pages/RequestFoeAdvertisement/RequestForAdvertisement";
import JobSeeker from "./pages/JobSeeker/JobSeeker";
import JobSeeker1 from "./pages/JobSeeker1/JobSeeker1";
import JobVacancies1 from "./pages/JobVacancy1/JobVacancies1";
import AddShopItem from "./pages/AddShopItem/AddShopItem";
import AddShopItem1 from "./pages/AddShopItem1/AddShopItem1";
import AddYourJobVacancies1 from "./pages/AddYourJobVacancy1/AddYourJobVacancies1";
import AddYourJobRoles from "./pages/AddYourJobRoles/AddYourJobRoles";
import AddYourShop from "./pages/AddYourShop/AddYourShop";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ShopsItemsRentMachine from "./pages/ShopItemsRentMAchine/ShopsItemsRentMachine";
import ShopsItemsCategory from "./pages/ShopItemCategory/ShopsItemsCategory";
import Applications from "./pages/Application/Applications";
import Messages from "./pages/Message/Messages";
import Help from "./pages/Help/Help";
import YourEducationCourses from "./pages/YourEducationCourse/YourEducationCourses";
import YourJobVacancies from "./pages/YourJobVacancy/YourJobVacancies";
import YourShop from "./pages/YourShop/YourShop";
import ActivatedPackages from "./pages/ActivatedPackages/ActivatedPackages";
import PersonalInformation from "./pages/PersionalInformation/PersonalInformation";
import Menu from "./pages/Menu/Menu";
import EducationCourses from "./pages/EducationCourse/EducationCourses";
import SubContractors from "./pages/SubContractors/SubContractors";
import InternationalContractors from "./pages/InternationalContractors/InternationalContractors";
import SpecialContractors2 from "./pages/AllSpecialContractors/SpecialContractors2/SpecialContractors2";
import Shop from "./pages/Shop/Shop";
import IPhone13Mini137 from "./pages/IPhone13Mini137/IPhone13Mini137";
import AddYourEducationCourse from "./pages/AddYourEducationCourse/AddYourEducationCourse";
import YourJobRoles from "./pages/YourJobRoles/YourJobRoles";
import IPhone13Mini140 from "./pages/IPhone13Mini140/IPhone13Mini140";
import Frame from "./pages/Frame 37989/Frame";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/onboarding1" element={<Onboarding1 />} />
      <Route path="/onboarding2" element={<Onboarding2 />} />
      <Route path="/register-account" element={<RegisterAccount />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      <Route path="/iphone-13-mini-137" element={<IPhone13Mini137 />} />
      <Route path="/iphone-13-mini-138" element={<IPhone13Mini138 />} />
      <Route path="/iphone-13-mini-139" element={<IPhone13Mini139 />} />
      <Route path="/iphone-13-mini-140" element={<IPhone13Mini140/>} />
      <Route path="/shops-items-category" element={<ShopsItemsCategory />} />
      <Route path="/add-shop-item1" element={<AddShopItem1 />} />
      <Route path="/shops-items-rent-machine"element={<ShopsItemsRentMachine />} />
      <Route path="/add-shop-item" element={<AddShopItem />} />
      <Route path="/special-contractors" element={<SpecialContractors2 />} />
      <Route path="/special-contractors2" element={<SpecialContractors />} />
      <Route path="/sub-contractors" element={<SubContractors />} />
      <Route path="/job-seeker" element={<JobSeeker1 />} />
      <Route path="/job-seeker1" element={<JobSeeker />} />
      <Route path="/international-contractors"element={<InternationalContractors />}/>
      <Route path="/special-contractors1" element={<SpecialContractors1 />} />
      <Route path="/education-courses" element={<EducationCourses />} />
      <Route path="/job-vacancies" element={<JobVacancies1 />} />
      <Route path="/job-vacancies1" element={<JobVacancies />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/request-for-advertisement" element={<RequestForAdvertisement />}/>
      <Route path="/personal-information" element={<PersonalInformation />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/activated-packages" element={<ActivatedPackages />} />
      <Route path="/your-shop" element={<YourShop />} />
      <Route path="/add-your-shop" element={<AddYourShop />} />
      <Route path="/your-job-vacancies" element={<YourJobVacancies />} />
      <Route path="/add-your-job-vacancies1" element={<AddYourJobVacancies1 />}/>
      <Route path="/applications" element={<Applications />} />
      <Route  path="/your-education-courses"element={<YourEducationCourses />}/>
      <Route path="/add-your-education-course" element={<AddYourEducationCourse />} />
      <Route path="/your-job-roles" element={<YourJobRoles/>} />
      <Route path="/add-your-job-roles" element={<AddYourJobRoles />} />
      <Route path="/help" element={<Help />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/after-tap-item" element={<AfterTapItem />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/frame" element={<Frame />} />
    </Routes>
  );
}
export default App;
