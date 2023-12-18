import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import DarkModeFalseTypesLTitle from "../../components/DarkModeFalseTypesLTitle/DarkModeFalseTypesLTitle";
import "./AddShopItem1.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const AddShopItem1 = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onTTBLeftSectionIPhoneClick = useCallback(() => {
    navigate("/shops-items-category");
  }, [navigate]);

  const [formData, setFormData] = useState({
    itemname: "",
    department: "",
    categorytype: "",
    subcategory: "",
    contact: "",
    contact1: "",
    price: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  const onGroupContainer11Click = useCallback(async () => {
    
    const formDataWithFiles = new FormData();
    formDataWithFiles.append("itemname", formData.itemname);
    formDataWithFiles.append("department", formData.department);
    formDataWithFiles.append("categorytype", formData.categorytype);
    formDataWithFiles.append("subcategory", formData.subcategory);
    formDataWithFiles.append("contact", formData.contact);
    formDataWithFiles.append("contact1", formData.contact1);
    formDataWithFiles.append("price", formData.price);
    formDataWithFiles.append("image", image);
    formDataWithFiles.append("description", formData.description);


try {
    const response = await axios.post("http://localhost:3001/api/item1", formDataWithFiles);
      window.alert(response.data.message);
      navigate("/shops-items-category");
  } catch (error) {
    console.error("Error submitting Item", error);
    window.alert("Error adding Item:", error);
  }
}, [formData, image, navigate]);

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};


  return (
    <div className="add-shop-item1">
      <Footer
        footerTopmargin="1275px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <div className="field-parent2">
        <FullNameField
          fullNameInput="Item Name"
          fullNameInputLabel="Enter your shop name"
          inputname="itemname"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="0px"
          propLeft="0px"
          propFontFamily="'DM Sans'"
          propBorderRadius="var(--br-3xs)"
          propBackgroundColor="#fff"
          propWidth="342px"
          propDisplay="flex"
          propFlexDirection="row"
          propAlignItems="center"
          propJustifyContent="flex-start"
          propPadding="var(--padding-base) var(--padding-xl)"
          propBoxSizing="border-box"
          propFontFamily2="'DM Sans'"
          propPosition="relative"
          propFontSize="14px"
          propLineHeight="18px"
          propColor="#c4c5c4"
          propTextAlign="left"
        />
        <FullNameField
          fullNameInput="Sub Category"
          fullNameInputLabel="Choose your sub category"
          inputname="subcategory"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="303px"
          propLeft="0px"
          propFontFamily="'DM Sans'"
          propBorderRadius="var(--br-3xs)"
          propBackgroundColor="#fff"
          propWidth="342px"
          propDisplay="flex"
          propFlexDirection="row"
          propAlignItems="center"
          propJustifyContent="flex-start"
          propPadding="var(--padding-base) var(--padding-xl)"
          propBoxSizing="border-box"
          propFontFamily2="'DM Sans'"
          propPosition="relative"
          propFontSize="14px"
          propLineHeight="18px"
          propColor="#c4c5c4"
          propTextAlign="left"
        />
        <FullNameField
          fullNameInput="Department"
          fullNameInputLabel="Choose your department"
          inputname="department"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="101px"
          propLeft="0px"
          propFontFamily="'DM Sans'"
          propBorderRadius="var(--br-3xs)"
          propBackgroundColor="#fff"
          propWidth="342px"
          propDisplay="flex"
          propFlexDirection="row"
          propAlignItems="center"
          propJustifyContent="flex-start"
          propPadding="var(--padding-base) var(--padding-xl)"
          propBoxSizing="border-box"
          propFontFamily2="'DM Sans'"
          propPosition="relative"
          propFontSize="14px"
          propLineHeight="18px"
          propColor="#c4c5c4"
          propTextAlign="left"
        />
        <FullNameField
          fullNameInput="Contact Number "
          fullNameInputLabel="Enter your contact number"
          inputname="contact"
          inputtype="number"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="404px"
          propLeft="0px"
          propFontFamily="'DM Sans'"
          propBorderRadius="var(--br-3xs)"
          propBackgroundColor="#fff"
          propWidth="342px"
          propDisplay="flex"
          propFlexDirection="row"
          propAlignItems="center"
          propJustifyContent="flex-start"
          propPadding="var(--padding-base) var(--padding-xl)"
          propBoxSizing="border-box"
          propFontFamily2="'DM Sans'"
          propPosition="relative"
          propFontSize="14px"
          propLineHeight="18px"
          propColor="#c4c5c4"
          propTextAlign="left"
        />
        <FullNameField
          fullNameInput="Price"
          fullNameInputLabel="Enter your price"
          inputname="price"
          inputtype="number"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="606px"
          propLeft="0px"
          propFontFamily="'DM Sans'"
          propBorderRadius="var(--br-3xs)"
          propBackgroundColor="#fff"
          propWidth="342px"
          propDisplay="flex"
          propFlexDirection="row"
          propAlignItems="center"
          propJustifyContent="flex-start"
          propPadding="var(--padding-base) var(--padding-xl)"
          propBoxSizing="border-box"
          propFontFamily2="'DM Sans'"
          propPosition="relative"
          propFontSize="14px"
          propLineHeight="18px"
          propColor="#c4c5c4"
          propTextAlign="left"
        />
        <FullNameField
          fullNameInput="Category Type"
          fullNameInputLabel="Choose your category type"
          inputname="categorytype"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="202px"
          propLeft="0px"
          propFontFamily="'DM Sans'"
          propBorderRadius="var(--br-3xs)"
          propBackgroundColor="#fff"
          propWidth="342px"
          propDisplay="flex"
          propFlexDirection="row"
          propAlignItems="center"
          propJustifyContent="flex-start"
          propPadding="var(--padding-base) var(--padding-xl)"
          propBoxSizing="border-box"
          propFontFamily2="'DM Sans'"
          propPosition="relative"
          propFontSize="14px"
          propLineHeight="18px"
          propColor="#c4c5c4"
          propTextAlign="left"
        />
        <FullNameField
          fullNameInput="Contact Number 2 (if any)"
          fullNameInputLabel="Enter your contact number 02"
          inputname="contact1"
          inputtype="number"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="505px"
          propLeft="0px"
          propFontFamily="'DM Sans'"
          propBorderRadius="var(--br-3xs)"
          propBackgroundColor="#fff"
          propWidth="342px"
          propDisplay="flex"
          propFlexDirection="row"
          propAlignItems="center"
          propJustifyContent="flex-start"
          propPadding="var(--padding-base) var(--padding-xl)"
          propBoxSizing="border-box"
          propFontFamily2="'DM Sans'"
          propPosition="relative"
          propFontSize="14px"
          propLineHeight="18px"
          propColor="#c4c5c4"
          propTextAlign="left"
        />
        <FullNameField
          fullNameInput="Image"
          fullNameInputLabel="Upload your image"
          inputname="image"
          inputtype="file"
          changeEvent={handleImageChange}
          propFontColor="black"
          propTop="707px"
          propLeft="0px"
          propFontFamily="'DM Sans'"
          propBorderRadius="var(--br-3xs)"
          propBackgroundColor="#fff"
          propWidth="342px"
          propDisplay="flex"
          propFlexDirection="row"
          propAlignItems="center"
          propJustifyContent="flex-start"
          propPadding="var(--padding-base) var(--padding-xl)"
          propBoxSizing="border-box"
          propFontFamily2="'DM Sans'"
          propPosition="relative"
          propFontSize="14px"
          propLineHeight="18px"
          propColor="#c4c5c4"
          propTextAlign="left"
        />
        <Property1Primary
          button="Add Item"
          onButtonFullContainerClick={onGroupContainer11Click }
          property1PrimaryBackgroundColor="#f4b421"
          property1PrimaryWidth="342px"
          property1PrimaryPosition="absolute"
          property1PrimaryTop="1017px"
          property1PrimaryLeft="0px"
          property1PrimaryCursor="unset"
        />
      </div>
      <SectionCard3/>
      <DarkModeFalseTypesLTitle
        heading="Add Your Item"
        darkModeFalseTypesLTitleWidth="375px"
        darkModeFalseTypesLTitlePosition="absolute"
        darkModeFalseTypesLTitleTop="44px"
        darkModeFalseTypesLTitleLeft="0px"
        tTBLeftSectionIPhoneCursor="pointer"
        leftTitleFontFamily="'DM Sans'"
        tTBRightSectionIPhoneCursor="pointer"
        labelFontFamily="'DM Sans'"
        largeTitleFontSize="24px"
        largeTitleDisplay="inline-block"
        largeTitleFontFamily="'DM Sans'"
        onClicknext={onTTBLeftSectionIPhoneClick}
      />
      <img className="icround-upload-icon3" alt="" src="/icroundupload.svg" />
      <FullNameField
          fullNameInput="Message"
          fullNameInputLabel="Enter your message"
          inputname="message"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="977px"
          propLeft="15px"
          propFontFamily="'DM Sans'"
          propBorderRadius="var(--br-3xs)"
          propBackgroundColor="#fff"
          propWidth="342px"
          propHeight="140px"
          // // propDisplay="flex"
          // propFlexDirection="row"
          // propAlignItems="center"
          // propJustifyContent="flex-start"
          //propPadding="var(--padding-base) var(--padding-xl)"
         // propBoxSizing="border-box"
          propFontFamily2="'DM Sans'"
          //propPosition="relative"
          propFontSize="14px"
          propLineHeight="18px"
          propColor="#c4c5c4"
         // propTextAlign="left"
        />
      <img
        className="evaarrow-ios-downward-fill-icon5"
        alt=""
        src="/evaarrowiosdownwardfill.svg"
      />
      <img
        className="evaarrow-ios-downward-fill-icon6"
        alt=""
        src="/evaarrowiosdownwardfill.svg"
      />
      <img
        className="evaarrow-ios-downward-fill-icon7"
        alt=""
        src="/evaarrowiosdownwardfill.svg"
      />
    </div>
  );
};

export default AddShopItem1;
