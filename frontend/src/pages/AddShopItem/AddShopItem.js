import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FullNameField from "../../components/FullNAmeField/FullNameField";
import Property1Primary from "../../components/Property1Primary/Property1Primary";
import SectionCard3 from "../../components/GroupComponent/GroupComponent";
import DarkModeFalseTypesLTitle from "../../components/DarkModeFalseTypesLTitle/DarkModeFalseTypesLTitle";
import "./AddShopItem.css";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const AddShopItem = () => {

  const home = "vector";
  const international = "icon-park-outline_international black";
  const course = "tdesign_education black";
  const vacancy = "mdi_user-search-outline";

  const navigate = useNavigate();

  const onTTBLeftSectionIPhoneClick = useCallback(() => {
    navigate("/shops-items-rent-machine");
  }, [navigate]);

  const [formData, setFormData] = useState({
    itemname: "",
    department: "",
    rentmachinetype: "",
    contact: "",
    contact1: "",
    price: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  const onGotoshopItem = useCallback(async () => {
    
    const formDataWithFiles = new FormData();
    formDataWithFiles.append("itemname", formData.itemname);
    formDataWithFiles.append("department", formData.department);
    formDataWithFiles.append("rentmachinetype", formData.rentmachinetype);
    formDataWithFiles.append("contact", formData.contact);
    formDataWithFiles.append("contact1", formData.contact1);
    formDataWithFiles.append("price", formData.price);
    formDataWithFiles.append("image", image);
    formDataWithFiles.append("description", formData.description);


try {
    const response = await axios.post("http://localhost:3001/api/item", formDataWithFiles);
      window.alert(response.data.message);
      navigate("/shops-items-rent-machine");
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
    <div className="add-shop-item">
      <Footer
        footerTopmargin="1170px"
        imageName1={international}
        imageName2={course}
        imageName3={vacancy}
        imageName4={home}
       />
      <div className="field-parent1">
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
          fullNameInput="Department"
          fullNameInputLabel="Choose your department"
          inputname="department"
          inputtype="text"
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
          fullNameInputLabel="Enter your contact number "
          inputname="contact"
          inputtype="number"
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
          propFontFamily1="unset"
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
          fullNameInput="Rent Machine Type"
          fullNameInputLabel="Choose your rent machine type"
          inputname="rentmachinetype"
          inputtype="text"
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
          fullNameInput="Image"
          fullNameInputLabel="Upload your image"
          inputname="image"
          inputtype="file"
          changeEvent={handleImageChange}
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
        <img className="icround-upload-icon2" alt="" src="/icroundupload.svg" />

        <FullNameField
          fullNameInput="Description"
          fullNameInputLabel="Enter your description"
          inputname="description"
          inputtype="text"
          changeEvent={handleInputChange}
          propFontColor="black"
          propTop="704px"
          propLeft="0px"
          propHeight="130px"
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
          onButtonFullContainerClick={onGotoshopItem}
          property1PrimaryBackgroundColor="#f4b421"
          property1PrimaryWidth="342px"
          property1PrimaryPosition="absolute"
          property1PrimaryTop="916px"
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
        tTBLeftSectionIPhoneCursor="pointer"
        leftTitleFontFamily="'DM Sans'"
        tTBRightSectionIPhoneCursor="pointer"
        labelFontFamily="'DM Sans'"
        largeTitleFontSize="24px"
        largeTitleDisplay="inline-block"
        largeTitleFontFamily="'DM Sans'"
        onClicknext={onTTBLeftSectionIPhoneClick}
      />
     
   
      <img
        className="evaarrow-ios-downward-fill-icon3"
        alt=""
        src="/evaarrowiosdownwardfill.svg"
      />
      <img
        className="evaarrow-ios-downward-fill-icon4"
        alt=""
        src="/evaarrowiosdownwardfill.svg"
      />
    </div>
  );
};

export default AddShopItem;
